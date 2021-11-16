import React from 'react'
import { Navbar } from './Navbar';
import '../css/Home.css'
import '../images/s1.jpg'
import {Link} from 'react-router-dom'
import {New} from './New';
import {Products} from './Products'


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
