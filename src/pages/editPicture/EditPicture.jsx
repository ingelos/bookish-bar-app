import {useContext, useEffect, useState} from "react";
import axios from "axios";
import './EditPicture.css'
import {AuthContext} from "../../context/AuthContext.jsx";
import {UserContext} from '../../context/UserContext';
import {Link} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import UserIcon from "../../assets/icons/user-circle.svg";


function EditPicture() {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [base64, setBase64] = useState('');
    const {setProfilePicture} = useContext(UserContext);
    const [updatedPictureSuccess, setUpdatedPictureSuccess] = useState(null);
    const {profilePicture} = useContext(UserContext);
    const {isAuth} = useContext(AuthContext);

    useEffect(() => {
        let imageUrl;
        if (file) {
            imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }

        const storedProfilePicture = localStorage.getItem('profilePicture');
        if (storedProfilePicture) {
            setProfilePicture(storedProfilePicture);
        }

        return function cleanup() {
            if (imageUrl) {
                URL.revokeObjectURL(imageUrl);
            }
        }
    }, [file]);


    function handleImageChange(e) {
        setFile(e.target.files[0]);

        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = () => {
            console.log("conversion to base64 result:", reader);
            setBase64(reader.result);
            setPreview(reader.result);
        }
    }

    async function sendImage(e) {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/user/image', {
                    base64Image: base64,
                },
                {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const imageUrl = response.data.base64Image;
            setProfilePicture(imageUrl);
            localStorage.setItem('profilePicture', imageUrl);
            setUpdatedPictureSuccess(true);

        } catch (e) {
            console.error(e);
        }
    }

    function handleDeleteProfilePicture() {
        setProfilePicture('');
        localStorage.removeItem('profilePicture');
    }

    return (
            <section className='edit-profile-page outer-container'>
                <div className='edit-profile-page inner-container'>
                        <div className='edit-profile-content-container'>
                            <h2>Change profile picture</h2>

                            {!updatedPictureSuccess ?
                                <div>
                                    <form onSubmit={sendImage} className='picture-form'>
                                        <label htmlFor='user-image'>
                                            Choose picture:
                                            <input
                                                type='file'
                                                name='image-file'
                                                id='file-field'
                                                onChange={handleImageChange}
                                            />
                                            {profilePicture && !preview &&
                                                <div className='preview-image-container'>
                                                    <h3>Current picture:</h3>
                                                    <div className='profile-picture-container'>
                                                        <img
                                                            alt='profile-picture-img'
                                                            src={profilePicture}
                                                            className='image-preview'/>
                                                    </div>
                                                    <Button onClick={handleDeleteProfilePicture}>Delete</Button>
                                                </div>
                                            }
                                            {preview &&
                                                <div className='preview-image-container'>
                                                    <h3>Preview:</h3>
                                                    <div className='profile-picture-container'>
                                                        <img
                                                            alt={file.name}
                                                            src={preview}
                                                            className='image-preview'
                                                        />
                                                    </div>
                                                </div>
                                            }
                                            {(!profilePicture && !preview) &&
                                                <div className='user-profile-picture-empty'>
                                                    <div className='profile-picture-container'>
                                                        <img
                                                            alt='user-icon'
                                                            src={UserIcon}
                                                            className='profile-picture-empty'
                                                        />
                                                    </div>
                                                </div>
                                            }
                                            <Button disabled={!preview} className='upload-button'>Upload</Button>
                                        </label>
                                    </form>
                                    <p>Back to my <Link to={'/profile'}><strong>Profile</strong></Link></p>
                                </div>
                                :
                                <div className='updated-picture-success-message'>
                                    <p>You've successfully added/updated your profile picture!</p>
                                    <p>See it in your <Link to={'/profile'}><strong>Profile</strong></Link></p>
                                </div>
                            }
                        </div>
                </div>
            </section>
    )
}

export default EditPicture;