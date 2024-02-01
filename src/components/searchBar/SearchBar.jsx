import './SearchBar.css'
import Button from "../button/Button.jsx";


function SearchBar({type, onChange, searchQuery, fetchSearchResults}) {

    return (
        <form className='search-bar' onSubmit={fetchSearchResults}>
            <input
                type='text'
                id='search-bar-input'
                placeholder='Search by title or author...'
                value={searchQuery}
                onChange={(e) => onChange(e.target.value)}
            />
            <button
                className='search-bar-button'
                type={type}
                onClick={fetchSearchResults}
            />
        </form>
    )

}


export default SearchBar;