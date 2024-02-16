import {useEffect, useState} from "react";
import axios from "axios";
import BookCard from "/src/components/bookCard/BookCard.jsx";
import Pagination from "../pagination/Pagination.jsx";
import {useParams} from "react-router-dom";


function BrowseSubject({subject, subjectTitle}) {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [works, setWorks] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const {bookId} = useParams();

    useEffect(() => {
        const controller = new AbortController();

        async function fetchSubject() {
            setError(false);

            try {
                setLoading(true);
                const {data} = await axios.get(`https://openlibrary.org/subjects/${subject}.json`, {
                    signal: controller.signal,
                    params:  {
                        limit: 20,
                        page: currentPage,
                        offset: (currentPage - 1) * 20
                    },
                });

                console.log(data);
                console.log(data.works);
                setBooks(data.works);
                setWorks(data.work_count);
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

        fetchSubject();


        return function cleanup() {
            controller.abort();
            localStorage.clear();
        }
    }, []);


    async function pageChange(pageNumber){
        setCurrentPage(pageNumber);

        try {
            const {data} = await axios.get(`https://openlibrary.org/subjects/${subject}.json`, {
                params: {
                    page: pageNumber,
                    limit: 20,
                    offset: (pageNumber - 1) * 20
                    },
            });
            setBooks(data.docs)
        } catch(e) {
            console.error(error);
        }
    }


    return (

        <section className='romance-section outer-container'>
            <div className='romance-section inner-container'>

                {loading && <p>Loading...</p>}

                <div className='result-container'>
                    <div className='subject-container'>
                        <h2 className='result-header-title'>{subjectTitle}</h2>
                        {Object.keys(books).length > 0 &&
                            <p>Total works: {works}</p>
                        }
                    </div>
                    <article className='book-card-container'>
                        <div className='result-content-container'>
                            {books?.map((book) => {
                                return  <BookCard
                                    bookId={(book.key).replace("/works/", "")}
                                    cover={book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : ''}
                                    key={`${book.title}-${book.cover_id}`}
                                    title={book.title}
                                    author={book.authors[0].name}
                                    year={book.first_publish_year}
                                />
                            })}
                        </div>
                    </article>
                    {books.length === 0 && error && <p>Something went wrong fetching your book data...</p>}
                </div>

                <div>
                    <Pagination
                        page={currentPage}
                        totalPages={totalPages}
                        onPageChange={pageChange}
                    />
                </div>
            </div>
        </section>
    )
}

export default BrowseSubject;


