import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './BookDetailPage.css';
import BookDetails from "../../components/bookDetails/BookDetails.jsx";



function BookDetailPage() {

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {bookId} = useParams();
    const {authorId} = useParams();

    useEffect(() => {
        const controller = new AbortController();

        async function getBookDetails() {
            setError(false);

            try {
                setLoading(true);
                const {data} = await axios.get(`https://openlibrary.org/works/${bookId}.json`, {
                    signal: controller.signal,
                })
                console.log(data);
                setBook(data);

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

        getBookDetails();

        return function cleanup() {
            controller.abort();
        }

    }, []);


    return (
        <>
            <section className='detail-page outer-container'>
                <div className='detail-page inner-container'>
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}

                    <div className='detail-content-container'>

                        {Object.keys(book).length > 0 &&
                            // <div className='detail-article'>
                            //     <div className='detail-cover'>
                            //         <img
                            //             src={book.covers ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg` : 'no cover available'}
                            //             alt={''} className='detail-cover-img'/>
                            //     </div>
                            //     <div className='detail-info'>
                            //         <h2>{book.title}</h2>
                            //         <h3>{authorId}</h3>
                            //
                            //         <p className='detail-description'>{book.description.value ? book.description.value : book.description}</p>
                            //         <p><em>{book.excerpts ? `First line: ${book.excerpts[0].excerpt}` : ''}</em></p>
                            //         <p className='book-link'>{book.links ? `${book.links[0].title}: ${book.links[0].url}` : ''}</p>
                            //     </div>
                            // </div>

                            <BookDetails
                                cover={book.covers ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg` : 'no cover available'}
                                title={book.title}
                                name={authorId}
                                authorId={book.authors ? book.authors[0].author.key.replace('/authors/', '') : ''}
                                description={book.description.value ? book.description.value : book.description}
                                excerpts={book.excerpts ? `First line: ${book.excerpts[0].excerpt}` : ''}
                                links={book.links ? `${book.links[0].title}: ${book.links[0].url}` : ''}
                            />

                        }

                        {/*<AddToList />*/}
                    </div>
                </div>
            </section>
        </>
    );
}

export default BookDetailPage;

