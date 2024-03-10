import {NavLink} from "react-router-dom";
import './SubjectNavigation.css'
import SubjectNavigationLink from "../subjectNavigationLink/SubjectNagivationLink.jsx";

function SubjectNavigation() {

    return (
        <div className='subject-nav-container'>
            <ul className='subject-list'>
                <SubjectNavigationLink
                    subject='Romance'
                    subjectNav={'/browse/romance'}
                />

                <SubjectNavigationLink
                    subject='Science Fiction'
                    subjectNav={'/browse/science_fiction'}
                />
                <SubjectNavigationLink
                    subject='Fantasy'
                    subjectNav={'/browse/fantasy'}
                />
                <SubjectNavigationLink
                    subject='Humor'
                    subjectNav={'/browse/humor'}
                />
                <SubjectNavigationLink
                    subject='Magic'
                    subjectNav={'/browse/magic'}
                />
                <SubjectNavigationLink
                    subject='Historical'
                    subjectNav={'/browse/historical'}
                />
                <SubjectNavigationLink
                    subject='Mystery'
                    subjectNav={'/browse/mystery'}
                />
                <SubjectNavigationLink
                    subject='Literature'
                    subjectNav={'/browse/literature'}
                />
                <SubjectNavigationLink
                    subject='Thriller'
                    subjectNav={'/browse/thriller'}
                />
                <SubjectNavigationLink
                    subject='Poetry'
                    subjectNav={'/browse/poetry'}
                />
                <SubjectNavigationLink
                    subject='Plays'
                    subjectNav={'/browse/plays'}
                />
                <SubjectNavigationLink
                    subject='Painting'
                    subjectNav={'/browse/painting_and_paintings'}
                />
                <SubjectNavigationLink
                    subject='Film'
                    subjectNav={'/browse/film'}
                />
                <SubjectNavigationLink
                    subject='Music'
                    subjectNav={'/browse/music'}
                />
                <SubjectNavigationLink
                    subject='Photography'
                    subjectNav={'/browse/photography'}
                />
                <SubjectNavigationLink
                    subject='Dance'
                    subjectNav={'/browse/dance'}
                />
                <SubjectNavigationLink
                    subject='Design'
                    subjectNav={'/browse/design'}
                />
                <SubjectNavigationLink
                    subject='Fashion'
                    subjectNav={'/browse/fashion'}
                />
            </ul>
        </div>
    )
}

export default SubjectNavigation;