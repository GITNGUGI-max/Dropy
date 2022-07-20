import React from 'react'
import '../assets/styles.css'
import Background1 from '../assets/images/bg1.png'
import {useNavigate} from 'react-router-dom'

const style = {
  width:"100%",
  height:"125em",
  backgroundImage:`url(${Background1})`,
  backgroundSize:"cover",
  backgroundRepeat: 'no-repeat',
  marginTop:"0 !important",

}


const DropyShopOnboarding2=()=> {
  
        const navigate = useNavigate();
        const handleNavigation = ()=>{
          navigate("/ride1", {replace:true})
        }
        return (
          <>
         <div style={style}>   </div>
        <div className='shop2-top' >
          <h1 className="shop2-text">MAKE <em>MONEY </em> TODAY</h1>
          <img className="money" src="./images/money.jpg" />  
                 
         </div>  
         <div className="shop2-middle">
          <p className="shop2-para">Create your online account today and start selling to millions on dropy.</p>
          <div className="display">
            <div>
            <h1 className="heading">Fashion</h1>
              <img className="items" src="./images/maskGroup2.png" />
            </div>
            <div>
            <h1 className="heading">Food</h1>
              <img className="items" src="./images/maskGroup3Food.png" />
            </div>
            <div>
            <h1 className="heading">Mama Mboga</h1>
            <img className="items" src="./images/maskGroup3MamaMboga.png" />
            </div>
             <div>
            <h1 className="heading">Computers</h1>
              <img className="items" src="./images/maskGroup4Computers.png" />
            </div>
          </div>
         </div>

         <div className="buttons-next2">
                <button className="navigation"></button>   
                <button className="navigation"></button> 
                <button className="navigation"></button>   
                <button className="navigation" id="active"></button>  
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

export default DropyShopOnboarding2