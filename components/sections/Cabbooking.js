import React from 'react';
import Link from 'next/link';

export default function Cabbooking() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="images/cab3.jpg" alt="Cab" style={{ width: '70%', height: 'auto' }} /><br/><br/>
          </div>
          <div className="col-md-6">
            <h2 style={{ fontSize: '24px' }}>Our Premier Cab Booking Service</h2>
            <p>Welcome to hassle-free travel during your stay at our hotel! We understand that getting around can be one of the biggest concerns during your travels.</p>
            <p>That's why we're delighted to offer our guests an exclusive Cab Booking Service designed to make your local transportation seamless and stress-free.</p>
            <ul>
              <li><i className="fa-regular fa-square-check"></i>Safety and Comfort First</li>
              <li><i className="fa-regular fa-square-check"></i>24/7 Availability</li>
              <li><i className="fa-regular fa-square-check"></i>Personalized Journeys</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

