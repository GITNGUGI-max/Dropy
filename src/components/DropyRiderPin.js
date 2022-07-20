
import React from 'react'
import '../assets/styles.css'
import {Link} from 'react-router-dom'
 const DropyRiderPin = () =>{
  return (
    <>
    <div>
        <img className="register-dropy" src="./images/dropyLogoPlain.png" />


        <form className='pin-form' id="pin-form">
            <div className="enter">
            <span className="pin-text">Enter Your 4 Digit Pin</span>
            <div>
            	<input type="password" maxlength="1" placeholder="*"/>
            	<input type="password" maxlength="1" placeholder="*"/>
            	<input type="password" maxlength="1" placeholder="*"/>
            	<input type="password" maxlength="1" placeholder="*"/>
            </div>
            </div>
           
            <div className='end'>
            <button className='btn-register'>Submit</button>
            </div>

        </form>
      
      </div>
    </>
  )
}

export default DropyRiderPin;