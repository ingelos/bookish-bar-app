import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


function BookDetailPage() {

    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        const controller = new AbortController();
        setError(false);
        setLoading(true);

        async function getBookDetails() {

            try {
                const {data} = await axios.get(`https://openlibrary.org${id}.json`, {
                    'Accept': 'application/json',
                    signal: controller.signal,
                })
                console.log(data);
                setBook(data);

            } catch (e) {
                console.error(error);
                setError(true);
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
                        <h2>Book details:</h2>
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