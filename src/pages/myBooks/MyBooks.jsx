import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import './MyBooks.css'
import BookCard from "../../components/bookCard/BookCard.jsx";
import {Link} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import Rating from "../../components/rating/Rating.jsx";
// import TrashIcon from "../../assets/icons/trash.svg";
// import MyBooksNavigation from "../../components/mybooksNavivation/MyBooksNavigation.jsx";


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
        if (filter === 'read') {
            return books.filter(book => book.status === 'read');
        } else if (filter === 'wantToRead') {
            return books.filter(book => book.status === 'wantToRead');
        }
        return books;
    }

    return (
        <section className='my-books outer-container'>
            <div className='my-books inner-container'>

                {isAuth ?
                    <div className='result-container'>
                        <div className='subject-container'>
                            <h2 className='result-header-title'>MY BOOKS</h2>
                        </div>
                        <div>
                            {myBooks.length === 0 ? (
                                <div className='empty-container'>
                                    <p>You have not saved any books yet!</p>
                                    <p>Find your favorite books by <Link
                                        to={'/search-results'}><strong>search</strong></Link> or <Link
                                        to={'/browse'}><strong>browsing</strong></Link></p>
                                </div>
                            ) : (
                                <div>
                                    <div className='my-books-navigation'>
                                        <Button onClick={() => setFilter('all')}>All books</Button>
                                        <Button onClick={() => setFilter('wantToRead')}>Read</Button>
                                        <Button onClick={() => setFilter('read')}>Want to read</Button>
                                    </div>
                                    <article className='book-card-container'>

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
                                                            {book.status === 'read' ?
                                                                <Button
                                                                    className='status-button'
                                                                    onClick={() => editReadStatus(book.key, 'wantToRead')}>
                                                                    Want to read
                                                                </Button>
                                                                :
                                                                <Button
                                                                    className='status-button-read'
                                                                    onClick={() => editReadStatus(book.key, 'read')}>
                                                                    Read
                                                                </Button>
                                                            }
                                                        </div>
                                                        <div className='rating-and-remove'>
                                                            <div>
                                                                <h5 className='your-rating'>Your rating:</h5>
                                                                <Rating
                                                                    bookKEY={book.key}
                                                                />
                                                            </div>
                                                            <Button
                                                                className='remove-btn'
                                                                onClick={() => removeFromMyBooks(book.key)}
                                                            >
                                                                Remove
                                                            </Button>

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