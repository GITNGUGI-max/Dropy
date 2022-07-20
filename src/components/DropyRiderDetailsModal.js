
import React from 'react'
import '../assets/styles.css'
import {Link} from 'react-router-dom'
 const DropyRiderPin = () =>{
  return (
    <>
    <div>
        <img className="register-dropy" src="./images/dropyLogoPlain.png" />



            <div className="modal">
            <div className="details">
			<button className="pin-text6">Rider ID</button>
            <img className="rider-profile" src="./images/prezzo.jpg" /></div>
            <div className="details">
            	<span className="pin-text1">Timothy Karanja Nyoro</span>
            	<span className="pin-text2">Yamaha 567 SM</span>
            	<span className="pin-text3">213 Rides</span>
            	<span className="pin-text4">15,456 km travelled</span>
            	<span className="pin-text5">Juja</span>
            </div>
       		 <div className="details">
	       		 <img className="star" src="./images/star.jpg" />
	       		 <button className="pin-text7">KDB987</button>
       		 </div>
         
            </div>
           
        
      </div>
    </>
  )
}

export default DropyRiderPin;