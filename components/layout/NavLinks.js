import Link from 'next/link';
import React from 'react';

const NavLinks = ({ extraClassName }) => {
  return (
    <ul className={`navigation ${extraClassName}`}>
      <li className="current"><Link href="/">Home</Link></li>
      <li className="dropdown">
        <Link href="#">Our Rooms</Link>
        <ul>
          <li>
            <Link href="/page-groundfloor">Ground Floor</Link>
          </li>
          <li>
            <Link href="/page-firstfloor">First Floor</Link>
          </li>
          <li>
            <Link href="/page-secondfloor">Second Floor</Link>
          </li>
          <li>
            <Link href="/page-thirdfloor">Third Floor</Link>
          </li>
        </ul>
      </li>

      <li className="dropdown">
        <Link href="#">Facilities</Link>
        <ul>
          <li>
            <Link href="/page-cabbooking">Cab Booking</Link>
          </li>
          <li>
            <Link href="/page-boatbooking">Boat Booking</Link>
          </li>
          <li>
            <Link href="/page-citytour">City Tour</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link href="/page-about">About</Link>
        <ul>
          <li>
            <Link href="/page-md">MD Message</Link>
          </li>
        </ul>
      </li>
      <li><Link href="/page-profile">PROFILE</Link></li>
      <li><Link href="/page-speciality">SPECIALITY</Link></li>
      <li><Link href="/page-gallery">GALLERY</Link></li>
      <li><a href="https://staahmax.staah.net/be/indexpack?propertyId=MTA5OQ&amp;individual=true&amp;roomTypeId=100333">Check Availablity</a></li>
    </ul>
  );
};

export default NavLinks;
