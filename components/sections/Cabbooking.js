import React from 'react';
import Link from 'next/link';

export default function Cabbooking() {
  return (
    <div class="new-food-section pt-0">
      <div class="custom-container">
        <div class="row">
          <div class="image-side col-xl-4 col-lg-4">
            <div class="inner-column">
              <div class="imagecorner">
                <figure class="new-image wow fadeInUp"><img src="images/cab3.jpg" alt="" /></figure>
              </div>
              <div class="new-quote-box">
                <div class="new-icon-box"><i class="flaticon-quotation"></i></div>
                <div class="new-text">Great hospitality is the key to our longstanding reputation for excellence.</div>
              </div>
            </div>
          </div>
          <div class="content-side col-xl-8">
            <div class="inner-column">
              <div class="new-sec-title">
                <span class="new-sub-title"></span>
                <h2>Our Premier Cab Booking Service</h2>
                <div class="new-text">Welcome to hassle-free travel during your stay at our hotel! We understand that
                  getting around can be one of the biggest concerns during your travels.<br />

                  That's why we're delighted to offer our guests an exclusive Cab Booking Service designed to make your
                  local transportation seamless and stress-free.</div>
                <div class="new-healthy-food">
                  <div class="new-food-list">
                    <ul>
                      <li><i class="fa-regular fa-square-check"></i>Safety and Comfort First</li>
                      <li><i class="fa-regular fa-square-check"></i>24/7 Availability</li>
                      <li><i class="fa-regular fa-square-check"></i>Personalized Journeys</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

