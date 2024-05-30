import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function About1() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            <section className="about-section">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-xl-6 col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                <span className="sub-title">PALACE ON GANGES</span>
                                <h2>Most Booked & Rated <br/>Hotel in Varanasi.</h2>
                                <div className="text">Welcome to the Palace on Ganges, an exquisite fusion of traditional elegance and contemporary luxury located at the heart of Varanasi’s spiritual landscape, on the famous Assi Ghat. Our hotel embodies the essence of Varanasi’s rich cultural tapestry and spiritual ethos, offering a uniquely immersive experience to discerning travellers from around the globe. With bespoke accommodations and thoughtful amenities, we ensure that every moment spent here resonates with comfort and serenity. Each of our 24 rooms is a testament to the diverse cultural influences that have shaped various parts of India over millennia. </div>
                                </div>
                                <div className="outer-box">
                                <div className="info-block">
                                    <div className="inner">
                                    <div className="icon-box"><i className="flaticon-breakfast"></i></div>
                                    <h4 className="title">Pure <br/>Veg <br/>Food</h4>
                                    </div>
                                </div>
                                <div className="info-block">
                                    <div className="inner">
                                    <div className="icon-box"><i className="flaticon-bed-2"></i></div>
                                    <h4 className="title">Best <br/>Room <br/>Services</h4>
                                    </div>
                                </div>
                                </div>
                                <div className="btn-box">
                                <a href="/our-rooms" className="theme-btn btn-style-one"><span className="btn-title">Discover More</span></a>
                                <div className="contact-info">
                                    <div className="icon-box"><i className="flaticon-customer-service"></i></div>
                                    <a href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5OQ==&individual=true" className='whitespace-nowrap'>Book Now</a>
                                    <h4 className="title"><a href='tel:+91-7408423504'>+91-7408423504</a> <br/><a href='tel:+91-7408423511'>+91-7408423511</a></h4>
                                </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-6">
                            <div className="inner-column wow fadeInLeft">
                                <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/home/about1-1.jpg" alt=""/></figure>
                                <figure className="image-2 overlay-anim wow fadeInLeft"><img src="images/about1-2.jpg" alt=""/></figure>
                                <div className="btn-box">
                                    <a onClick={() => setOpen(true)} className="play-now-two"><i className="icon fa fa-play" aria-hidden="true"></i><span className="ripple"></span></a>
                                </div>
                                <div className="exp-box bounce-y">
                                <figure className=" overlay-anim wow fadeInLeft"><img src="images/resource/exp-icon.png" alt=""/></figure>
                                <h4 className="title">Heritage Room</h4>
                                <div className="text">Experience the grander of a by gone era at our heritage hotel, where history meets Luxury.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="jIXQjSaE2kk" onClose={() => setOpen(false)} />
        </>
    )
}
