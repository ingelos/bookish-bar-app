import BookCard from "../bookCard/BookCard.jsx";


function BookList({books}) {

    return (
            <article className='book-card-container'>
                {Object.keys(books).length > 0 &&
                    <ul>
                        {books.map((book) => {
                            return (
                                <BookCard
                                    id={book.id}
                                    key={`${book.title}-${book.authors[0].name}-${book.key}`}
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