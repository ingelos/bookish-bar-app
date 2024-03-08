import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import './Profile.css'
import {UserContext} from "../../context/UserContext.jsx";
import Button from "../../components/button/Button.jsx";


function Profile() {
    const {user} = useContext(AuthContext);
    const {profilePicture} = useContext(UserContext);

    console.log(profilePicture);

    return (
        <>
            <section className='profile-page outer-container'>
                <div className='profile-page inner-container'>

                    <div className='profile-container'>
                        <h2>Your profile</h2>
                        <div className='profile-content-container'>
                            <div className='profile-information'>
                                <p>Username: <strong>{user.username}</strong></p>
                                <p>Email: <strong>{user.email}</strong></p>
                            </div>
                            <div className='user-profile-picture'>
                                {profilePicture &&
                                    <img src={profilePicture} alt='profile' className='profile-picture'/>}
                            </div>
                        </div>
                    </div>
                    <div className='edit-link-container'>
                        <Button className='edit-link'><Link to={'/edit-profile'}>Edit profile</Link></Button>
                        <Button className='edit-link'><Link to={'/edit-picture'}>Edit picture</Link></Button>
                    </div>
                    <div className='link-container'>
                        <p>Go to <Link to={'/my-books'}><strong>MyBooks</strong></Link> page</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Profile;