import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'

import { auth } from '../config/Config'

export const Navbar = ({user}) => {

  const history = useHistory();


    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }


return (
  <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Wear<span> This</span></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav" >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <Link to= '/' className="nav-link"> Home</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#ban">New</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
       {!user && <div className='rightside'>
          <li class="nav-item">
            <Link to= '/signup' className="nav-link"> Signup</Link>
          </li>

          <li class="nav-item">
            <Link to= '/login' className="nav-link"> Login</Link>
          </li>
        </div>}
        {user && <div className='rightside'>
                        <span><Link to="/" className='navlink'>{user}</Link></span>
                        <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                        <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
                    </div>}

        </ul>


      </div>
    </nav>

  </>
    )
}
