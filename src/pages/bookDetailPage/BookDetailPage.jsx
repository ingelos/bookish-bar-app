import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import BookCard from "../../components/bookCard/BookCard.jsx";
import './BookDetailPage.css';
import AddToList from "../../components/addToList/AddToList.jsx";


function BookDetailPage() {

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {bookId} = useParams();

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
                        <article className='book-detail-container'>
                        {Object.keys(book).length > 0 &&
                        <>
                            <div>
                            <img src={book.covers[0] ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg` : 'no cover available'} alt={''} className='detail-cover'/>
                            </div>
                            <div>
                                <h2>{book.title}</h2>
                                <h3>{book.authors.author}</h3>

                            <p className='detail-description'>{book.description}</p>
                            </div>
                        </>
                        }
                        </article>
                        <AddToList />
                    </div>
                </div>
            </section>
        </>
    );
}

export default BookDetailPage;

