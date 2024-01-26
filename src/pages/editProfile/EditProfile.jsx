import {useForm} from "react-hook-form";
import './EditProfile.css'
import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import axios from "axios";


function EditProfile() {

    const {register, handleSubmit, formState: {errors}, watch} = useForm()
    const [error, setError] = useState(false);
    // const [submitSuccess, setSubmitSucces] = useState(null);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const controller = new AbortController();

    useEffect(() => {
        return function cleanup() {
            controller.abort();
        }
    })

    async function editProfileData(data) {
        setError(false);

        const token = localStorage.getItem('token');
        try {
            const response = await axios.put('https://frontend-educational-backend.herokuapp.com/api/user', {
                email: data.email,
                password: data.password,
                repeatedPassword: data.repeatedPassword,
                signal: controller.signal,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });

        } catch(e) {
            console.error(e);
        }
        console.log(data)
        console.log(`You've updated your profile!`)
        navigate('/profile')
    }




    return (
        <>
            <section className='edit-profile-page outer-container'>
                <div className='edit-profile-page inner-container'>
                    <div className='inner-content-container'>
                    <h2>Edit Information</h2>
                        {/*{!submitSuccess ?*/}
                        <p>Your current email: {user.email}</p>
                            <form className='edit-profile-form' onSubmit={handleSubmit(editProfileData)}>
                                <p>Fill in your new email address:</p>
                                <label htmlFor='email-field'>
                                    <input type='email'
                                           id='email-field'
                                           {...register('email', {
                                               required: 'Email is required',
                                               pattern: {
                                                   value: /^\S+@\S+$/i,
                                                   message: 'Please enter a valid email address',
                                               }
                                           })}
                                    />
                                    {errors.email && <p>{errors.email.message}</p>}
                                </label>
                                {/*<button type='submit'>Save new email</button>*/}

                        {/*<form className='edit-profile-form'>*/}
                        {/*        <label htmlFor='profile-picture'>*/}
                        {/*            <input*/}
                        {/*                type='file'*/}
                        {/*                accept='image/*'*/}
                        {/*                id='profile-picture'*/}
                        {/*                {...register('profilePicture')}*/}
                        {/*            />*/}
                        {/*        </label>*/}

                        {/*</form>*/}

                            <label htmlFor='change-password'>New password:
                                <input type='password'
                                       id='change-password-field'
                                       {...register('password', {
                                           required: 'Password is required',
                                           minLength: {
                                               value: 6,
                                               message: 'A password requires a minimum of 6 characters',
                                           }
                                       })}
                                />
                                {errors.password && <p>{errors.password.message}</p>}
                            </label>
                        <label htmlFor='change-password-confirm'>Confirm password:
                            <input type='password'
                                   id='confirm-password-field'
                                   {...register('repeatedPassword', {
                                       required: 'Confirm password is required',
                                       minLength: {
                                           value: 6,
                                           message: 'A password requires a minimum of 6 characters',
                                       },
                                       validate: (value) => value === watch('password') || 'Passwords do not match'
                                   })}
                            />
                            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                        </label>
                            <button type='submit'>Save information</button>
                        </form>
                        {/*    : <p>You've updated your profile! You can see it <Link*/}
                        {/*        to={`/profile`}><strong>here.</strong></Link></p>*/}
                        {/*}*/}
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditProfile;




