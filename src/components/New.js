import React from 'react'
import { Link } from 'react-router-dom'

import '../css/New.css'


export const New = () => {


return (
  <>
  <div id="ban" class="banner">
  				<div class="container">
  					<div class="row">
  						<div class="col-md-4">
  							<div class="banner_item item1 align-item-center" >
  								<div class="banner_category">
                  <Link to='Products' className='women'>Womens</Link>
  								</div>
  							</div>
  						</div>

  						<div class="col-md-4">
  							<div class="banner_item item2 align-item-center" >
  								<div class="banner_category">
  									<a href="#">Accessories</a>
  								</div>
  							</div>
  						</div>

  						<div class="col-md-4">
  							<div class="banner_item item3 align-item-center" >
  								<div class="banner_category">
  									<a href="#">Men's</a>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>


  </>
    )
}
