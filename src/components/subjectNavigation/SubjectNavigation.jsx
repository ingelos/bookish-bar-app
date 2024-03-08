import {NavLink} from "react-router-dom";
import './SubjectNavigation.css'

function SubjectNavigation() {

    return (
        <div className='subject-nav-container'>
            <ul className='subject-list'>
                <li className='subject-link'>
                    <NavLink className={({isActive}) => isActive ? 'active-subject-link' : 'default-subject-link'}
                             to='/browse/romance'>Romance</NavLink>
                </li>
                <li className='subject-link'>
                    <NavLink className={({isActive}) => isActive ? 'active-subject-link' : 'default-subject-link'}
                             to='/browse/science_fiction'>Science Fiction</NavLink>
                </li>
                <li className='subject-link'>
                    <NavLink className={({isActive}) => isActive ? 'active-subject-link' : 'default-subject-link'}
                             to='/browse/fantasy'>Fantasy</NavLink>
                </li>
                <li className='subject-link'>
                    <NavLink className={({isActive}) => isActive ? 'active-subject-link' : 'default-subject-link'}
                             to='/browse/humor'>Humor</NavLink>
                </li>
                <li className='subject-link'>
                    <NavLink className={({isActive}) => isActive ? 'active-subject-link' : 'default-subject-link'}
                             to='/browse/magic'>Magic</NavLink>
                </li>
                <li className='subject-link'>
                    <NavLink className={({isActive}) => isActive ? 'active-subject-link' : 'default-subject-link'}
                             to='/browse/historical'>Historical</NavLink>
                </li>
                <li className='subject-link'>
                    <NavLink className={({isActive}) => isActive ? 'active-subject-link' : 'default-subject-link'}
                             to='/browse/mystery'>Mystery</NavLink>
                </li>
                <li className='subject-link'>
                    <NavLink className={({isActive}) => isActive ? 'active-subject-link' : 'default-subject-link'}
                             to='/browse/literature'>Literature</NavLink>
                </li>
                <li className='subject-link'>
                    <NavLink className={({isActive}) => isActive ? 'active-subject-link' : 'default-subject-link'}
                             to='/browse/thriller'>Thriller</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SubjectNavigation;