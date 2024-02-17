import {useEffect, useState} from "react";
import axios from "axios";
import BookCard from "../../components/bookCard/BookCard.jsx";


function MyBooks() {
    const [myBooks, setMyBooks] = useState([])

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
                <div>
                    <h2>MY BOOKS</h2>
                </div>
                <div className='result-content-container'>

                    {/*{myBooks.map((book) => (*/}
                    {/*    <BookCard*/}
                    {/*        id={(book.key).replace("/works/", "")}*/}
                    {/*        cover={book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : ''}*/}
                    {/*        // key={`${book.title}-${book.cover_id}`}*/}
                    {/*        title={book.title}*/}
                    {/*        // author={book.authors[0].name}*/}
                    {/*        year={book.first_publish_year}*/}
                    {/*    />*/}
                    {/*))}*/}
                    {myBooks.map((book) => (
                        <div className='books' key={`${book.title}-${book.isbn}-${book._version_}`}>
                            <h2>{book.title}</h2>
                            <button onClick={() => removeFromMyBooks(book.key)}>Remove from MyBooks</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}

export default MyBooks;