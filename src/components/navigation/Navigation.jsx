import './Navigation.css'
import {NavLink, useNavigate} from "react-router-dom";
import MagnifyingGlass from "../../assets/icons/magnifying-glass.svg";


function Navigation() {

    const navigate = useNavigate();

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

                    <form className='search-bar'>
                        <input type='text' id='search-field' className='search-input' placeholder='Search by title or author'/>
                        <button type='submit' className='get-book-info'>Search</button>
                    </form>

                    <button
                        type="button"
                        onClick={()=> navigate('/')}
                    >
                        Log out
                    </button>
                    <button
                        type="button"
                        onClick={()=> navigate('/login')}
                    >
                        Log in
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navigation;