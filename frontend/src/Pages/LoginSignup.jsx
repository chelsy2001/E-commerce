import React from 'react'

function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>
          Sign up
        </h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name'></input>
          <input type='email' placeholder='Email Address'></input>
          <input type='password' placeholder='Password'></input>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account</p>
        <div className='loginsignup-agree'>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup