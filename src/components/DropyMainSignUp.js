import React from 'react'
import '../assets/styles.css'
import {Link} from 'react-router-dom'
 const DropyMainSignUp = () =>{
  return (
    <>
    <div>
        <img className="login-dropy" src="./images/dropyLogoPlain.png" />
        <div className="btns">
              <img className="login-dropy" src="./images/undrawloginre4vu2.png" />
              <h1>Welcome To Dropy</h1>
              <p className="para">We bring you Shops, Parcels and Rides</p>
             <Link className="welcome-link" to="/register"><button className="welcome-btn">Create Account</button></Link>
        <Link className="welcome-link" to="/login"><button className="welcome-btn2">Login</button></Link>

        </div>
       
        
      </div>
    </>
  )
}

export default DropyMainSignUp;