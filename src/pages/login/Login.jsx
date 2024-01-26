import './Login.css'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext, useState} from "react";
import axios from "axios";

function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const {login} = useContext(AuthContext);
    const [error, setError] = useState(false);


    async function handleFormSubmit(data) {
        setError(false);

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: data.username,
                password: data.password,
            });
            console.log(response.data.accessToken);
            login(response.data.accessToken);

        } catch(e) {
            console.error(e);
            setError(true);
        }
        console.log(data);

    }


    return (
        <>
            <div className='login-page outer-container'>
                <div className='login-page inner-container'>
                    <div className='inner-content-container'>
                        <h3 className='login-title'>Login</h3>
                        <p className='login-subtitle'>Have an account? Log in with your e-mail and password:</p>
                        <form className='login-form' onSubmit={handleSubmit(handleFormSubmit)}>
                            <label htmlFor='username'>
                                Username:
                                <input type='text'
                                       id='username-field'
                                       {...register('username', {
                                           required: 'Username is required'
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





