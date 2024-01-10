import './Register.css'
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

function Register() {

    const {register, handleSubmit, formState: { errors}, watch } = useForm();

    const navigate = useNavigate();

    function handleFormSubmit(data) {
        console.log(data);
        navigate('/edit-profile');


        console.log(`You've created an account! Now create your profile!`)
    }

    console.log('ERRORS', errors);

    return (
        <>
            <div className='register-page outer-container'>
                <div className='register-page inner-container'>
                    <div className='inner-content-container'>
                        <form className='register-form' onSubmit={handleSubmit(handleFormSubmit)}>
                            <h2 className='register-title'>Create account</h2>
                            <h3 className='register-subtitle'>Personal information</h3>
                            <div className='personal-information-field'>
                                <label htmlFor='register-first-name'>First name
                                <input type='text'
                                       id='first-name-field'
                                       {...register('firstName', {
                                               required: 'First name is required',
                                                minLength: {
                                                   value: 3,
                                                    message: 'Please enter a name that is at least 3 characters long'
                                            },
                                           })}
                                />
                                    {errors.firstName && <p>{errors.firstName.message}</p>}
                                </label>
                                <label htmlFor='register-last-name'>Last name
                                <input type='text'
                                       id='last-name-field'
                                       {...register('lastName', {
                                           required: 'Last name is required',
                                           minLength: {
                                               value: 3,
                                               message: 'Please enter a last name that is at least 3 characters long'
                                           }
                                       })}
                                />
                                    {errors.lastName && <p>{errors.lastName.message}</p>}
                                </label>
                            <label htmlFor='login-email'>E-mail
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
                            </div>
                            <div className='password-field'>
                                <h3 className='register-subtitle'>Choose password</h3>
                                <label htmlFor='login-password'>Password
                                <input type='password'
                                       id='password-field'
                                       {...register('password', {
                                           required: 'Password is required',
                                           minLength: {
                                               value: 8,
                                               message: 'A password requires a minimum of 8 characters'
                                           }
                                       })}
                                />
                                    {errors.password && <p>{errors.password.message}</p>}
                                </label>
                                <label htmlFor='login-password-confirm'>Confirm password
                                <input type='password'
                                       id='confirm-password-field'
                                    {...register('confirmPassword', {
                                        required: 'Confirm password is required',
                                        minLength: {
                                            value: 8,
                                            message: 'A password requires a minimum of 8 characters',
                                        },
                                        validate: (value) => value === watch('password') || 'Passwords do not match'
                                    })}
                                />
                                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                                </label>
                            </div>
                            <button type='submit' className='register-button' >Create account</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;