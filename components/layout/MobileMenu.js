'use client'
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
                <li className="dropdown"><Link href="/our-rooms" onClick={() => handleMobileMenu()}>Our Rooms</Link>
                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link onClick={() => handleMobileMenu()} href="/page-groundfloor">Heritage Deluxe</Link></li>
                        <li><Link onClick={() => handleMobileMenu()} href="/page-firstfloor">Heritage Luxury</Link></li>
                        <li><Link onClick={() => handleMobileMenu()} href="/page-secondfloor">Heritage Royal</Link></li>
                        <li><Link onClick={() => handleMobileMenu()} href="/page-thirdfloor">Ganga River View</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(2)}><i className="fa fa-angle-down"/></div>
                </li>
                <li className="dropdown"><Link href="/page-facilities">Facilities</Link>
                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li><Link onClick={() => handleMobileMenu()} href="/page-cabbooking">Cab Booking</Link></li>
                        <li><Link onClick={() => handleMobileMenu()} href="/page-boatbooking">Boat Booking</Link></li>
                        <li><Link onClick={() => handleMobileMenu()} href="/page-citytour">City Tour</Link></li>
                        <li><Link onClick={() => handleMobileMenu()} href="/page-restaurant">Restaurant</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(3)}><i className="fa fa-angle-down"/></div>
                </li>
                <li className="dropdown"><Link href="/page-about" onClick={() => handleMobileMenu()}>About</Link>
                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li><Link onClick={() => handleMobileMenu()} href="/page-md">Director's Message</Link></li>
                        <li><Link onClick={() => handleMobileMenu()} href="/page-profile">Profile</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(4)}><i className="fa fa-angle-down"/></div>
                </li>
                <li><Link onClick={() => handleMobileMenu()} href="/page-speciality">Speciality</Link></li>
                <li><Link onClick={() => handleMobileMenu()} href="/page-gallery">Gallery</Link></li>
                <li><Link onClick={() => handleMobileMenu()} href="/page-contact">Contact</Link></li>
                <li><Link onClick={() => handleMobileMenu()} href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5OQ==&individual=true">Check Avalability</Link></li>
                
            </ul>
        </>
    )
}
