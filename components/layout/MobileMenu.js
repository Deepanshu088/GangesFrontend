'use client'
import { ABOUT_US, BOAT_BOOKING, CAB_BOOKING, CITY_TOUR, CONTACT_US, GALLERY_ROUTE, GANGES_VIEW_FLOOR_ROUTE, LOWER_LEVEL_FLOOR_ROUTE, MD_PROFILE, PROFILE, RESTAURANT, SPECIALITY_ROUTE, UPPER_LEVEL_FLOOR_ROUTE } from "@/constants/RoutesConstants"
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu({ handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation clearfix">
                {/*Keep This Empty / Menu will come through Javascript*/}
                <li className="current dropdown"><Link onClick={() => handleMobileMenu()} href="/">Home</Link>
                </li>
                <li className="dropdown"><Link href="/rooms-palace-on-ganges-heritage-hotel-assi-ghat-varanasi" onClick={() => handleMobileMenu()}>Our Rooms</Link>
                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link onClick={() => handleMobileMenu()} href={LOWER_LEVEL_FLOOR_ROUTE}>Lower Level Heritage Deluxe</Link></li>
                        <li><Link onClick={() => handleMobileMenu()} href={UPPER_LEVEL_FLOOR_ROUTE}>Upper Level Heritage Deluxe</Link></li>
                        {/* <li><Link onClick={() => handleMobileMenu()} href="/page-secondfloor">Heritage Royal</Link></li> */}
                        <li><Link onClick={() => handleMobileMenu()} href={GANGES_VIEW_FLOOR_ROUTE}>Ganges View</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(2)}><i className="fa fa-angle-down"/></div>
                </li>
                <li className="dropdown"><Link href="/page-facilities">Facilities</Link>
                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li><Link onClick={() => handleMobileMenu()} href={CAB_BOOKING}>Cab Booking</Link></li>
                        <li><Link onClick={() => handleMobileMenu()} href={BOAT_BOOKING}>Boat Booking</Link></li>
                        <li><Link onClick={() => handleMobileMenu()} href={CITY_TOUR}>Guided Tour</Link></li>
                        <li><Link onClick={() => handleMobileMenu()} href={RESTAURANT}>Restaurant</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(3)}><i className="fa fa-angle-down"/></div>
                </li>
                <li className="dropdown"><Link href={ABOUT_US} onClick={() => handleMobileMenu()}>About</Link>
                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li><Link onClick={() => handleMobileMenu()} href={MD_PROFILE}>Director's Message</Link></li>
                        <li><Link onClick={() => handleMobileMenu()} href={PROFILE}>Profile</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(4)}><i className="fa fa-angle-down"/></div>
                </li>
                <li><Link onClick={() => handleMobileMenu()} href={SPECIALITY_ROUTE}>Speciality</Link></li>
                <li><Link onClick={() => handleMobileMenu()} href={GALLERY_ROUTE}>Gallery</Link></li>
                <li><Link onClick={() => handleMobileMenu()} href={CONTACT_US}>Contact</Link></li>
                <li><Link onClick={() => handleMobileMenu()} href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5OQ==&individual=true">Check Avalability</Link></li>
                
            </ul>
        </>
    )
}
