import {useEffect, useState} from "react";
import axios from "axios";
import BookCard from "../../components/bookCard/BookCard.jsx";


function SearchResults() {


    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchQuery, setSearchQuery] = useState('')



    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal


        async function fetchSearchResults() {
            setError(false);


            try {
                setLoading(true);

                let endpoint = 'https://openlibrary.org/search.json'
                if (searchQuery) {
                    endpoint = `https://openlibrary.org/search.json?limit=20&q=${searchQuery}`;
                }
                const response = await axios.get(endpoint, {
                    signal: signal,
                });
                console.log(response.data.docs);
                setBooks(response.data.docs);

                // localStorage.setItem("bookData", JSON.stringify(response.data));
                // console.log("Data fetched and stored in local storage:", response.data);


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

        fetchSearchResults()

        return () => {
            console.log('Clean up')
            controller.abort();
        }

    }, [searchQuery]);


    return (
        <section className='search-result-section outer-container'>
            <div className='search-result-section inner-container'>
                <div className='input-container'>
                    <input
                        type='search'
                        id='search-bar-input'
                        placeholder='Search by title...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        type='submit'>
                        Search
                    </button>
                </div>
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    <div className='result-container'>
                        <h2 className='result-header'>Search results:</h2>
                    </div>
                        <article className='book-card-container'>
                            <ul>
                                {books?.map((book) => (
                                    <BookCard
                                        key={`${book.title}-${book.key}-${book._version_}`}
                                        title={book.title}
                                        author={book.author_name}
                                        cover={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : `no cover available`}
                                        year={book.first_publish_year}
                                    />
                                ))}
                            </ul>
                        </article>
                </div>

</section>

)

}

export default SearchResults;



