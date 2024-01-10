import './Login.css'
import {Link, useNavigate} from "react-router-dom";
import Caret from '../../assets/icons/caret-right.svg'

function Login() {

const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/');

        console.log(`You're logged in!`)
    }

    return(
        <>
            <div className='login-page outer-container'>
                <div className='login-page inner-container'>
                    <div className='inner-content-container'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <h3 className='login-title'>Login</h3>
                        <p className='login-subtitle'>Have an account? Log in with your e-mail and password:</p>
                        <label htmlFor='login-email'>E-mail*</label>
                        <input type='email'
                               id='email-field'
                               name='email'
                               value={''}
                               onChange={''}
                               required
                        />
                        <label htmlFor='login-password'>Password*</label>
                        <input type='password'
                               id='password-field'
                               name='password'
                               value={''}
                               onChange={''}
                               required
                        />
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