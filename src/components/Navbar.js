import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {


return (
        <div className='navbox'>
          <Link to='signup' className='nav-link'>Signup</Link>
            <Link to='login' className='nav-link'>Login</Link>
        </div>
    )
}
