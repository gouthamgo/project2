import React from 'react'
import { Navbar } from './Navbar';
import '../css/Home.css'
import '../images/s1.jpg'
import {Link} from 'react-router-dom'
import {New} from './New';
import {Products} from './Products'



export const Home = ({ user }) => {

  return (

    <>
    <div className='wrapper'>
      <Navbar user={ user }/>
    </div>

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


    <div class="main_slider" >
      <div class="container fill_hight">
        <div class="row align-items-center fill_hight">
          <div class="col">
            <div class="main_slider_content">
              <h6>Spring / Summer / Winter Collection 2021</h6>
              <h1>Get up to 70% off Now Arrivals</h1>
            <div class="red_button shop_now_button"><a href="#">Shop now</a></div>
          </div>
        </div>
      </div>
    </div>

    </div>



    <New/>


    </>

  )
}
