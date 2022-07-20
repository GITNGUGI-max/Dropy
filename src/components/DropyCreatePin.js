
import React from 'react'
import '../assets/styles.css'
import {Link} from 'react-router-dom'
 const DropyCreatePin = () =>{
  return (
    <>
    <div>
        <img className="register-dropy" src="./images/dropyLogoPlain.png" />

            <span className="note-text">Avoid using common numbers such as birthdays</span>

        <form className='pin-form' id="pin-form">
            <div className="create">
            <span className="pin-text">Create Your 4 Digit Pin</span>
            <div>
            	<input type="password" maxlength="1" placeholder="*"/>
            	<input type="password" maxlength="1" placeholder="*"/>
            	<input type="password" maxlength="1" placeholder="*"/>
            	<input type="password" maxlength="1" placeholder="*"/>
            </div>
            </div>
            <div className="confirm">
            <span className="pin-text" >Confirm Your 4 Digit Pin</span>
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

export default DropyCreatePin;