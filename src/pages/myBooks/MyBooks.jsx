import {useEffect, useState} from "react";
import axios from "axios";
import BookCard from "../../components/bookCard/BookCard.jsx";


function MyBooks() {
    // const [error, setError] = useState();
    // const [loading, setLoading] = useState(false);
    const [myBooks, setMyBooks] = useState([])

    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem('mybooks')) || [];
        setMyBooks(savedBooks);
    }, []);

    return (

        <section className='my-books outer-container'>
            <div className='my-books inner-container'>
                <div>
                    <h2>My Books</h2>
                </div>
                <div className='result-content-container'>
                    {myBooks.map((book) => (
                        <BookCard
                            id={(book.key).replace("/works/", "")}
                            // id={book.key}
                            cover={book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : ''}
                            key={`${book.title}-${book.cover_id}`}
                            title={book.title}
                            author={book.authors[0].name}
                            year={book.first_publish_year}
                        />
                    ))}
                </div>
            </div>
        </section>
    )

}

export default MyBooks;