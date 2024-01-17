import {useForm} from "react-hook-form";


function EditProfile() {

    const { register, handleSubmit, formState: {errors}} = useForm()

    function handleFormSubmit(data) {
        console.log(data)
    }

    return (
        <>
        <h2>Edit Profile</h2>
            <form className='edit-profile-form' onSubmit={handleSubmit(handleFormSubmit)}>

                <div className='profile-text profile-settings'>
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
                <label htmlFor='fav-books-field'>
                    What kind of books do you like to read?
                    <input
                        type='text'
                        id='fav-books-field'
                        {...register('favBooks')}
                    />
                </label>
                <label htmlFor='about-me-field'>
                    About me
                    <textfield
                        type='text'
                        id='about-me-field'
                        {...register('aboutMe')}
                    />
                </label>
                </div>
                <div>
                    <label htmlFor='profile-picture'>
                        <input
                            type='file'
                            id='profile-picture'
                            {...register('profilePicture')}
                            />
                    </label>

                    <div>
                    <button type='submit'>Choose picture</button>
                    <p>No file chosen</p>
                    </div>
                    <button type='submit'>Change picture</button>
                </div>

                <button type='submit'>Save profile settings</button>
            </form>
        </>
    )
}

export default EditProfile;