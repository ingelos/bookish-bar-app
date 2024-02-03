import BookCard from "../bookCard/BookCard.jsx";


function BookList({books}) {

    return (
            <article className='book-card-container'>
                {Object.keys(books).length > 0 &&
                    <ul>
                        {books.map((book) => {
                            return (
                                <BookCard
                                    id={book.key}
                                    cover={book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : 'no cover available'}
                                    // key={`${book.title}-${book.authors[0].name}-${book.key}`}
                                    key={`${book.title}-${book.cover_id}`}
                                    title={book.title}
                                    author={book.authors[0].name}
                                    year={book.first_publish_year}
                                />
                            )
                        })}
                    </ul>
                }
            </article>
    )
}

export default BookList;