import {useEffect, useState} from "react";
import axios from "axios";


function SearchResults() {


    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchQuery, setSearchQuery] = useState('')


    useEffect(() => {
        const controller = new AbortController();

        async function fetchSearchResults() {
            setError(false);

            try {
                const {data} = await axios.get(`https://openlibrary.org/search.json?q=${searchQuery}`, {
                    signal: controller.signal,
                });
                console.log(data);
                console.log(data.docs);
                setBooks(data.docs);
                setSearchQuery('')
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.error('Request is cancelled');
                } else
                    console.error(e);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchSearchResults()

        return function cleanup() {
            controller.abort();
        }

    }, [searchQuery])

 

    return (
        <section className='search-result-section outer-container'>
            <div className='search-result-section inner-conatiner'>

                <form className='search-bar'>
                        <input
                            type='text'
                            id='search-bar-input'
                            placeholder='Search by title...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            type='submit'>
                            Search
                        </button>
                    </form>


                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <ul>
                            {books.map((result) => (
                                <li key={result.id}>{result.title}</li>
                            ))}
                        </ul>
                    )}
                    {error && <p>{error}</p>}
            </div>
        </section>

)

}

export default SearchResults;



