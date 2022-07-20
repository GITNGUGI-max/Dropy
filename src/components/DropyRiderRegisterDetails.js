import React from 'react'
import '../assets/styles.css'
import {Link} from 'react-router-dom'
 const DropyRiderRegisterDetails = () =>{
  return (
    <>
    <div>
        <img className="register-dropy" src="./images/dropyLogoPlain.png" />

        <form className='register-form'>
            <div className='start'>
            <div className='form-group'>
            <label htmlFor='firstname' id='firstname'>First name</label>
            <input type="text" className='firstname' placeholder='Chirag'/>
            </div>
            <div className='form-group'>
            <label htmlFor='secondname' id='secondname'>Second name</label>
            <input type="text" className='secondname' placeholder='Pammar'/>
            </div>
            <div className='form-group'>
            <label htmlFor='idnumber' id='idnumber'>National ID Number</label>
            <input type="number" className='idnumber' placeholder='89567865'/>
            </div>
            <div className='form-group'>
            <label htmlFor='phonenumber' id='phonenumber'>Phone number</label>
            <input type="number" className='phonenumber' placeholder='0712123456'/>
            </div>
            <div className='form-group'>
            <label htmlFor='idnumber' id='idnumber'>Pool ID</label>
            <input type="number" className='idnumber' placeholder='89567865'/>
            </div>
            <div className='form-group'>
            <label htmlFor='location' id='location'>Enter your main location</label>
            <input type="text" className='location' placeholder='Westlands east'/>
            </div>
   
            <div className='form-group'>
            <label htmlFor='plates' id='plates'>Number Plates</label>
            <input type="text" className='plates' placeholder='KDR6878'/>
            </div>
           
            <div className='form-group'>
            <label htmlFor='model' id='model'>Bike Model</label>
            <input type="text" className='model' placeholder='Boxer 345'/>
            </div>
      		<div className='form-group'>
            <label htmlFor='QR' id='QR'>County QR ID Number</label>
            <input type="number" className='QR' placeholder='12356'/>
            </div>
            <div className='form-group'>
        
            <button type="button" className='upload' placeholder='Westlands east'> +upload QR </button> 
            </div>
    		</div>
        
            <div className='end'>
            <button className='btn-register'>Register</button>
            </div>

        </form>
      
      </div>
    </>
  )
}

export default DropyRiderRegisterDetails;