import {NavLink} from "react-router-dom";

function SubjectNavigationLink({subjectNav, subject}) {
    return (
        <li className='subject-link'>
            <NavLink
                className={({isActive}) => isActive ? 'active-subject-link' : 'default-subject-link'}
                     to={subjectNav}>{subject}</NavLink>
        </li>
    )
}

export default SubjectNavigationLink;