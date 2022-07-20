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
    navigate("/shop2", {replace:true})
  }
  return (
    <React.Fragment>
   <div style={style}></div>
  <div className='shop1-top' >
	  <h1 className="shop1-header">Shop .</h1>
	  <h1 className="shop1-text">WE DELIVER</h1>
	  	 
           
   </div>  
   <div className="shop1-middle">
   	<p className="shop1-para">Dropy has integrated thousand of shop countrywide to help you shop directly from your sellers.</p>
   	<img className="tracking" src="./images/undrawonlineshoppingrek1sv.png" />
   </div>

   <div className="buttons-next1">
          <button className="navigation"></button>   
          <button className="navigation"></button> 
          <button className="navigation" id="active"></button>   
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