import React from 'react';
import Link from 'next/link';

export default function Boatbooking() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="images/boat5.jpg" alt="Cab" style={{ width: '70%', height: 'auto' }} /><br/><br/>
          </div>
          <div className="col-md-6">
            <h2 style={{ fontSize: '24px' }}>Boat Booking Service</h2>
            <p>Embark on an unforgettable journey across the shimmering waters that surround our stunning locale. Whether you're seeking a serene sail into the sunset, an adventurous trip to local hidden gems, or a luxurious day out on a yacht, our Boat Booking Service caters to all your nautical needs.</p>
            <ul>
              <li><i className="fa-regular fa-square-check"></i>Tailored Maritime Experiences</li>
              <li><i className="fa-regular fa-square-check"></i>Exclusive Access and Privacy</li>
              <li><i className="fa-regular fa-square-check"></i>Safety First</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

