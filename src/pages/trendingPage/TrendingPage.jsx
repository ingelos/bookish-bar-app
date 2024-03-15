
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import BookCard from "/src/components/bookCard/BookCard.jsx";
import {useNavigate} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import CheckIcon from "../../assets/icons/check.svg";
import {AuthContext} from "../../context/AuthContext.jsx";


function Trending() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [myBooks, setMyBooks] = useState([]);
    const [addedBook, setAddedBook] = useState({});
    const {isAuth} = useContext(AuthContext);
    const pageSize = 20;
    const navigate = useNavigate();

    useEffect(() => {

        const controller = new AbortController();

        const myBooks = JSON.parse(localStorage.getItem('mybooks')) || [];
        setMyBooks(myBooks);
        console.log('myBooks:', myBooks)

        async function fetchTrending() {
            setError(false);
            setLoading(true);

            try {
                const {data} = await axios.get(`https://openlibrary.org/trending/daily.json`, {
                    signal: controller.signal,
                    params:  {
                        offset: 0,
                        limit: pageSize
                    },
                });
                console.log(data);
                console.log(data.works);
                setBooks(data.works);

            } catch (e) {
                if (axios.isCancel(e)) {
                    console.error('Request is cancelled');
                } else {
                    console.error(e);
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchTrending();


        return function cleanup() {
            controller.abort();
        }
    }, []);


    function handleAddToMyBooks(book, status) {
        const newBooks = JSON.parse(localStorage.getItem('mybooks')) || [];
        const alreadyAdded = newBooks.some((savedBook) => savedBook.key === book.key);

        if (!alreadyAdded) {
            const newBook = { ...book, status: status || 'read'};
            newBooks.push(newBook);
            localStorage.setItem('mybooks', JSON.stringify(newBooks));
            console.log('book added to mybooks', newBook)

            setAddedBook((prev) => ({
                ...prev,
                [book.key]: true,
            }));
        } else {
            console.log('book already added to mybooks')
        }
    }


    return (
        <section className='romance-section outer-container'>
            <div className='romance-section inner-container'>
                {loading && <p>Loading...</p>}
                {error && <p>Something went wrong... try again</p>}
                <div className='result-container'>
                    <div className='subject-container'>
                        <h2 className='result-header-title'>Trending today</h2>
                    </div>
                    <article className='book-card-container'>
                        <div className='result-content-container'>
                            {books.map((book) => (
                                <div className='book-container' key={book.key}>
                                <BookCard
                                    bookId={(book.key).replace("/works/", "")}
                                    authorId={book.author_key ? book.author_key[0] : ''}
                                    cover={book.cover_edition_key ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg` : ''}
                                    title={book.title ? book.title : ''}
                                    author={book.author_name ? book.author_name[0] : ''}
                                    year={book.first_publish_year ? `First published in: ${book.first_publish_year}` : ''}
                                />
                                    {isAuth ?
                                    <div>
                                        {!addedBook[book.key] ?
                                            <Button className='my-books-button'
                                                    onClick={() => handleAddToMyBooks(book)}
                                            >
                                                {myBooks.some((savedBook) => savedBook.key === book.key) ?
                                                    <p className='on-my-books-btn-text'>On MyBooks </p> :
                                                    <p className='add-to-my-books-btn-text'>Add to MyBooks</p>}
                                            </Button>
                                            : <Button id='saved-button'>
                                                Saved
                                                <img src={CheckIcon}
                                                     className='check-icon'
                                                     alt=''/>
                                            </Button>
                                        }
                                    </div>
                                    :
                                    <div>
                                        <Button
                                            id='add-button'
                                            onClick={() => navigate('/login')}
                                        >
                                            Login to add
                                        </Button>
                                    </div>
                                    }
                                </div>
                            ))}
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Trending;


