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
                                <h3>Our Exclusive City Tour</h3>
                                <div className="new-text">Step into the vibrant pulse of City and uncover its hidden treasures with our
                                    captivating City Tour.

                                    Whether you're a history buff, a culinary explorer, or simply seeking to soak in the sights and sounds
                                    of this bustling metropolis, our expertly curated tour promises an unforgettable journey through the
                                    city's rich tapestry of culture, history, and flavors.</div>
                                <div className="new-healthy-food mt-4">
                                    <div className="new-food-list">
                                        <ul>
                                            <li><i className="fa-regular fa-square-check mr-4 mb-2"></i>Unveil the Stories Behind the Landmarks</li>
                                            <li><i className="fa-regular fa-square-check mr-4 mb-2"></i>Explore Like a Local, with Locals</li>
                                            <li><i className="fa-regular fa-square-check mr-4 mb-2"></i>Tailored Experiences to Suit Your Style</li>
                                        </ul>
                                    </div>
                                </div>
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
