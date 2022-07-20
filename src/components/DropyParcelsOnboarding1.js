import React from 'react'
import '../assets/styles.css'
import Background from '../assets/images/bg.png'
import {useNavigate} from 'react-router-dom'




const style = {
  width:"100%",
  height:"100em",
  backgroundImage:`url(${Background})`,
  backgroundSize:"cover",
  backgroundRepeat: 'no-repeat',
  marginTop:"0 !important",
  // backgroundPosition:"center"
}

const DropyParcelsOnboarding1=()=> {

  const navigate = useNavigate();
  const handleNavigation = ()=>{
    navigate("/parcels2", {replace:true})
  }
  return (
    <>
  <div className='' style={style}>
    
              <article className="container">
           <h1 className="white">SEND</h1>
            <h1 className="yellow">ANYTHING </h1>
             <h1 className="white">ANYWHERE </h1>
            <h1 className="yellow">FASTER THAN </h1>
            <h1 className="white">EVER!</h1>
            <p className="white-para">Dropy allows you to send anything as fast as possible. We are available countrywide.</p>
         </article> 
           
   </div>  
   <div className="buttons">
          <button className="navigation" id="active"></button>   
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


    </>
    
  )

}

export default DropyParcelsOnboarding1