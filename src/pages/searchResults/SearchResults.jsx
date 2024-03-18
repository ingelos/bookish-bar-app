import {useContext, useEffect, useState} from "react";
import axios from "axios";
import BookCard from "../../components/bookCard/BookCard.jsx";
import './SearchResults.css'
import SearchBar from "../../components/searchBar/SearchBar.jsx";
import Pagination from "../../components/pagination/Pagination.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import CheckIcon from '../../assets/icons/check.svg'


function SearchResults() {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState('');
    const [searchSucces, setSearchSucces] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const {isAuth} = useContext(AuthContext);
    const [myBooks, setMyBooks] = useState([]);
    const [addedBook, setAddedBook] = useState({});
    const [noResults, setNoResults] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();

        const myBooks = JSON.parse(localStorage.getItem('mybooks')) || [];
        setMyBooks(myBooks);
        console.log('myBooks:', myBooks)

        return function cleanup() {
            controller.abort();
        }

    }, []);

    async function fetchSearchResults(query) {
        setError(false);
        setLoading(true);

        try {
            const {data} = await axios.get(`https://openlibrary.org/search.json?q=${query}`, {
                params: {
                    q: query,
                    limit: 20,
                    offset: (currentPage - 1) * 20
                }
            });

            if (data.docs.length === 0) {
                setNoResults(true);
            } else {
                console.log(data);
                setBooks(data.docs);
                setTotalPages(Math.ceil(data.numFound / 100));
                setQuery(query);
                setSearchSucces(data.docs);
                setNoResults(false);
            }

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


    async function pageChange(pageNumber) {
        setCurrentPage(pageNumber);

        try {
            const {data} = await axios.get(`https://openlibrary.org/search.json?q=${query}`, {
                params: {
                    q: query,
                    page: pageNumber,
                    limit: 20,
                    offset: (pageNumber - 1) * 20
                },
            })
            console.log(data)
            setBooks(data.docs)
        } catch (e) {
            console.error(error);
        }
    }

    function handleAddToMyBooks(book, status) {
        const newBooks = JSON.parse(localStorage.getItem('mybooks')) || [];
        const alreadyAdded = newBooks.some((savedBook) => savedBook.key === book.key);

        if (!alreadyAdded) {
            const newBook = { ...book, status: status || 'read'};
            newBooks.push(newBook);
            localStorage.setItem('mybooks', JSON.stringify(newBooks));
            console.log('book added to mybooks')

            setAddedBook((prev) => ({
                ...prev,
                [book.key]: true,
            }));

        } else {
            console.log('book already added to mybooks');
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
                {error && <p>Something went wrong... try again.</p>}
                <div className='result-container'>
                    {noResults && <p className='no-results-found'>There were no results found for your search query. Try something else!</p>}

                    {!searchSucces ? '' :
                        <h2 className='result-header'>
                            Search results:
                        </h2>
                    }
                    <article className='book-card-container'>
                        <div className='result-content-container'>
                            {books.map((book) => (
                                <div className='book-container' key={book.key}>
                                    <BookCard
                                        bookId={(book.key).replace("/works/", "")}
                                        authorId={book.author_key ? (Array.isArray(book.author_key) ? book.author_key[0] : book.author_key) : (book.authors ? (Array.isArray(book.authors) ? book.authors[0].key.replace("/authors/", "") : book.authors.key) : '')}


                                        // authorId={(book.author_key)}
                                        // id={book.key}
                                        title={book.title ? book.title : ''}
                                        author={book.author_name ? book.author_name[0] : ''}
                                        cover={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : ''}
                                        year={`First published in ${book.first_publish_year}`}
                                    />
                                    {isAuth ?
                                        <div>
                                            {!addedBook[book.key] ?
                                                <Button className='my-books-button'
                                                        onClick={() => handleAddToMyBooks(book)}
                                                >
                                                            {myBooks.some((savedBook) => savedBook.key === book.key) ?
                                                                <p className='on-my-books-btn-text'>On MyBooks</p> :
                                                                <p className='add-to-my-btn-text'>Add to MyBooks</p>}
                                                </Button>
                                                :
                                                <Button id='saved-button'>
                                                    Saved
                                                    <img src={CheckIcon}
                                                         className='check-icon'
                                                         alt=''/>
                                                </Button>
                                            }
                                        </div>
                                        :
                                        <div>
                                        <Button
                                            className='add-button'
                                            onClick={() => navigate('/login')}
                                        >
                                            Login to add
                                        </Button>
                                        </div>
                                    }
                                </div>
                                ))}
                        </div>
                    </article>
                            {searchSucces ?
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={pageChange}
                                /> : '' }
                        </div>
                </div>
        </section>
    )
}

export default SearchResults;



