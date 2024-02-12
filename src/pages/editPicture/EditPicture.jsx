import {useState} from "react";
import axios from "axios";


function EditPicture() {
    const [file, setFile] = useState([]);
    const [previewUrl, setPreviewUrl] = useState('');
    const [base64, setBase64] = useState('');


    function handleImageChange(e) {
        const uploadedFile= e.target.files[0];
        console.log(uploadedFile);



        // setFile(uploadedFile);
        // setPreviewUrl(URL.createObjectURL(uploadedFile));
    }


    async function sendImage(e){
        e.preventDefault();

        const token = localStorage.getItem('token');



        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/user/image', {
                "base64Image": "data:image/png;base64,"
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
        <section className='edit-profile-page outer-container'>
            <div className='edit-profile-page inner-container'>
                <h2>Upload and preview picture</h2>
                <form onSubmit={sendImage}>
                    <label htmlFor='user-image'>
                        Choose picture:
                        <input type='file' name='image-field' id='user-image' onChange={handleImageChange}/>
                    </label>
                    {previewUrl &&
                    <label>
                        Preview:
                        <img src={previewUrl} alt='Example of chosen image' className='image-preview' />
                    </label>
                    }
                    <button type='submit'>Upload</button>
                </form>
            </div>
        </section>
    )
}

export default EditPicture;