import './Navigation.css'
import {NavLink} from "react-router-dom";


function Navigation() {
    return (
        <>
            <nav>
                <div className='nav-container'>
                    <ul className='navigation-links'>
                        <li>
                            <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                     to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                     to='/my-books'>MyBooks</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                     to='/browse'>Browse</NavLink>
                        </li>
                    </ul>
                    <form className='search-form'>
                        <input type='text' id='search-field' className='search-input' placeholder='Search by title or author'/>
                        <button type='submit' className='get-book-info'>Search</button>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Navigation;