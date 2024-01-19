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
                                <label htmlFor='register-username'>Username
                                <input type='text'
                                       id='username-field'
                                       {...register('userName', {
                                               required: 'Username is required',
                                                minLength: {
                                                    value: 3,
                                                    message: 'Please enter a username that is at least 3 characters long'
                                            },
                                           })}
                                />
                                    {errors.userName && <p>{errors.userName.message}</p>}
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
                                               value: 6,
                                               message: 'A password requires a minimum of 6 characters'
                                           }
                                       })}
                                />
                                    {errors.password && <p>{errors.password.message}</p>}
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








