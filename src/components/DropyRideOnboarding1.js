import React from 'react'
import '../assets/styles.css'
import Background from '../assets/images/bg.png'
import {useNavigate} from 'react-router-dom'

const style = {
  width:"100%",
  height:"35em",
  backgroundImage:`url(${Background})`,
  backgroundSize:"cover",
  backgroundRepeat: 'no-repeat',
  marginTop:"0 !important",
  opacity:.1
}


const DropyShopOnboarding1=()=> {
  
  const navigate = useNavigate();
  const handleNavigation = ()=>{
    navigate("/ride2", {replace:true})
  }
  return (
    <React.Fragment>
   <div style={style}></div>
  <div className='ride1-top'>
  		<img className='ride-img' src="./images/dropyLogoPlain.png"/>
	  <h1 className="ride1-header"><em>BODAA</em></h1>
	  <h1 className="ride1-text">BILA STRESS</h1>
	  	 
           
   </div>  
   <div className="ride1-middle">
   	<p className="ride1-para">Dropy has integrated thousand of shop countrywide to help you shop directly from your sellers.</p>
   	<hr className="divider"/>
    <img className="ride" src="./images/bodaa.png" />
    <hr className="divider"/>
   </div>

   <div className="buttons-next1">
          <button className="navigation"></button>   
          <button className="navigation"></button> 
          <button className="navigation"></button>   
          <button className="navigation"></button>  
          <button className="navigation" id="active"></button>   
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