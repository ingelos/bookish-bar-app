import {useEffect, useState} from "react";
import axios from "axios";
import BookCard from "../../components/bookCard/BookCard.jsx";
import './BrowseRomance.css'


function BrowseRomance() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchRomance() {
            setError(false);
            setLoading(true);

            try {
                const response = await axios.get('https://openlibrary.org/subjects/love.json', {
                    signal: controller.signal,
                });
                console.log(response.data.works);
                setBooks(response.data.works);

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

        fetchRomance();

        return function cleanup() {
            controller.abort();
        }

    }, []);


    return (

        <section className='romance-section outer-container'>
            <div className='romance-section inner-container'>
                <div className='subject-container'>
                    <h2 className='subject-header-title'>Romance</h2>
                </div>
                <article className='book-card-container'>

                    {Object.keys(books).length > 0 &&
                        <>
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
                        </>
                    }
                    {loading && <p>Loading...</p>}
                </article>
            </div>
        </section>
    )

    //     <div>
    //         {/*<button type='button' onClick={fetchRomance}>haal op</button>*/}
    //         {/*{books.length > 0 && (*/}
    //             <>
    //                 {/*{Object.keys(books).length > 0 &&*/}
    //                 {/*<ul>*/}
    //                     {books.map((book) => (
    //                         <li key={book.docs.key}>
    //                             <h2>{book.docs.title}</h2>
    //                         </li>
    //                     ))}
    //                 {/*</ul>*/}
    //             </>
    //     </div>
    // );

}

export default BrowseRomance;




