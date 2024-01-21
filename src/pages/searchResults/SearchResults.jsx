import {useEffect, useState} from "react";
import axios from "axios";
import SearchBar from "../../components/searchBar/SearchBar.jsx";


function SearchResults() {

    const [books, setBooks] = useState([]);
    const [error, toggleError] = useState(false);
    const [searchQuery, setSearchQuery] = useState('')

    async function handleSubmit() {
        toggleError(false);

        try {
            const {data} = await axios.get(`https://openlibrary.org/search.json?q=${searchQuery}`);
            console.log(data.docs)
            setBooks(data.docs);
            setSearchQuery('')
        } catch(e) {
            console.error(e);
            toggleError(true);
        }

            }

                return (
                    <section className='search-result-section outer-container'>
                        <div className='search-result-section inner-conatiner'>
                <form className='search-bar' onSubmit={handleSubmit}>
                    <input type='text'
                           className='search-input'
                           placeholder='Search by title or author'
                           value={searchQuery}
                           onChange={(event) => setSearchQuery(event.target.value)}
                    />
                    <button type='submit'>
                        Search
                    </button>
                </form>
            </div>
        </section>
    )

}

export default SearchResults;



