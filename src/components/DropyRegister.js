import React from 'react'
import '../assets/styles.css'
import {Link} from 'react-router-dom'
 const DropyRegister = () =>{
  return (
    <>
    <div>
        <img className="register-dropy" src="./images/dropyLogoPlain.png" />

        <form className='register-form'>
            <div className='start'>
            <div className='form-group'>
            <label htmlFor='firstname' id='firstname'>Enter your first name</label>
            <input type="text" className='firstname' placeholder='Chirag'/>
            </div>
            <div className='form-group'>
            <label htmlFor='secondname' id='secondname'>Enter your second name</label>
            <input type="text" className='secondname' placeholder='Pammar'/>
            </div>
            <div className='form-group'>
            <label htmlFor='Password' id='Password'>Enter your Password</label>
            <input type="password" className='Password' placeholder='**********'/>
            </div>
            <div className='form-group'>
            <label htmlFor='phonenumber' id='phonenumber'>Enter your phone number</label>
            <input type="number" className='phonenumber' placeholder='0712123456'/>
            </div>
            <div className='form-group'>
            <label htmlFor='idnumber' id='idnumber'>Enter your National ID Number</label>
            <input type="number" className='idnumber' placeholder='89567865'/>
            </div>
            <div className='form-group'>
            <label htmlFor='location' id='location'>Enter your main location</label>
            <input type="text" className='location' placeholder='Westlands east'/>
            </div>
            </div>
            <div className='end'>
            <div className='form-group-last'>
            <label htmlFor='email' id='email'>Email Address</label>
            <input type="text" className='email' placeholder='mail@gmail.com'/>
            </div>
            <button className='btn-register'>Register</button>
            </div>

        </form>
      <div className='account-exists'>
       <p className='text'>Do you have an account?</p> 
       <Link to="/login"><button className='btn-login2'>Login</button></Link>
      </div>
      </div>
    </>
  )
}

export default DropyRegister;