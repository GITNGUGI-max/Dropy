import React from 'react'
import '../assets/styles.css'
import {Link} from 'react-router-dom'
 const DropyMainLandingBeforeSignUp = () =>{
  return (
    <>
    <div>
        <img className="login-dropy" src="./images/dropyLogoPlain.png" />
        <div className="main-landing">        <div className="shops">
              <img className="main-dropy" src="./images/shops.png" />
              <h1 className="main-text">Shops</h1>
        </div>
        <div className="parcels">
              <img className="main-dropy" src="./images/parcels.png" />
               <h1 className="main-text">Parcels</h1>

        </div>
        <div className="rides">
              <img className="main-dropy" src="./images/rides.png" />
                <h1 className="main-text">Rides</h1>

        </div>
        </div>

        <button className='btn-main'>Welcome</button>

      
      </div>
    </>
  )
}

export default DropyMainLandingBeforeSignUp;