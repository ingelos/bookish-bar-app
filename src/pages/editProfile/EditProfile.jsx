import {useForm} from "react-hook-form";
import './EditProfile.css'
import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import axios from "axios";
import Input from "../../components/input/Input.jsx";
import Button from "../../components/button/Button.jsx";


function EditProfile() {

    const {register, handleSubmit, formState: {errors}, watch} = useForm()
    const [error, setError] = useState(false);
    const [submitSuccess, setSubmitSucces] = useState(null);
    const {user} = useContext(AuthContext);
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
            setSubmitSucces(true)
            console.log(response)
        } catch (e) {
            console.error(e);
        }
        console.log(`You've updated your profile!`)
        // navigate('/profile')
    }


    return (
        <>
            <section className='edit-profile-page outer-container'>
                <div className='edit-profile-page inner-container'>
                    <div className='edit-profile-inner-content-container'>
                        <h2>Edit Information</h2>
                        {!submitSuccess ?
                            <div>
                                <div className='user-data'>
                                    <p>Username: {user.username}</p>
                                    <p>Email: {user.email}</p>
                                </div>
                                <form className='edit-profile-form' onSubmit={handleSubmit(editProfileData)}>
                                    <p>Fill in your current or new email address:</p>
                                    <Input
                                        inputType='email'
                                        inputName='email'
                                        inputId='email-field'
                                        inputLabel='Email: *'
                                        validationRules={{
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: 'Please enter a valid email address',
                                            }
                                        }}
                                        register={register}
                                        errors={errors}
                                    />
                                    {/*<button type='submit'>Save new email</button>*/}
                                    <Input
                                        inputType='password'
                                        inputName='newPassword'
                                        inputId='new-password-field'
                                        inputLabel='Password: *'
                                        validationRules={{
                                            required: 'Password is required',
                                            minLength: {
                                                value: 6,
                                                message: 'A password requires a minimum of 6 characters'
                                            }
                                        }}
                                        register={register}
                                        errors={errors}
                                    />
                                    <Input
                                        inputType='password'
                                        inputName='repeatedPassword'
                                        inputId='repeat-password-field'
                                        inputLabel='Repeat password: *'
                                        validationRules={{
                                            required: 'Repeat password is required',
                                            minLength: {
                                                value: 6,
                                                message: 'A password requires a minimum of 6 characters'
                                            },
                                            validate: (value) => value === watch('newPassword') || 'Passwords do not match'
                                        }}
                                        register={register}
                                        errors={errors}
                                    />
                                    <button type='submit'>Save information</button>
                                </form>
                                <p>Go back to <Link to={`/profile`}><strong>Profile</strong></Link></p>
                            </div>
                            : <p>You've successfully updated your information! Go back to your profile <Link
                                to={`/profile`}><strong>here.</strong></Link></p>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default EditProfile;




