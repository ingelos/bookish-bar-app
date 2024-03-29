import './Navigation.css'
import {Link, NavLink, useNavigate} from "react-router-dom";
import UserIcon from "../../assets/icons/user-circle.svg";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import Button from "../button/Button.jsx";
import SearchBar from "../searchBar/SearchBar.jsx";
import {UserContext} from "../../context/UserContext.jsx";

function Navigation() {
    const navigate = useNavigate();
    const {isAuth, logout} = useContext(AuthContext);
    const {profilePicture, setProfilePicture} = useContext(UserContext);


    useEffect(() => {
        const storedProfilePicture = localStorage.getItem('profilePicture');
        if (storedProfilePicture) {
            setProfilePicture(storedProfilePicture);
        }
    }, [setProfilePicture]);


    return (
        <>
            <nav>
                <div className='nav-container'>
                    <ul className='navigation-links'>
                        <li className='nav-link'>
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
                    <div className='nav-search-bar'>
                        <NavLink to='/search-results'>
                            <SearchBar />
                        </NavLink>
                    </div>
                    <div>
                        {isAuth ?
                            <div className='user-container'>
                                <Button
                                    type='button'
                                    className='log-link'
                                    onClick={logout}
                                >
                                    Logout
                                </Button>
                                <Link to={'/profile'}>
                                    <div className='nav-profile-container'>
                                        <img
                                            src={profilePicture || UserIcon}
                                            id='user-icon-profile'
                                            alt='user-icon'/>
                                    </div>
                                </Link>
                            </div>
                            :
                            <div className='user-container'>
                                <Button
                                    type='button'
                                    className='log-link'
                                    onClick={() => navigate('./login')}
                                >
                                    Login
                                </Button>
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


