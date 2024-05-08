import React from 'react';
import Link from 'next/link';

// Define the TravelIdeasSection component
function TravelIdeasSection() {
    return (
        <section className="travel-ideas-section pt-0 pb-0 p-relative">
            <div className="container">
                <div className="section-title center-align mb-6">
                    <h2 style={{ fontSize: '30px', textAlign: 'center' , marginTop:'-150px'}}>Our Specialization with Your Travel Idea</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="travel-idea-item">
                            <img src="images/11.jpg" alt="Varanasi Special Tour Package" />
                            <h4 className="travel-idea-title"><a href="#">Varanasi Special Tour Package</a></h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="travel-idea-item">
                            <img src="images/12.jpg" alt="Online Aarti, Pooja Services" />
                            <h4 className="travel-idea-title"><a href="#">Online Aarti, Pooja Services</a></h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="travel-idea-item">
                            <img src="images/13.jpg" alt="Dev Deepawali Tour Package" />
                            <h4 className="travel-idea-title"><a href="#">Dev Deepawali Tour Package</a></h4>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="travel-idea-item">
                            <img src="images/14.jpg" alt="Boat Ride in Varanasi Service" />
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
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="images/city05.jpeg" alt="Cab" style={{ width: '70%', height: 'auto' }} /><br/><br/>
                </div>
                <div className="col-md 6">
                    <h2 style={{ fontSize: '24px' }}>Our Exclusive City Tour</h2>
                    <p>Step into the vibrant pulse of City and uncover its hidden treasures with our captivating City Tour. Whether you're a history buff, a culinary explorer, or simply seeking to soak in the sights and sounds of this bustling metropolis, our expertly curated tour promises an unforgettable journey through the city's rich tapestry of culture, history, and flavors.</p>
                    <ul>
                        <li><i className="fa-regular fa-square-check"></i> Unveil the Stories Behind the Landmarks</li>
                        <li><i className="fa-regular fa-square-check"></i> Explore Like a Local, with Locals</li>
                        <li><i className="fa-regular fa-square-check"></i> Tailored Experiences to Suit Your Style</li><br/><br/>
                    </ul>
                </div>
            </div>
        </div>
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
