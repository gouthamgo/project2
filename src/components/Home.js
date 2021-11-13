import React from 'react'
import { Navbar } from './Navbar';

import '../css/Home.css'
import '../images/s1.jpg'


export const Home = () => {

return (
<>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Wear<span> This</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav" >
              <ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Shop <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">New</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Signup</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Login</a>
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


</>

    )
}
