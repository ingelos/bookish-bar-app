import './SearchBar.css'
import { useState} from "react";


function SearchBar({onSearch, searchInputRef}) {

    const [searchQuery, setSearchQuery] = useState('')

    function handleSubmit(event) {
        if (event) {
            event.preventDefault();
            onSearch(searchQuery);
        }
    }

    function handleSearchQueryChange(event) {
        setSearchQuery(event.target.value);
    }


    return (
        <div className='search-bar-container'>
            <form className='search-bar' onSubmit={handleSubmit}>
                <input
                    type='text'
                    ref={searchInputRef}
                    className='search-bar-input'
                    placeholder='Search by title or author...'
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                />
                <button
                    type='submit'
                    className='search-bar-button'
                >
                    Search
                </button>
            </form>
        </div>
    )
}



export default SearchBar;