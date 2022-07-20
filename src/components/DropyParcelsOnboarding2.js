import React from 'react'
import '../assets/styles.css'
import Background from '../assets/images/bg.png'
import {useNavigate} from 'react-router-dom'

const style = {
  width:"100%",
  height:"80em",
  backgroundImage:`url(${Background})`,
  backgroundSize:"cover",
  backgroundRepeat: 'no-repeat',
  marginTop:"0 !important",
  opacity:.1
}


const DropyParcelsOnboarding2=()=> {
  
  const navigate = useNavigate();
  const handleNavigation = ()=>{
    navigate("/shop1", {replace:true})
  }
  return (
    <React.Fragment  >
   <div style={style}>   </div>
  <div className='parcels2-top' >
  	<h1 className="text">REALTIME <em>TRACKING </em> OF PARCELS</h1>
  	<img className="map" src="./images/map.png" />  
           
   </div>  
   <div className="parcels2-middle">
   	<p className="para">Dropy allows you to track your parcel with the state of art AI tracking algorithms.</p>
   	<img className="tracking" src="./images/rectangle8.png" />
   </div>

   <div className="buttons-next1">
          <button className="navigation"></button>   
          <button className="navigation" id="active"></button> 
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

export default DropyParcelsOnboarding2