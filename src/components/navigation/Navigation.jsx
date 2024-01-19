import './Navigation.css'
import {Link, NavLink, useNavigate} from "react-router-dom";
import MagnifyingGlass from "../../assets/icons/magnifying-glass.svg";
import UserIcon from "../../assets/icons/user-circle.svg";

function Navigation() {
    const navigate = useNavigate();

    // function handleClick() {
    //     console.log(`You're being send to the login page!`)
    //     navigate('/login')
    // }

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

                    <form className='search-bar'>
                        <input type='text' id='search-field' className='search-input' placeholder='Search by title or author'/>
                        <button type='submit' className='get-book-info'>Search</button>
                    </form>

                    <div className='login-container'>
                        {/*<button type='submit' className='login-link' onClick={handleClick}>Login</button>*/}
                        <button
                            type="button"
                            className='login-link'
                            onClick={()=> navigate('/login')}
                        >
                            Login
                        </button>
                        <Link to={'/profile'}><img src={UserIcon} id='user-icon' alt='user-icon'/></Link>
                    </div>


                    {/*<button*/}
                    {/*    type="button"*/}
                    {/*    onClick={()=> navigate('/')}*/}
                    {/*>*/}
                    {/*    Log out*/}
                    {/*</button>*/}
                </div>
            </nav>
        </>
    );
}

export default Navigation;