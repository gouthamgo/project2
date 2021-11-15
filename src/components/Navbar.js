import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { auth } from '../config/Config'

export const Navbar = ({user}) => {

  const history = useHistory();

  const logout = () => {
    auth.signOut().then(()=>{
      history.push('/login');
    })
  }
  return (


      {!user && <div className='navbox'>
        <Link to='signup' className='nav-link'>Signup</Link>
        <Link to='login' className='nav-link'>Login</Link>
      </div> }

      {user && <div className='navbox'>
        <span><Link to='/' className='navlinks'>{user}</Link></span>
        <span><Link to='cartproducts' className='navlinks'><Icon icon={cart} /> </Link></span>
        <span><button clasName='logout-btn' onClick={logout}>LOGOUT</button></span>
      </div>
  
  )
}
