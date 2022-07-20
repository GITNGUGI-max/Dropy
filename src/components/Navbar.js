import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <div className="links">
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/login'>Login</Link>
        <Link className="link" to='/register'>Register</Link>
        <Link className="link" to='/parcels'>Parcels</Link>
       
    </div>
    </div>

    <Outlet/>
    </>
  )
}

export default Navbar