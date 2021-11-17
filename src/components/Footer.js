import React from 'react'
import { Link } from 'react-router-dom'

import '../css/Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBtc } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa";


export const Footer = () => {


return (
  <>

  <footer class="footer">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<div class="footer_nav_container d-flex flex-sm-row flex-column
						align-items-center justify-content-lg-start justify-content-center text-center">
							<ul class="footer_nav">
								<li><a href="#">Blog</a></li>
								<li><a href="#">FAQs</a></li>
								<li><a href="#">Contact Us</a></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">

              <FaFacebook/>
								<FaInstagram/>
								<FaTwitter/>
                <FaBtc/>
                <FaCcApplePay/>


						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="footer_nav-container">
							<div class="cr">©2021 All Right Reserved.Made by <i class="fa fa-heart-o" aria-hidden="true"></i> by<a href="#">
								SEIR48
							</a></div>
						</div>
					</div>
				</div>
			</div>
		</footer>




  </>
    )
}
