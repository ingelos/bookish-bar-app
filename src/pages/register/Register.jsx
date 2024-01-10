import './Register.css'

function Register() {
    return (
        <>
            <div className='register-page outer-container'>
                <div className='register-page inner-container'>
                    <div className='inner-content-container'>
                        <form className='register-form' onSubmit={''}>
                            <h2 className='register-title'>Create account</h2>
                            <h3 className='register-subtitle'>Personal information</h3>
                            <div className='personal-information-field'>
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
                            <label htmlFor='login-email'>E-mail*</label>
                            <input type='email'
                                   id='email-field'
                                   name='email'
                                   value={''}
                                   onChange={''}
                                   required
                            />
                            </div>
                            <div className='password-field'>
                                <h3 className='register-subtitle'>Choose password</h3>
                                <label htmlFor='login-password'>Password**</label>
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
                            <span className='notes'>
                                <p>* required</p>
                                <p id='required'>** a password requires a minimum of 8 characters</p>
                            </span>
                            <button type='submit' className='register-button'>Create account</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;