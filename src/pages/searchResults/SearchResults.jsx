import {useEffect, useState} from "react";
import axios from "axios";
import BookCard from "../../components/bookCard/BookCard.jsx";
import './SearchResults.css'
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";
import {useParams} from "react-router-dom";

function SearchResults() {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const controller = new AbortController()


    useEffect(() => {
        return function cleanup() {
            controller.abort();
        }
    })

        async function fetchSearchResults(query) {
            setError(false);

            try {
                setLoading(true);

                const {data} = await axios.get(`https://openlibrary.org/search.json?q=${query}`, {
                    params: {
                        q: query,
                        limit: 20,
                        offset: (currentPage - 1) * 20
                    }
                });
                console.log(data);
                setBooks(data.docs);
                setTotalPages(Math.ceil(data.numFound / 100))
                setQuery(query)

            } catch (error) {
                if (axios.isCancel(error)) {
                    console.error('Request is cancelled');
                } else
                    console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }


    async function pageChange(pageNumber){
        setCurrentPage(pageNumber);

        try {
            const {data} = await axios.get(`https://openlibrary.org/search.json?q=${query}`, {
                params: {
                    q: query,
                    page: pageNumber,
                    limit: 20,
                    offset: (pageNumber - 1) * 20},
            })
            console.log(data)
            setBooks(data.docs)
        } catch(e) {
            console.error(error);
        }
    }


    return (
        <section className='search-result-section outer-container'>
            <div className='search-result-section inner-container'>

                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    onSearch={fetchSearchResults}
                    />

                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                <div className='result-container'>
                    <h2 className='result-header'>
                        Search results:
                    </h2>
                    <article className='book-card-container'>
                        <div className='result-content-container'>
                                {books?.map((book) => {
                                    return <BookCard
                                        bookId={(book.key).replace("/works/", "")}
                                        authorId={(book.author_key)}
                                        key={`${book.title}-${book.isbn}-${book._version_}`}
                                        title={book.title}
                                        author={book.author_name}
                                        cover={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : ''}
                                        year={book.first_publish_year}
                                    />
                                })}
                        </div>
                    </article>

                    <div>
                        <Pagination
                            page={currentPage}
                            totalPages={totalPages}
                            onPageChange={pageChange}
                        />
                    </div>
                </div>
            </div>

        </section>

    )

}

export default SearchResults;



