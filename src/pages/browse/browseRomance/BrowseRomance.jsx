import {useEffect, useState} from "react";
import axios from "axios";
import './BrowseRomance.css'
import BookList from "../../../components/bookList/BookList.jsx";
import Pagination from "../../../components/pagination/Pagination.jsx";



function BrowseRomance() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [works, setWorks] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);

    useEffect(() => {
        const controller = new AbortController();
        const books = JSON.parse(localStorage.getItem('books'));
        if (books) {
            setBooks(books);
        }

        async function fetchRomance() {
            setError(false);
            setLoading(true);

            try {
                const {data} = await axios.get(`https://openlibrary.org/subjects/love.json?limit=100`, {
                    signal: controller.signal,
                });
                localStorage.setItem('books', JSON.stringify(books));
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

        fetchRomance();

        return function cleanup() {
            controller.abort();
            localStorage.clear();
        }

    }, []);


    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (

        <section className='romance-section outer-container'>
            <div className='romance-section inner-container'>
                {loading && <p>Loading...</p>}
                <div className='subject-container'>
                    <h2 className='subject-header-title'>Romance</h2>
                    {Object.keys(books).length > 0 &&
                        <h4>Total works: {works}</h4>
                    }
                </div>
                <>
                    <BookList books={currentBooks}/>
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

export default BrowseRomance;


