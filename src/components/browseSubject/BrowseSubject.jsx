import {useEffect, useState} from "react";
import axios from "axios";

// import BookList from "../../../components/bookList/BookList.jsx";
// import Pagination from "/../../components/pagination/Pagination.jsx";
import BookCard from "/src/components/bookCard/BookCard.jsx";


function BrowseSubject({loading, error, books, works, subject}) {
    //
    // const [books, setBooks] = useState([]);
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);
    // const [works, setWorks] = useState(0);
    //
    // useEffect(() => {
    //     const controller = new AbortController();
    //
    //     async function fetchRomance(subject) {
    //         setError(false);
    //
    //         try {
    //             setLoading(true);
    //             const {data} = await axios.get(`https://openlibrary.org/subjects/${subject}.json?`, {
    //                 signal: controller.signal,
    //                 params:  {
    //                     limit: 20,
    //                 }
    //             });
    //
    //             console.log(data);
    //             console.log(data.works);
    //             setBooks(data.works);
    //             setWorks(data.work_count);
    //
    //             // localStorage.setItem("bookData", JSON.stringify(data));
    //             // console.log("Data fetched and stored in local storage:", data);
    //
    //         } catch (e) {
    //             if (axios.isCancel(e)) {
    //                 console.error('Request is cancelled');
    //             } else {
    //                 console.error(e);
    //                 setError(true);
    //             }
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //
    //     fetchRomance();
    //
    //     return function cleanup() {
    //         controller.abort();
    //         localStorage.clear();
    //     }
    // }, []);


    return (

        <section className='romance-section outer-container'>
            <div className='romance-section inner-container'>

                {loading && <p>Loading...</p>}

                <div className='result-container'>
                    <div className='subject-container'>
                        <h2 className='result-header-title'>{subject}</h2>
                        {Object.keys(books).length > 0 &&
                            <p>Total works: {works}</p>
                        }
                    </div>

                    <article className='book-card-container'>
                        <div className='result-content-container'>
                            {books?.map((book) => (
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
                    </article>
                    {books.length === 0 && error && <p>Something went wrong fetching your book data...</p>}
                </div>
            </div>
        </section>
    )
}

export default BrowseSubject;


