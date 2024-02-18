import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import './Profile.css'


function Profile() {
    const {user} = useContext(AuthContext);




    return (
        <>
            <section className='profile-page outer-container'>
                <div className='profile-page inner-container'>
                    <h2>Profile</h2>
                    <div className='profile-container'>
                        <div className='profile-information'>
                            <p>Username: <strong>{user.username}</strong></p>
                            <p>Email: <strong>{user.email}</strong></p>
                        </div>

                        <div className='user-profile-picture'>
                            {/*{user.map((user) => {*/}
                            {/*    return <li> {user.file &&*/}
                            {/*        <img className='img-box' src={user.file.url} alt={user.name}/>*/}
                            {/*    }*/}
                            {/*    </li>*/}
                            {/*})}*/}
                            <p>Add or change profile picture <Link to={'/edit-picture'}><strong>here</strong></Link></p>
                        </div>

                    </div>
                    <div className='link-container'>
                    <p>Go to <Link to={'/my-books'}><strong>MyBooks</strong></Link> page</p>
                    {/*<button type='submit' className='edit-profile' onClick={handleClick}>Edit profile</button>*/}
                    <p>Click <Link to={'/edit-profile'}><strong>here</strong></Link> to edit your profile or personal information
                    </p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Profile;