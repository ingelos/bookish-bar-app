import './Login.css'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import Input from "../../components/input/Input.jsx";
import Button from "../../components/button/Button.jsx";

function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const {login} = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [loginSucces, setLoginSucces] = useState(null);
    const controller = new AbortController();

    useEffect(() => {
        return function cleanup() {
            controller.abort();
        }
    });

    async function handleFormSubmit(data) {
        setError(false);

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: data.username,
                password: data.password,
            });
            console.log(response.data.accessToken);
            login(response.data.accessToken);

            setLoginSucces(true);

        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.error('Authentication failed: Invalid username or password');
                setError(true);
            } else {
                console.error('Error:', error.response || error.message || error);
                setError(true);
            }
        }
    }


    return (
        <>
            <div className='login-page outer-container'>
                <div className='login-page inner-container'>
                    <div className='inner-content-container'>
                        {error && <p className='error-message-login'>Authentication failed: Invalid username or password</p>}

                        {!loginSucces ?
                            <form className='login-form' onSubmit={handleSubmit(handleFormSubmit)}>
                                <h3 className='login-title'>Login</h3>
                                <p className='login-subtitle'>Have an account? Log in with your e-mail and password:</p>
                                <Input
                                    inputType='text'
                                    inputName='username'
                                    inputId='username-field'
                                    inputLabel='Username:'
                                    validationRules={{
                                        required: 'Username is required'
                                    }}
                                    register={register}
                                    errors={errors}
                                />
                                <Input
                                    inputType='password'
                                    inputName='password'
                                    inputId='password-field'
                                    inputLabel='Password:'
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
                                <Button
                                    type='submit'
                                    className='login-button'
                                >
                                    Login
                                </Button>
                                <p><strong>New here?</strong></p>
                                <Link to='/register'><p className='link-to-register'>Make an account in one minute!</p>
                                </Link>
                            </form>
                            :
                            <>
                                <div className='succes-container'>
                                    <h2>Welcome back!</h2>
                                    <p>You can go to your <Link to={`/profile`}><strong>profile</strong></Link> or <Link
                                        to={'/my-books'}><strong>MyBooks</strong></Link> page</p>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;





