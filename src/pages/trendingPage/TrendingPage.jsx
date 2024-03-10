import BrowseSubject from "../../components/browseSubject/BrowseSubject.jsx";

import {useContext, useEffect, useState} from "react";
import axios from "axios";
import BookCard from "/src/components/bookCard/BookCard.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";
import {useParams} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import CheckIcon from "../../assets/icons/check.svg";
import {AuthContext} from "../../context/AuthContext.jsx";


function Trending() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [works, setWorks] = useState(0);
    const [myBooks, setMyBooks] = useState([]);
    const [addedBook, setAddedBook] = useState({});
    const {isAuth} = useContext(AuthContext)
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 20;


    useEffect(() => {
        const controller = new AbortController();

        const myBooks = JSON.parse(localStorage.getItem('mybooks')) || [];
        setMyBooks(myBooks);
        console.log('myBooks:', myBooks)

        async function fetchTrending() {
            setError(false);

            try {
                setLoading(true);
                const {data} = await axios.get(`https://openlibrary.org/trending/daily.json`, {
                    signal: controller.signal,
                    params:  {
                        offset: (currentPage - 1) * pageSize,
                        limit: pageSize
                    },
                });

                console.log(data);
                console.log(data.works);
                setBooks(data.works);
                setWorks(data.work_count);

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
            localStorage.clear();
        }
    }, [currentPage]);

    const totalPages = Math.ceil(works / pageSize);

    function handleAddToMyBooks(book) {
        const newBooks = JSON.parse(localStorage.getItem('mybooks')) || [];
        const alreadyAdded = newBooks.some((savedBook) => savedBook.key === book.key);
        console.log(book.key)

        if (!alreadyAdded) {
            newBooks.push(book);
            localStorage.setItem('mybooks', JSON.stringify(newBooks));
            console.log('book added to mybooks')

            setAddedBook((prev) => ({
                ...prev,
                [book.key]: true,
            }));
        } else {
            console.log('book already added to mybooks')
        }
    }


    // async function pageChange(pageNumber){
    //     setCurrentPage(pageNumber);
    //     try {
    //         const {data} = await axios.get(`https://openlibrary.org/trending/daily.json`, {
    //             params:
    //                 {
    //                     page: pageNumber,
    //                     limit: 20,
    //                     offset: (pageNumber - 1) * 20
    //                 },
    //         });
    //         setBooks(data.docs)
    //     } catch(e) {
    //         console.error(error);
    //     }
    // }


    return (

        <section className='romance-section outer-container'>
            <div className='romance-section inner-container'>

                {loading && <p>Loading...</p>}

                <div className='result-container'>
                    {/*<div className='subject-container'>*/}
                    {/*    <h2 className='result-header-title'>Trending today:</h2>*/}
                    {/*</div>*/}
                    <div className='subject-container'>
                        <h2 className='result-header-title'>Trending today</h2>
                        {Object.keys(books).length > 0 &&
                            <p>Total works: {works}</p>
                        }
                    </div>
                    <article className='book-card-container'>
                        <div className='result-content-container'>
                            {books?.map((book) => (
                                <div className='book-container' key={book.key}>
                                <BookCard
                                    bookId={(book.key).replace("/works/", "")}
                                    cover={book.cover_edition_key ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg` : ''}
                                    key={`${book.title}-${book.cover_edition_key}`}
                                    title={book.title}
                                    author={book.author_name}
                                    year={`First published in: ${book.first_publish_year}`}
                                />
                                    {isAuth ?
                                    <div>
                                        {!addedBook[book.key] ?
                                            <Button id='add-rem-button'
                                                    onClick={() => handleAddToMyBooks(book)}
                                            >
                                                {myBooks.some((savedBook) => savedBook.key === book.key) ? <p className='on-my-books-btn-text'>On MyBooks </p> : <p className='add-to-my-books-btn-text'>Add to MyBooks</p>}
                                            </Button>
                                            : <Button id='saved-button'>Saved <img src={CheckIcon} className='check-icon' alt=''/></Button>
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
                    {books.length === 0 && error && <p>Something went wrong fetching your book data...</p>}
                </div>
                <div>
                    <button onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span className='page-settings'>{`Page ${currentPage} of ${totalPages}`}</span>
                    <button onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
                {/*<div>*/}
                {/*    <Pagination*/}
                {/*        page={currentPage}*/}
                {/*        totalPages={totalPages}*/}
                {/*        onPageChange={pageChange}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        </section>
    )
}

export default Trending;


