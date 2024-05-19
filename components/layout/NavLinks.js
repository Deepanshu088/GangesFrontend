import Link from 'next/link';
import React from 'react';

const NavLinks = ({ extraClassName }) => {
  return (
    <ul className={`navigation ${extraClassName} flex justify-evenly whitespace-nowrap [&>li]:mx-3` }>
      <li className="current"><Link className="text-sm" href="/">Home</Link></li>
      <li className="dropdown">
        <Link className="text-sm" href="/our-rooms">Our Rooms</Link>
        <ul>
          <li>
            <Link className="text-sm" href="/page-groundfloor">Lower Floor</Link>
          </li>
          <li>
            <Link className="text-sm" href="/page-firstfloor">Upper Floor</Link>
          </li>
          {/* <li>
            <Link className="text-sm" href="/page-secondfloor">Heritage Royal</Link>
          </li> */}
          <li>
            <Link className="text-sm" href="/page-thirdfloor">Ganges Luxury</Link>
          </li>
        </ul>
      </li>

      <li className="dropdown">
        <Link className="text-sm" href="/page-facilities">Facilities</Link>
        <ul>
          <li>
            <Link className="text-sm" href="/page-cabbooking">Cab Booking</Link>
          </li>
          <li>
            <Link className="text-sm" href="/page-boatbooking">Boat Booking</Link>
          </li>
          <li>
            <Link className="text-sm" href="/page-citytour">Guided Tour</Link>
          </li>
          <li>
            <Link className="text-sm" href="/page-restaurant">Restaurant</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link className="text-sm" href="/page-about">About</Link>
        <ul>
          <li> <Link className="text-sm" href="/page-md">Director's Message</Link> </li>
          <li><Link className="text-sm" href="/page-profile">Profile</Link></li>
        </ul>
      </li>
      <li><Link className="text-sm" href="/page-speciality">SPECIALITY</Link></li>
      <li><Link className="text-sm" href="/page-gallery">GALLERY</Link></li>
      <li><Link className="text-sm" href="/page-contact">CONTACT US</Link></li>
      {/* <li><a href="https://staahmax.staah.net/be/indexpack?propertyId=MTA5OQ&amp;individual=true&amp;roomTypeId=100333">Check Availablity</a></li> */}
    </ul>
  );
};

export default NavLinks;
