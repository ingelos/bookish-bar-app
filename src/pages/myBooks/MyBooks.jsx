import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import './MyBooks.css'
import BookCard from "../../components/bookCard/BookCard.jsx";
import {Link, useParams} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import Rating from "../../components/rating/Rating.jsx";


function MyBooks() {
    const [myBooks, setMyBooks] = useState([])
    // const {isAuth} = useContext(AuthContext)


    useEffect(() => {
        const myBooks = JSON.parse(localStorage.getItem('mybooks')) || [];
        setMyBooks(myBooks);

    }, []);

    function removeFromMyBooks(bookKey) {
        const removedFromMyBooks = myBooks.filter((book) => book.key !== bookKey);
        setMyBooks(removedFromMyBooks);
        localStorage.setItem('mybooks', JSON.stringify(removedFromMyBooks));
    }


    return (

        <section className='my-books outer-container'>
            <div className='my-books inner-container'>

                {/*{isAuth ?*/}
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
                                <article className='book-card-container'>
                                    <div className='result-content-container'>
                                        <div className='mybooks' >
                                            {console.log('mybooks', myBooks)}

                                        {myBooks.map((book) => (
                                            <div className='books' key={book.key}>
                                                {console.log('key', book.key)}
                                                <div className='book-container'>
                                                    <BookCard
                                                        cover={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`}
                                                        title={book.title}
                                                        author={book.author_name}
                                                        bookId={(book.key).replace("/works/", "")}
                                                    />
                                                    <div className='rating-and-remove'>
                                                        {/*<Rating*/}
                                                        {/*    bookKEY={book.key}*/}
                                                        {/*/>*/}
                                                        <Button
                                                            id='add-rem-button'
                                                            onClick={() => removeFromMyBooks(book.key)}
                                                        >
                                                            Remove
                                                        </Button>
                                                    </div>
                                                </div>
                                                </div>
                                        ))}
                                        </div>
                                        </div>
                                    </article>
                            )}
                        </div>
                    </div>

                {/*    :*/}
                {/*    <div>*/}
                {/*        <p className='link-to-login'>Log in <Link to={'/login'}><strong>here</strong></Link> to see your*/}
                {/*            saved books!</p>*/}
                {/*    </div>*/}
                {/*}*/}

            </div>
        </section>
    )

}

export default MyBooks;