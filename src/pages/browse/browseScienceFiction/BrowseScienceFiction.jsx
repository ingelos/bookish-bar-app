import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import BookList from "../../../components/bookList/BookList.jsx";
import Button from "../../../components/button/Button.jsx";
import Pagination from "../../../components/pagination/Pagination.jsx";

function BrowseScienceFiction() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [works, setWorks] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchScienceFiction() {
            setError(false);
            setLoading(true);

            try {
                const {data} = await axios.get(`https://openlibrary.org/subjects/science_fiction.json?limit=100`, {
                    signal: controller.signal,
                });

                console.log(data);
                console.log(data.works);
                setBooks(data.works);
                setWorks(data.work_count);

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

        fetchScienceFiction();

        return function cleanup() {
            controller.abort();
        }

    }, []);

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className='scifi-section outer-container'>
            <div className='scifi-section inner-container'>
                {loading && <p>Loading...</p>}
                <div className='subject-container'>
                    <h2 className='subject-header-title'>Sci Fi</h2>
                    {Object.keys(books).length > 0 &&
                        <h4>Total works: {works}</h4>
                    }
                </div>
                <>
                    <BookList data={currentBooks}/>
                    <Pagination
                        booksPerPage={booksPerPage}
                        totalBooks={books.length}
                        paginate={paginate} />
                </>
                {books.length === 0 && error && <p>Something went wrong fetching your book data...</p>}
            </div>
        </section>
    )
}

    export default BrowseScienceFiction;