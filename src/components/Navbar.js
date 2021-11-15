import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {


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

          <li class="nav-item">
            <Link to= '/signup' className="nav-link"> Signup</Link>
          </li>

          <li class="nav-item">
            <Link to= '/login' className="nav-link"> Login</Link>
          </li>

        </ul>
      </div>
    </nav>

  </>
    )
}
