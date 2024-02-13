import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import BookCard from "../../components/bookCard/BookCard.jsx";


function BookDetailPage() {

    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        const controller = new AbortController();

        async function getBookDetails() {
            setError(false);

            try {
                setLoading(true);
                const {data} = await axios.get(`https://openlibrary.org/works/${id}.json`, {
                    signal: controller.signal,
                })
                console.log(data);
                console.log(data.works);
                setBook(data.works);

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

    }, [id]);


    return (
        <>
            <section className='detail-page outer-container'>
                <div className='detail-page inner-container'>
                    <article>
                        <h2>Book details of {id}:</h2>
                        {loading && <p>Loading...</p>}
                        {error && <p>{error}</p>}
                        {book?.map((book) => (
                            <div className='result-inner-content-container'>
                            <BookCard
                                id={book.key}
                                key={`${book.title}-${book.key}-${book.isbn}-${book._version_}`}
                                title={book.title}
                                author={book.author_name}
                                cover={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : `no cover available`}
                                year={book.first_publish_year}
                            />
                        </div>
                        ))}

                        {Object.keys(book).length > 0 && (
                            <>
                                <h2>{book.title}</h2>
                                <p>{book.description}</p>
                            </>
                        )}
                    </article>
                </div>
            </section>
        </>
    );
}

export default BookDetailPage;

//
//
// function BookDetail() {
//
//     const [books, setBooks] = useState([]);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const {work} = useParams();
//
//     useEffect(() => {
//         const controller = new AbortController();
//
//         async function fetchRomance() {
//             setError(false);
//             setLoading(true);
//
//             try {
//                 const {data} = await axios.get(`https://openlibrary.org/works/${work}/${title}`, {
//                     signal: controller.signal,
//                 });
//                 console.log(data);
//                 console.log(data.works);
//                 setBooks(data.works);
//                 setWorks(data.work_count);
//
//             } catch (e) {
//                 if (axios.isCancel(e)) {
//                     console.error('Request is cancelled');
//                 } else {
//                     console.error(e);
//                     setError(true);
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         }
//
//         fetchRomance();
//
//         return function cleanup() {
//             controller.abort();
//         }
//
//     }, []);
//
// return (
//     <>
//
//     </>
// )
//
//
//
// }
// export default BookDetail;