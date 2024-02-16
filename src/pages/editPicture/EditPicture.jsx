import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";


function EditPicture() {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [base64, setBase64] = useState('');


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

        reader.onload = () => {
            console.log("conversion to base64 result:", reader);
            setBase64(reader.result);
        }
    }

    async function sendImage(e) {
        e.preventDefault();

        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/user/image', {
                    "base64Image": setBase64
                },
                {
                    headers: {
                        "Content-type": "base64Image",
                        Authorization: `Bearer ${token}`,
                    },
                })
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }

    }

    return (
        <>
            <section className='edit-profile-page outer-container'>
                <div className='edit-profile-page inner-container'>
                    <h2>Upload and preview picture:</h2>
                    <form onSubmit={sendImage}>
                        <label htmlFor='user-image'>
                            Choose picture:
                            <input type='file' name='image-field' id='user-image' onChange={handleImageChange}/>
                        </label>
                        {preview &&
                            <article className='preview-image'>
                                <h3>
                                    Preview:
                                </h3>
                                <img src={preview} alt={file.name} className='image-preview'/>
                            </article>
                        }
                        <button type='submit'>Upload</button>
                    </form>
                    <div>
                        <h2>Profile picture:</h2>
                        {base64 && <img src={base64} alt='file'/>}
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditPicture;