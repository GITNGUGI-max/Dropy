import React from 'react'
import '../assets/styles.css'
import {Link} from 'react-router-dom'
 const DropyLogin = () =>{
  return (
    <>
    <div>
        <img className="login-dropy" src="./images/dropyLogoPlain.png" />

        <form className='login-form'>
            <label htmlFor='username' id='username'>Enter your username, ID or Phone no</label>
            <input type="text" className='username' placeholder='Chirag'/>
            <span> <a href=''>Forgot username?</a></span>
            <label htmlFor='password' id='password'>Enter your password</label>
            <input type="password" className='password' placeholder='**********'/>
            <span><a href=''>Forgot Password?</a></span>
            <button className='btn-login'>Login</button>

        </form>
      <div className='social'>
       <p className='text'>Login with:</p> 
        <a href=''><img className="login-options" src="./images/google.png" /></a> 
        <a href=''><img className="login-options" src="./images/Facebook.png" /></a>
        <a href=''><img className="login-options" src="./images/apple.png" /></a>
      </div>
       <div className='account-exists'>
       <p className='text'>If you have no account</p> 
       <Link to='/register'><button className='btn-login2'>Register</button></Link>
      </div>
      </div>
    </>
  )
}

export default DropyLogin;