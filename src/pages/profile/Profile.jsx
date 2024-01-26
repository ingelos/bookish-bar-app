import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import axios from "axios";


function Profile() {
    const { user } = useContext(AuthContext);


    return (
        <>
            <section className='profile-page outer-container'>
                <div className='profile-page inner-container'>
                    <div className='profile-container'>
                        <h2>Profile information</h2>
                        <div className='profile-information'>
                            <p>Username: {user.username}</p>
                            <p>Email: {user.email}</p>
                        </div>
                        <div className='profile-picture-list'>
                            <img src={''} alt='user-profile-picture'/>
                            <Link to={'./my-books'}>Go to MyBooks list</Link>
                        </div>

                    </div>
                    {/*<button type='submit' className='edit-profile' onClick={handleClick}>Edit profile</button>*/}
                    <div>
                        <h3>Click <Link to={'/edit-profile'}>here</Link> to edit your profile or personal information</h3>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Profile;