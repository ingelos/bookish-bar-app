import './Login.css'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext} from "react";
import axios from "axios";

function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const {login} = useContext(AuthContext);


    function onSubmit(data) {
        console.log(data);
        login(data.email);
    }


    return (
        <>
            <div className='login-page outer-container'>
                <div className='login-page inner-container'>
                    <div className='inner-content-container'>
                        <h3 className='login-title'>Login</h3>
                        <p className='login-subtitle'>Have an account? Log in with your e-mail and password:</p>
                        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
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
                            <label htmlFor='password-field'>
                                Password:
                                <input type='password'
                                       id='password-field'
                                       {...register('password', {
                                           required: 'Password is required',
                                           minLength: {
                                               value: 6,
                                               message: 'A password requires a minimum of 8 characters'
                                           }
                                       })}
                                />
                                {errors.password && <p>{errors.password.message}</p>}
                            </label>
                            <button type='submit' className='login-button'>
                                Login
                            </button>
                        </form>
                        <p><strong>New here?</strong></p>
                        <Link to='/register'>Make an account in one minute!</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;





