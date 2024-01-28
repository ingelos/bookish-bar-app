import './SearchBar.css'
import Button from "../button/Button.jsx";


function SearchBar({type, id, placeholder, value, onChange, onSubmit, name}) {
    return (
        <form className='search-form' onSubmit={onSubmit}>
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <Button />
        </form>
    )

}


export default SearchBar;