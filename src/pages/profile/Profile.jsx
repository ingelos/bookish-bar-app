import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import './Profile.css'
import {UserContext} from "../../context/UserContext.jsx";
import Button from "../../components/button/Button.jsx";
import UserIcon from "../../assets/icons/user-circle.svg";


function Profile() {
    const {user} = useContext(AuthContext);
    const {profilePicture, setProfilePicture} = useContext(UserContext);

    useEffect(() => {
        const storedProfilePicture = localStorage.getItem('profilePicture');
        if (storedProfilePicture) {
            setProfilePicture(storedProfilePicture);
        }
    }, [setProfilePicture]);


    return (
        <>
            <section className='profile-page outer-container'>
                <div className='profile-page inner-container'>

                    <div className='profile-inner-content-container'>
                        <h2 className='username-profile'>{user.username}</h2>
                        <div className='user-profile-picture'>
                            {!profilePicture ?
                                <div className='profile-picture-container'>
                                    <img
                                        src={UserIcon}
                                        alt='profile'
                                        className='profile-picture-empty'/>
                                </div> :
                                <div className='user-profile-picture'>
                                    {profilePicture &&
                                        <div className='profile-picture-container'>
                                            <img
                                                src={profilePicture}
                                                alt='profile'
                                                className='profile-picture'/>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                            <div className='link-container'>
                                <p>Go to <Link to={'/my-books'}><strong>MyBooks</strong></Link></p>
                            </div>
                        </div>
                        <div className='edit-link-container'>
                            <Button className='edit-link'><Link to={'/account-settings'}>Account Settings</Link></Button>
                            <Button className='edit-link'><Link to={'/edit-picture'}>Edit picture</Link></Button>
                        </div>
                    </div>

            </section>
        </>
)
}

export default Profile;