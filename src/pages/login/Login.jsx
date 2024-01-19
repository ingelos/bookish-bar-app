import './Login.css'
import {Link, useNavigate} from "react-router-dom";
import Caret from '../../assets/icons/caret-right.svg'
import {useForm} from "react-hook-form";

function Login() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    function handleFormSubmit(data) {
        console.log(data);
        navigate('/profile');

        console.log(`You're logged in!`)
    }

    return(
        <>
            <div className='login-page outer-container'>
                <div className='login-page inner-container'>
                    <div className='inner-content-container'>
                    <form className='login-form' onSubmit={handleSubmit(handleFormSubmit)}>
                        <h3 className='login-title'>Login</h3>
                        <p className='login-subtitle'>Have an account? Log in with your e-mail and password:</p>
                        <label htmlFor='login-email'>Username
                        <input type='text'
                               id='username-field'
                               {...register('username', {
                                   required: 'Username is required'
                                   })}
                        />
                            {errors.username && <p>{errors.username.message}</p>}
                        </label>
                        <label htmlFor='login-password'>Password
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
                        <span>
                        <button type='submit' className='login-button'>Log in</button>
                        <Link to='' id='password-link'><img src={Caret} alt='caret-icon'/>Forget password?</Link>
                            </span>
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





