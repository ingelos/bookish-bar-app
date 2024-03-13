import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import './MyBooks.css'
import BookCard from "../../components/bookCard/BookCard.jsx";
import {Link, useNavigate} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import Rating from "../../components/rating/Rating.jsx";
import TrashIcon from "../../assets/icons/trash.svg";


function MyBooks() {
    const [myBooks, setMyBooks] = useState([]);
    const [filter, setFilter] = useState('all');
    const {isAuth} = useContext(AuthContext)

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('mybooks')) || [];
        setMyBooks(storedBooks);


    }, []);

    function removeFromMyBooks(bookKey) {
        const removedFromMyBooks = myBooks.filter((book) => book.key !== bookKey);
        setMyBooks(removedFromMyBooks);
        localStorage.setItem('mybooks', JSON.stringify(removedFromMyBooks));
    }

    function editReadStatus(bookKey, newStatus) {
        const updatedBooks = myBooks.map((book) => {
            if (book.key === bookKey) {
                return {
                    ...book,
                    status: newStatus,
                };
            }
            return book;
        });
        setMyBooks(updatedBooks);
        localStorage.setItem('mybooks', JSON.stringify(updatedBooks));
    }

    function filterBooks(books) {
        if (filter === 'wantToRead') {
            return books.filter(book => book.status === 'wantToRead');
        } else if (filter === 'read') {
            return books.filter(book => book.status === 'read');
        }
        return books;
    }

    return (
        <section className='my-books outer-container'>
            <div className='my-books inner-container'>

                {isAuth ?
                    <div className='result-container'>
                        <div>
                            {myBooks.length === 0 ? (
                                <div className='empty-container'>
                                    <div className='subject-container'>
                                        <h2 className='result-header-title'>MY BOOKS</h2>
                                    </div>
                                    <p>You have not saved any books yet!</p>
                                    <p>Find your favorite books by <Link
                                        to={'/search-results'}><strong>search</strong></Link> or <Link
                                        to={'/browse'}><strong>browsing</strong></Link></p>
                                </div>
                            ) : (
                                <div>
                                    <div className='subject-container'>
                                        <h2 className='result-header-title'>MY BOOKS</h2>
                                    </div>
                                    <div className='my-books-navigation'>
                                        <Button onClick={() => setFilter('all')}
                                                className={filter === 'all' ? 'activeButton' : 'inactiveButton'}>All
                                            books</Button>
                                        <Button onClick={() => setFilter('wantToRead')}
                                                className={filter === 'wantToRead' ? 'activeButton' : 'inactiveButton'}>Read</Button>
                                        <Button onClick={() => setFilter('read')}
                                                className={filter === 'read' ? 'activeButton' : 'inactiveButton'}>Want
                                            to read</Button>
                                    </div>
                                    <article className='book-card-container'>
                                        <div className='my-books-overview'>
                                            <div className='overview-one'>
                                                <p>cover</p>
                                                <p>title</p>
                                            </div>
                                            <div className='overview-two'>
                                                <div>
                                                    <p>status</p>
                                                    <p id='click-to-change'>(click to change)</p>
                                                </div>
                                                <p>rating</p>
                                            </div>
                                        </div>
                                        {filterBooks(myBooks).map((book) => (
                                            <div key={book.key}>
                                                <div className='book-container'>
                                                    <BookCard
                                                        cover={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                                                        title={book.title}
                                                        author={book.author_name ? book.author_name[0] : book.authors[0].name}
                                                        bookId={(book.key).replace("/works/", "")}
                                                    />
                                                    <div className='status-and-rating-container'>
                                                        <div className='book-status'>
                                                            {book.status === 'wantToRead' ?
                                                                <Button
                                                                    className='status-button'
                                                                    onClick={() => editReadStatus(book.key, 'read')}>
                                                                    Read
                                                                </Button>
                                                                :
                                                                <Button
                                                                    className='status-button-wantToRead'
                                                                    onClick={() => editReadStatus(book.key, 'wantToRead')}>
                                                                    Want to Read
                                                                </Button>
                                                            }
                                                        </div>
                                                        <div className='rating-and-remove'>
                                                            <div className='rating-container'>
                                                                {/*<h5 className='your-rating'>Your rating:</h5>*/}
                                                                <Rating
                                                                    bookKEY={book.key}
                                                                />
                                                            </div>
                                                            <button
                                                                className='remove-btn'
                                                                onClick={() => removeFromMyBooks(book.key)}
                                                            >
                                                                <img src={TrashIcon} alt='' className='trash-icon'/>
                                                            </button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </article>
                                </div>
                            )}
                        </div>
                    </div>
                    :
                    <div className='my-books-link-container'>
                        <p className='link-to-login'><Link to={'/login'}><strong>Log in</strong></Link> to see your
                            saved books!</p>
                        <p>New here? Make an <Link to={'/register'}><strong>account</strong></Link> to save and rate
                            your books!</p>
                    </div>
                }
            </div>
        </section>
    )

}

export default MyBooks;