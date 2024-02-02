import './SearchBar.css'
import Button from "../button/Button.jsx";


function SearchBar({setSearchQuery}) {

    return (
        <form className='search-bar'>
            <input
                type='text'
                id='search-bar-input'
                placeholder='Search by title or author...'
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
                className='search-bar-button'
            />
        </form>
    )

}


export default SearchBar;