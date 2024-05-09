'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
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
                <li className="current dropdown"><Link href="/">Home</Link>
                </li>
                <li className="dropdown"><Link href="/">Our Rooms</Link>
                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        <li><Link href="/page-groundfloor">Heritage Deluxe</Link></li>
                        <li><Link href="/page-firstfloor">Heritage Luxury</Link></li>
                        <li><Link href="/page-secondfloor">Heritage Royal</Link></li>
                        <li><Link href="/page-thirdfloor">Ganga River View</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(2)}><i className="fa fa-angle-down"/></div>
                </li>
                <li className="dropdown"><Link href="/page-services">Facilities</Link>
                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li><Link href="/page-cabbooking">Cab Booking</Link></li>
                        <li><Link href="/page-boatbooking">Boat Booking</Link></li>
                        <li><Link href="/page-citytour">City Tour</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(3)}><i className="fa fa-angle-down"/></div>
                </li>
                <li className="dropdown"><Link href="/page-services">About</Link>
                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li><Link href="/page-about">MD Message</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(3)}><i className="fa fa-angle-down"/></div>
                </li>
                <li><Link href="/page-profile">Profile</Link></li>
                <li><Link href="/page-Specility">Specility</Link></li>
                <li><Link href="/page-Gallary">Gallary</Link></li>
                <li><Link href="/page-contact">Contact</Link></li>
                <li><Link href="/page-Avalability">Check Avalability</Link></li>
                
            </ul>
        </>
    )
}
