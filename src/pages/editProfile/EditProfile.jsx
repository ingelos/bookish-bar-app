import {useForm} from "react-hook-form";
import './EditProfile.css'


function EditProfile() {

    const {register, handleSubmit, formState: {errors}} = useForm()

    function handleFormSubmit(data) {
        console.log(data)
    }


    return (
        <>
            <section className='edit-profile-page outer-container'>
                <div className='edit-profile-page inner-container'>
                    <div className='inner-content-container'>
                        <h2>Edit Profile</h2>
                        <form className='edit-profile-form' onSubmit={handleSubmit(handleFormSubmit)}>
                                <label htmlFor='user-name-field'>
                                    User name
                                    <input
                                        type='text'
                                        id='user-name-field'
                                        {...register('userName', {
                                            required: 'User name is required',
                                            minLength: {
                                                value: 3,
                                                message: 'Please enter a user name that is at least 3 characters long'
                                            },
                                        })}
                                    />
                                    {errors.userName && <p>{errors.userName.message}</p>}
                                </label>
                                <label htmlFor='profile-picture'>
                                    <input
                                        type='file'
                                        accept='image/*'
                                        id='profile-picture'
                                        {...register('profilePicture')}
                                    />
                                </label>
                            <button type='submit'>Save profile settings</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditProfile;




