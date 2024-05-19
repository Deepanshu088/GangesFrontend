import React from 'react';

// Define the TravelIdeasSection component
function TravelIdeasSection() {
    return (
        <section className="travel-ideas-section p-relative">
            <div className="container pt-0">
                <div className="section-title text-center mb-20">
                    <h3>Our Specialization with Your Travel Idea</h3>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="travel-idea-item">
                            <img src="images/facilities/cityTour/cityTour3.jpg" alt="Varanasi Special Tour Package" />
                            <h4 className="travel-idea-title"><a href="#">Varanasi Special Tour Package</a></h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="travel-idea-item">
                            <img src="images/facilities/cityTour/cityTour4.jpg" alt="Online Aarti, Pooja Services" />
                            <h4 className="travel-idea-title"><a href="#">Online Aarti, Pooja Services</a></h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="travel-idea-item">
                            <img src="images/facilities/cityTour/cityTour5.jpg" alt="Dev Deepawali Tour Package" />
                            <h4 className="travel-idea-title"><a href="#">Dev Deepawali Tour Package</a></h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="travel-idea-item">
                            <img src="images/facilities/cityTour/cityTour6.jpg" alt="Boat Ride in Varanasi Service" />
                            <h4 className="travel-idea-title"><a href="#">Boat Ride in Varanasi Service</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Define the Citytour component
function Citytour() {
    return (
        <section className="booking-details-section">
            <div className="container pt-0 pb-0 mb-0">
                <div className="row">
                    <div className="image-side col-xl-4 col-lg-4">
                        <div className="inner-column">
                            <div className="imagecorner">
                                <figure className="new-image wow fadeInUp"><img src="images/facilities/cityTour/cityTour2.jpg" alt="" /></figure>
                            </div>
                            <div className="new-quote-box">
                                <div className="new-icon-box"><i className="flaticon-quotation"></i></div>
                                <div className="new-text">Great hospitality is the key to our longstanding reputation for excellence.</div>
                            </div>
                        </div>
                    </div>
                    <div className="content-side col-xl-8">
                        <div className="inner-column pl-8 pt-6">
                            <div className="new-sec-title">
                                <span className="new-sub-title"></span>
                                <h3>Our Exclusive Guided Tour</h3>
                                <div className="new-text">Dive into the heart of Varanasi with our Exclusive City Tour, a carefully planned adventure that promises to reveal the layers of history, culture, and vibrancy that pulse through this ancient city. Whether your interest lies in exploring historic sites, sampling local cuisines, or simply experiencing the day-to-day life of Varanasi, our tour is crafted to provide a comprehensive and unforgettable journey.</div>
                                <div className="new-healthy-food mt-4">
                                    <div className="new-food-list">
                                    <ul>
											<li><i className="fa-regular fa-square-check mr-4 mb-2"></i><strong style={{ color: 'black', fontSize:'18px' }}>Unveil the Stories Behind the Landmarks</strong></li>
											<span>Our city tours are more than just sightseeing. Each landmark has a story, and our knowledgeable guides are passionate about bringing these tales to life. From the sacred ghats along the Ganges to the narrow lanes dotted with centuries-old temples, our tours offer deep insights into the significance of each site, enriching your understanding of Varanasi's spiritual and historical importance.</span><br/><br/>
											<li><i className="fa-regular fa-square-check mr-4 mb-2"></i><strong style={{ color: 'black', fontSize:'18px' }}>Explore Like a Local, with Locals</strong></li>
											<span>Immerse yourself in the true essence of Varanasi by touring with local guides. Our guides are residents who share their own stories and secrets of the city, offering a more intimate and personal view of their hometown. This approach allows you to experience Varanasi not as a tourist, but as an honoured guest, welcomed into the heart of the community.</span><br/><br/>
											<li><i className="fa-regular fa-square-check mr-4 mb-2"></i><strong style={{ color: 'black', fontSize:'18px' }}>Tailored Experiences to Suit Your Style</strong></li>
											<span>Recognizing that each traveller’s interests are unique, we offer customized tours that cater to your specific preferences. Whether you're looking to focus on spiritual practices, architectural beauty, culinary delights, or photographic opportunities, we can adjust the itinerary to suit your personal interests, ensuring a tour that is as rewarding as it is personal.</span><br></br><br></br>
										</ul>
                                    </div>
                                </div>
                                <div className="new-text">Join us on our Exclusive City Tour and let us show you the Varanasi that only locals know. This experience is designed to be a deep dive into the city's culture, history, and everyday life, promising not just memories but a truly transformative experience.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Combined Parent Component rendering both sections
export default function TravelCityTour() {
    return (
        <>
            <TravelIdeasSection />
            <Citytour />
        </>
    );
}
