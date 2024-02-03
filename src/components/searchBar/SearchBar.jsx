import './SearchBar.css'
import Button from "../button/Button.jsx";


function SearchBar({setSearchQuery, searchQuery}) {

    return (
        <form className='search-bar'>
            <input
                type='text'
                id='search-bar-input'
                placeholder='Search by title or author...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
                type='submit'>
                Search
            </button>
        </form>
    )

}


export default SearchBar;