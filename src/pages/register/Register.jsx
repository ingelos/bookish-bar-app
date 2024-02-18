import './Register.css'
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import axios from "axios";
import Input from "../../components/input/Input.jsx";
import Button from "../../components/button/Button.jsx";

function Register() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [error, setError] = useState(false);
    const [submitSuccess, setSubmitSucces] = useState(null);
    const controller = new AbortController();

    useEffect(() => {
        return function cleanup() {
            controller.abort();
        }
    })

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
                                <p className='register-subtitle'>Fill in your email and choose your username and
                                    password</p>
                                <Input
                                    inputType='email'
                                    inputName='email'
                                    inputId='email-field'
                                    inputLabel='Email: *'
                                    validationRules={{
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Please enter a valid email address',
                                        }
                                    }}
                                    register={register}
                                    errors={errors}
                                />
                                <Input
                                    inputType='text'
                                    inputName='username'
                                    inputId='username-field'
                                    inputLabel='Username: *'
                                    validationRules={{
                                        required: 'Username is required',
                                        minLength: {
                                            value: 3,
                                            message: 'Please enter a username that is at least 3 characters long'
                                        },
                                    }}
                                    register={register}
                                    errors={errors}
                                />
                                <Input
                                    inputType='password'
                                    inputName='password'
                                    inputId='password-field'
                                    inputLabel='Password: *'
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
                                <p>* required</p>
                                <Button
                                    type='submit'
                                    className='register-button'
                                >
                                    Create account
                                </Button>
                                {error && <p className='error-message'>Something went wrong, try again.</p>}

                            </form>
                            : <>
                            <div className='succes-container'>
                                <h2>Congratulations!</h2>
                                <p>You've created an account!</p>
                                <p>You can now log in <Link to={`/login`}><strong>here</strong></Link></p>
                            </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;








