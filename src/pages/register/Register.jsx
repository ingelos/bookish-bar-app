import './Register.css'
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useState} from "react";
import axios from "axios";

function Register() {

    const {register, handleSubmit, formState: { errors,
        }} = useForm();
    const [error, setError] = useState(false);
    const [submitSuccess, setSubmitSucces] = useState(null);


    async function handleFormSubmit(data) {
        setError(false);

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                username: data.username,
                email: data.email,
                password: data.password,
                role: [data.user],
            });
            console.log(response);
            console.log(`You've created an account!`);
            setSubmitSucces(true);

        } catch (e) {
            console.error(e.response);
            setError(true);
            console.log('something went wrong')
        }
    }


    return (
        <>
            <div className='register-page outer-container'>
                <div className='register-page inner-container'>
                    <div className='inner-content-container'>

                        {!submitSuccess ?
                            <form className='register-form' onSubmit={handleSubmit(handleFormSubmit)}>
                                <h2 className='register-title'>Create account</h2>
                                <p className='register-subtitle'>Fill in your email and choose your username and password</p>
                            <label htmlFor='email-field'>
                                E-mail:
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
                                <label htmlFor='register-username'>
                                    Username:
                                    <input type='text'
                                           id='username-field'
                                           {...register('username', {
                                               required: 'Username is required',
                                               minLength: {
                                                   value: 3,
                                                   message: 'Please enter a username that is at least 3 characters long'
                                               },
                                           })}
                                    />
                                    {errors.userName && <p>{errors.userName.message}</p>}
                                </label>
                                <label htmlFor='password-field'>
                                    Password:
                                <input type='password'
                                       id='password-field'
                                       {...register('password', {
                                           required: 'Password is required',
                                           minLength: {
                                               value: 6,
                                               message: 'A password requires a minimum of 6 characters'
                                           }
                                       })}
                                />
                                    {errors.password && <p>{errors.password.message}</p>}
                                </label>
                            <button type='submit' className='register-button'>Create account</button>
                            {error && <p className='error-message'>Something went wrong, try again.</p>}
                        </form>
                            : <p>Congratulations! You've created an account! You can now log in <Link
                                to={`/login`}><strong>here.</strong></Link></p>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;








