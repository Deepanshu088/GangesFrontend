import { ABOUT_US, BOAT_BOOKING, CAB_BOOKING, CITY_TOUR, CONTACT_US, GALLERY_ROUTE, GANGES_VIEW_FLOOR_ROUTE, LOWER_LEVEL_FLOOR_ROUTE, MD_PROFILE, PROFILE, RESTAURANT, SPECIALITY_ROUTE, UPPER_LEVEL_FLOOR_ROUTE } from '@/constants/RoutesConstants';
import Link from 'next/link';
import React from 'react';

const NavLinks = ({ extraClassName }) => {
  return (
    <ul className={`navigation ${extraClassName} flex justify-evenly whitespace-nowrap [&>li]:mx-3` }>
      <li className="current"><Link className="text-sm" href="/">Home</Link></li>
      <li className="dropdown">
        <Link className="text-sm" href="/rooms-palace-on-ganges-heritage-hotel-assi-ghat-varanasi">Our Rooms</Link>
        <ul>
          <li>
            <Link className="text-sm" href={LOWER_LEVEL_FLOOR_ROUTE}>Lower Level Heritage Deluxe</Link>
          </li>
          <li>
            <Link className="text-sm" href={UPPER_LEVEL_FLOOR_ROUTE}>Upper Level Heritage Deluxe</Link>
          </li>
          {/* <li>
            <Link className="text-sm" href="/page-secondfloor">Heritage Royal</Link>
          </li> */}
          <li>
            <Link className="text-sm" href={GANGES_VIEW_FLOOR_ROUTE}>Ganges View</Link>
          </li>
        </ul>
      </li>

      <li className="dropdown">
        <Link className="text-sm" href="/page-facilities">Facilities</Link>
        <ul>
          <li>
            <Link className="text-sm" href={CAB_BOOKING}>Cab Booking</Link>
          </li>
          <li>
            <Link className="text-sm" href={BOAT_BOOKING}>Boat Booking</Link>
          </li>
          <li>
            <Link className="text-sm" href={CITY_TOUR}>Guided Tour</Link>
          </li>
          <li>
            <Link className="text-sm" href={RESTAURANT}>Restaurant</Link>
          </li>
        </ul>
      </li>
      <li className="dropdown">
        <Link className="text-sm" href={ABOUT_US}>About</Link>
        <ul>
          <li> <Link className="text-sm" href={MD_PROFILE}>Director's Message</Link> </li>
          <li><Link className="text-sm" href={PROFILE}>Profile</Link></li>
        </ul>
      </li>
      <li><Link className="text-sm" href={SPECIALITY_ROUTE}>SPECIALITY</Link></li>
      <li><Link className="text-sm" href={GALLERY_ROUTE}>GALLERY</Link></li>
      <li><Link className="text-sm" href={CONTACT_US}>CONTACT US</Link></li>
      {/* <li><a href="https://staahmax.staah.net/be/indexpack?propertyId=MTA5OQ&amp;individual=true&amp;roomTypeId=100333">Check Availablity</a></li> */}
    </ul>
  );
};

export default NavLinks;
