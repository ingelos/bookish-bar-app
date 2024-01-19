import {Link, useNavigate} from "react-router-dom";


function Profile() {

    const navigate = useNavigate()

    function handleClick() {
        console.log(`You're being send to page where you can edit your profile!`)
        navigate('/edit-profile');
    }

    return (
        <>
            <section className='profile-page outer-container'>
                <div className='profile-page inner-container'>
                    <div className='profile-container'>
                        <div className='profile-information'>
                            <h2>{}</h2>
                        </div>
                        <div className='profile-picture-list'>
                            <img src={''} alt='user-profile-picture'/>
                            <Link to={'./my-books'}>Go to MyBooks list</Link>
                        </div>
                    </div>
                    <button type='submit' className='edit-profile' onClick={handleClick}>Edit profile</button>
                </div>
            </section>
        </>
    )
}

export default Profile;