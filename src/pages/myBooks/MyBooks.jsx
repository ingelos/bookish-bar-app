import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import './MyBooks.css'
import BookCard from "../../components/bookCard/BookCard.jsx";
import {Link} from "react-router-dom";
import Button from "../../components/button/Button.jsx";


function MyBooks() {
    const [myBooks, setMyBooks] = useState([])
    const {isAuth} = useContext(AuthContext)

    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem('mybooks')) || [];
        setMyBooks(savedBooks);
    }, []);

    function removeFromMyBooks(bookKey) {
        const updatedMyBooks = myBooks.filter((book) => book.key !== bookKey);
        setMyBooks(updatedMyBooks);
        localStorage.setItem('mybooks', JSON.stringify(updatedMyBooks));
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
                                    <div>
                                        <p>You have not saved any books yet!</p>
                                        <p>Find your favorite books through <Link
                                            to={'/search-results'}><strong>search</strong></Link> or <Link
                                            to={'/browse'}><strong>browsing</strong></Link></p>
                                    </div>
                                ) : (
                                    <article className='book-card-container'>
                                        <div className='result-content-container'>
                                    {myBooks.map((book) => (

                                        <div className='books'
                                             key={`${book.title}-${book.isbn}-${book._version_}`}>
                                            <div className='book-container'>
                                                <BookCard
                                                    cover={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : ''}
                                                    title={book.title}
                                                    author={book.author_name[0]}
                                                />
                                                <div className='remove-button'>
                                                    <span>Stars</span>
                                                    <Button onClick={() => removeFromMyBooks(book.key)}>Remove</Button>
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                    }
                                        </div>
                                    </article>
                                )}
                            </div>

                    </div>
                    :
                    <div>
                        <p className='link-to-login'>Log in <Link to={'/login'}><strong>here</strong></Link> to see your
                            saved books!</p>
                    </div>
                }

            </div>
        </section>
    )

}

export default MyBooks;