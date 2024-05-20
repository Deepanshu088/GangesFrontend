import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import MobileMenu from './MobileMenu';
import NavLinks from './NavLinks';

import LogoDark from '../../public/images/icons/Logo-Black.png';

const Header1 = ({ handleMobileMenu, searchToggle, handleToggle, scroll }) => {
    return (
        <>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', margin: 0 }}>
                <div className="container lg:max-w-full xl:max-w-[1536px] my-auto h-full">
                    <div className="main-box h-full px-8 my-auto text-center align-baseline items-center">
                        <div className="logo-box h-full w-auto my-auto py-2">
                            <Link href="/"><img src="/images/icons/Logo-Black.png" className='h-full w-full object-contain'/></Link>
                        </div>
                        <div className="nav-outer mx-2 my-auto">
                            <nav className="nav main-menu">
                                <NavLinks />
                            </nav>
                        </div>
                        <div className="outer-box">
                            <a href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5OQ==&individual=true" title="Book Now" className="header-btn">Book Now</a>
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />
                    <nav className="menu-box">
                        <div className="upper-box flex justify-between">
                            <div className="nav-logo text-left"><Link href="/"><Image src={LogoDark} title='Soluris' alt="" className='w-full h-auto object-contain' /></Link></div>
                            <div className="close-btn" onClick={handleMobileMenu}><i className="icon fa fa-times" /></div>
                        </div>
                        <MobileMenu handleMobileMenu={handleMobileMenu} />
                        <ul className="contact-list-one">
                            <li>
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link href="tel:+92880098670">+91-7408423504</Link>
                                </div>
                            </li>
                            <li>
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link href="mailto:help@company.com">info@palaceonganges.com</Link>
                                </div>
                            </li>
                            <li>
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Open Timings</span>
                                    Mon - Sun 24*7 <br/> 4:00 - 6:30
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="#"><i className="fab fa-pinterest" /></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="search-popup">
                    <span className="search-back-drop" />
                    <button className="close-search" onClick={handleToggle}><span className="fa fa-times" /></button>
                    <div className="search-inner">
                        <form method="post" action="#">
                            <div className="form-group">
                                <input type="search" name="search-field" defaultValue="" placeholder="Search..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="container my-auto h-full ">
                        <div className="inner-container h-full">
                            <div className="logo-box h-full w-auto my-auto p-2">
                            <Link href="/"><img src="/images/icons/Logo-Black.png" className='h-full w-full object-contain'/></Link>
                            </div>
                            <div className="nav-outer">
                                <nav className="main-menu">
                                    <NavLinks className="text-white" />
                                </nav>
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    );
};

export default Header1;