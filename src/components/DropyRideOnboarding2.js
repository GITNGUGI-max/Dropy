import React from 'react'
import '../assets/styles.css'
import Background from '../assets/images/bg1.png'
import {useNavigate} from 'react-router-dom'

const style = {
  width:"100%",
  height:"70em",
  backgroundImage:`url(${Background})`,
  backgroundSize:"cover",
  backgroundRepeat: 'no-repeat',
  marginTop:"-20em",


}


const DropyShopOnboarding1=()=> {
  
  const navigate = useNavigate();
  const handleNavigation = ()=>{
    navigate("/", {replace:true})
  }
  return (
    <React.Fragment>
    <img className="ride2" src="./images/ride2.png" />
     <div style={style}></div> 
    <div className='ride2-top'>
    <h1 className="ride2-text">RIDE</h1>
	  <h1 className="ride2-header"><em>ANYWHERE</em></h1>
	  <h1 className="ride2-text">FAST & EASY</h1>
	   <p className="ride2-para">Dropy has integrated thousand of shop countrywide to help you shop directly from your sellers.</p>
   
         
   </div>  
   <div className="ride2-middle">
   
  
   </div>

   <div className="buttons-next1">
          <button className="navigation"></button>   
          <button className="navigation"></button> 
          <button className="navigation"></button>   
          <button className="navigation"></button>  
          <button className="navigation"></button>   
          <button className="navigation"></button>   
          <button className="navigation"></button>   
          
          <div>
          <button className="next" onClick={handleNavigation}>Next</button>
          </div>
        </div>   


    </React.Fragment>
    
  )

}

export default DropyShopOnboarding1