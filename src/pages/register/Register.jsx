import {Link} from "react-router-dom";
import Caret from "../../assets/icons/caret-right.svg";


function Register() {
    return(
        <>
            <div className='register-page outer-container'>
                <div className='register-page inner-container'>
                    <div className='inner-content-container'>
                        <form className='register-form' onSubmit={''}>
                            <h3 className='register-title'>Create account</h3>
                            <p className='register-subtitle'>Personal information</p>
                            <div className='name-field'>
                            <label htmlFor='register-first-name'>First name*</label>
                            <input type='text'
                                   id='first-name-field'
                                   name='first-name'
                                   value={''}
                                   onChange={''}
                                   required
                            />
                            <label htmlFor='register-last-name'>Last name*</label>
                            <input type='text'
                                   id='last-name-field'
                                   name='last-name'
                                   value={''}
                                   onChange={''}
                                   required
                            />
                            </div>
                            <p className='register-information'>Login information</p>
                            <label htmlFor='login-email'>E-mail*</label>
                            <input type='email'
                                   id='email-field'
                                   name='email'
                                   value={''}
                                   onChange={''}
                                   required
                            />
                            <div className='password-field'>
                            <label htmlFor='login-password'>Password*</label>
                            <input type='password'
                                   id='password-field'
                                   name='password'
                                   value={''}
                                   onChange={''}
                                   required
                            />

                                   <label htmlFor='login-password-confirm'>Confirm password*</label>
                            <input type='password'
                                   id='password-confirm-field'
                                   name='password'
                                   value={''}
                                   onChange={''}
                                   required
                            />
                            </div>
                            <p>(A password requires a minimum of 8 characters)</p>
                        <button type='submit' className='register-button'>Create account</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;