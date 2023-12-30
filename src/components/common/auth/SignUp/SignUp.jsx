import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './signup.css'

import signSideImg from '../../../../../public/Fingerprint-cuate.png'


function SignUp() {
    const { register, handleSubmit } = useForm();
    let handleChange = (event) => {
        event.preventDefault();
    }

    let handleFormSubmit = (data) => {
        console.log(data);
    }

    const [name, setName] = useState('')
    return (
        <div className='signup-container'>
            <div className="signup-form">
                <div className="signup-left">
                    <span></span>
                    <img src={signSideImg} className='signup-left-img' alt="sign_up_image" />

                </div>
                <div className="signup-right">
                    <h3>Sign Up</h3>

                    <form onSubmit={handleSubmit(handleFormSubmit)}>

                        <label htmlFor="name">Full Name</label>
                        <br />
                        <input
                            id='name'
                            type='text'
                            name='name'
                            {...register('name')}
                        />
                        <br />
                        <label htmlFor="email">Email</label>
                        <br />
                        <input
                            id='email'
                            type='email'
                            name='email'
                            {...register('email')}
                        />
                        <br />
                        <label htmlFor="username">Set Username</label>
                        <input
                            id='username'
                            type='text'
                            name='username'
                            {...register('username')}
                        />
                        <label htmlFor="password">Set Password</label>
                        <input
                            id='password'
                            type='password'
                            name='password'
                            {...register('password')}
                        />
                        <br />
                        <br />

                        <button type='submit' className='btn btn-sm btn-primary'
                            onClick={handleSubmit}
                        >
                            Login
                        </button>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default SignUp