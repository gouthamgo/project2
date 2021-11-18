import React from 'react'
import { Navbar } from './Navbar';
import '../css/Home.css'
import '../images/s1.jpg'

import {New} from './New';
// importing new from new component

import {Flash} from './Flash';
// importing flash from flash component

import {Footer} from './Footer';

import { Link } from 'react-router-dom'

// use the home functional component to render the reuired out 
export const Home = ({user}) => {

  return (
    <>
    <div>
    <Navbar user={user}/>
    </div>


    <div class="main_slider" >
    <div class="container fill_hight">
    <div class="row align-items-center fill_hight">
    <div class="col">
    <div class="main_slider_content">
    <h6>Spring / Summer / Winter Collection 2021</h6>
    <h1>Get up to 70% off Now Arrivals</h1>
    <Link to='Products' className='red_button shop_now_button'>Shop Now</Link>

    </div>
    </div>
    </div>
    </div>

    </div>

    <New/>

    <Flash/>

    <Footer/>

    </>

  )
}
