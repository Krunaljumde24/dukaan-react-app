import React from 'react'

function SignUp() {
    return (
        <div className='sign-up-form'>
        <h5>Sign Up</h5>
        <label htmlFor="uName">Enter Username</label>
        <br />
        <input
            id='uName'
            type='text'
            name='username'
            value={username}
            onChange={(event) => handleChange(event)}
        />
        <br />
        <label htmlFor="uPass">Enter Password</label>
        <br />
        <input
            id='uPass'
            type='password'
            name='password'
            value={password}
            onChange={(event) => handleChange(event)}
        />
        <br />
        <br />
        <button type='button' className='btn btn-sm btn-primary'
            onClick={handleSubmit}
        >
            Login
        </button>
    </div>
    )
}

export default SignUp