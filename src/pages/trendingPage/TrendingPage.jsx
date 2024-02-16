import BrowseSubject from "../../components/browseSubject/BrowseSubject.jsx";

import {useEffect, useState} from "react";
import axios from "axios";
import BookCard from "/src/components/bookCard/BookCard.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";


function Trending() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchTrending() {
            setError(false);

            try {
                setLoading(true);
                const {data} = await axios.get(`https://openlibrary.org/trending/daily.json`, {
                    signal: controller.signal,
                    params:  {
                        // limit: 20,
                        // page: currentPage,
                        // offset: (currentPage - 1) * 20
                    },
                });

                console.log(data);
                console.log(data.works);
                setBooks(data.works);
                setTotalPages(Math.ceil(data.numFound / 100));


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

        fetchTrending();


        return function cleanup() {
            controller.abort();
            localStorage.clear();
        }
    }, []);


    // async function pageChange(pageNumber){
    //     setCurrentPage(pageNumber);
    //     try {
    //         const {data} = await axios.get(`https://openlibrary.org/trending/daily.json`, {
    //             params:
    //                 {
    //                     page: pageNumber,
    //                     limit: 20,
    //                     offset: (pageNumber - 1) * 20
    //                 },
    //         });
    //         setBooks(data.docs)
    //     } catch(e) {
    //         console.error(error);
    //     }
    // }


    return (

        <section className='romance-section outer-container'>
            <div className='romance-section inner-container'>

                {loading && <p>Loading...</p>}

                <div className='result-container'>
                    <div className='subject-container'>
                        <h2 className='result-header-title'>Trending today:</h2>
                    </div>
                    <article className='book-card-container'>
                        <div className='result-content-container'>
                            {books?.map((book) => (
                                <BookCard
                                    id={(book.key).replace("/works/", "")}
                                    cover={book.cover_edition_key ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg` : ''}
                                    key={`${book.title}-${book.cover_edition_key}`}
                                    title={book.title}
                                    author={book.author_name}
                                    year={book.first_publish_year}
                                />
                            ))}
                        </div>
                    </article>
                    {books.length === 0 && error && <p>Something went wrong fetching your book data...</p>}
                </div>

                <div>
                    {/*<Pagination*/}
                    {/*    page={currentPage}*/}
                    {/*    totalPages={totalPages}*/}
                    {/*    onPageChange={pageChange}*/}
                    {/*/>*/}
                </div>
            </div>
        </section>
    )
}

export default Trending;


