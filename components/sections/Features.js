import Link from 'next/link';
import React from 'react';

export default function Features() {
    
    return (
        <>
        <section className="feature-section">
          <div className="auto-container">
            <div className="row feature-row g-0 wow slideInUp" data-wow-delay="100ms">
              <div className="image-column col-lg-4">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="image overlay-anim"><img src="images/feature-2.jpg" alt=""/></figure>
                  </div>
                </div>
              </div>
              <div className="content-column col-lg-8" >
                <div className="inner-column">
                  <div className="content-box">
                    <div className="sec-title">
                      <span className="sub-title">Divine Tour</span>
                      <h2>The Restaurant</h2>
                      <div className="text">Indulge in a culinary journey at our restaurant, where every dish is a masterpiece of flavor and presentation. Our chefs skillfully blend local ingredients with global influences to create a menu that delights the senses. Enjoy impeccable service and a warm ambiance that sets the stage for a memorable dining experience..</div>
                    </div>
                    <Link href="/room-details" className="theme-btn btn-style-one read-more">MAKE BOOKING</Link>
                    <figure className="image-2"><img src="images/resource/icon.png" alt=""/></figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="row feature-row g-0 wow slideInUp" data-wow-delay="200ms">
              <div className="content-column col-lg-8">
                <div className="inner-column">
                  <div className="content-box">
                    <div className="sec-title">
                      <span className="sub-title">DISCOVER</span>
                      <h2>Boating Facilities</h2>
                      <div className="text">Immerse yourself in the spiritual aura of Varanasi with our boating facility on the Ganges. Sail along the sacred river, witnessing ancient ghats and colorful ceremonies. Our boats offer a unique perspective of this holy city, creating unforgettable memories of your Varanasi experience.</div>
                    </div>
                    <Link href="/room-details" className="theme-btn btn-style-one read-more">Discover More</Link>
                    <figure className="image-2"><img src="images/resource/icon-2.png" alt=""/></figure>
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-4">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="image overlay-anim"><img src="images/boating.jpg" alt=""/></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
