import React from 'react'
import { Link } from 'react-router-dom'

import '../css/Flash.css'



import { GiTruck} from "react-icons/gi";
import { GiCash} from "react-icons/gi";
import { GiReturnArrow} from "react-icons/gi";
import { GiBackwardTime} from "react-icons/gi";




export const Flash = () => {


return (
  <>

  <div class="benefit">
    <div class="container">
      <div class="row benefit_row">
        <div class="col-lg-3 benefit_col">
          <div class="benefit_item d-flex flex-row align-items-center">
            <div class="benefit_icon">
              <GiTruck/>
            </div>
            <div class="benefit_content">
              <h6>Free Shipping</h6>
              <p>Suffered Alteration is Some Form</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 benefit_col">
          <div class="benefit_item d-flex flex-row align-items-center">
            <div class="benefit_icon">
            <GiCash/>
            </div>
            <div class="benefit_content">
              <h6>45 days return</h6>
              <p>Making it Look like Readable</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 benefit_col">
          <div class="benefit_item d-flex flex-row align-items-center">
            <div class="benefit_icon">
              <GiReturnArrow/>
                </div>
            <div class="benefit_content">
              <h6>Cash on Delivery</h6>
              <p>The Internet tend to Repeat</p>
            </div>
          </div>
        </div>

        <div class="col-lg-3 benefit_col">
          <div class="benefit_item d-flex flex-row align-items-center">
            <div class="benefit_icon">
              <GiBackwardTime/>
            </div>
            <div class="benefit_content">
              <h6>Operation Hours</h6>
              <p>8AM - 9PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  </>
    )
}
