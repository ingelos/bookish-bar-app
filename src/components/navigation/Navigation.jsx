import './Navigation.css'
import {Link, NavLink, useNavigate} from "react-router-dom";
import MagnifyingGlass from "../../assets/icons/magnifying-glass.svg";
import UserIcon from "../../assets/icons/user-circle.svg";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

function Navigation() {
    const navigate = useNavigate();
    const {isAuth, logout, user} = useContext(AuthContext);

    function handleSubmit() {

    }

    return (
        <>
            <nav>
                <div className='nav-container'>
                    <ul className='navigation-links'>
                        <li  className='nav-link'>
                            <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                     to='/'>Home</NavLink>
                        </li>
                        <li className='nav-link'>
                            <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                     to='/my-books'>MyBooks</NavLink>
                        </li>
                        <li className='nav-link'>
                            <NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                     to='/browse'>Browse</NavLink>
                        </li>
                    </ul>

                    <form className='search-bar' onSubmit={handleSubmit}>
                        <input type='text'
                               id='search-field'
                               className='search-input'
                               placeholder='Search by title or author'/>
                        <button type='submit' className='get-book-info'>
                            Search
                        </button>
                    </form>

                    <div className='login-container'>
                        {isAuth ?
                        <div className='user' id='login-container'>
                            <button
                                type='button'
                                className='log-link'
                                onClick={logout}
                                >
                                Logout
                            </button>
                            <Link to={'/profile'}><img src={UserIcon} id='user-icon' alt='user-icon'/>
                            </Link>
                        </div>
                            :
                            <div id='login-container'>
                                <button
                                    type='button'
                                    className='log-link'
                                    onClick={() => navigate('./login')}
                                    >
                                    Login
                                </button>
                                <img src={UserIcon} id='user-icon' alt='user-icon'/>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;


