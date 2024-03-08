import {useContext, useEffect, useState} from "react";
import axios from "axios";
import './EditPicture.css'
import {AuthContext} from "../../context/AuthContext.jsx";
import {UserContext} from '../../context/UserContext';
import {Link} from "react-router-dom";
import Button from "../../components/button/Button.jsx";

function EditPicture() {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [base64, setBase64] = useState('');
    const { setProfilePicture } = useContext(UserContext);

    useEffect(() => {
        let imageUrl;
        if (file) {
            imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
        return function cleanup() {
            URL.revokeObjectURL(imageUrl);
        }
    }, [file]);

    function handleImageChange(e) {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);

        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        console.log(e.target.files[0]);

        reader.onload = () => {
            console.log("conversion to base64 result:", reader);
            setBase64(reader.result);
            // console.log("reader result", reader.result);
            // setProfilePicture(reader.result);
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
            console.log(imageUrl);
            setProfilePicture(imageUrl);

            console.log("response.data:", response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <section className='edit-profile-page outer-container'>
                <div className='edit-profile-page inner-container'>
                    <div className='edit-profile-content-container'>
                    <h2>Upload and preview picture</h2>
                    <form onSubmit={sendImage} className='picture-form'>
                        <label htmlFor='user-image'>
                            Choose picture:
                            <input type='file' name='image-file' id='file-field' onChange={handleImageChange}/>
                        {preview && <article className='preview-image-container'>
                                <h3>Preview:</h3>
                                <img alt={file.name} src={preview} className='image-preview'/>
                            </article>
                        }
                        </label>
                        <button type='submit'>Upload</button>
                    </form>
                        <p>Take me back to my <Link to={'/profile'}><strong>Profile</strong></Link></p>
                    {/*<div>*/}
                    {/*    <h2>Profile picture:</h2>*/}
                    {/*    {base64 && <img src={base64} alt='file'/>}*/}
                    {/*</div>*/}
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditPicture;