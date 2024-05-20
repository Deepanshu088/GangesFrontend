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
                      <div className="text">Step into a world of culinary delight at our restaurant, where exceptional food meets unparalleled hospitality. At our pure Vegetarian restaurant, every dish is an art form, blending traditional local flavours with exciting global influences to create a menu that both surprises and satisfies.Our skilled chefs focus on the freshest ingredients, delivering a menu that not only excites the palate but also supports health and well-being.</div>
                    </div>
                    <Link href="/page-restaurant" className="theme-btn btn-style-one read-more">MAKE BOOKING</Link>
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
                      <div className="text">Embark on a captivating journey across the glistening waters that frame our breath-taking hotel with our custom-designed Boat Booking Service. Whether you are drawn to the quietude of a sunset sail, eager to explore the lesser-known treasures of the River Ganges or looking to indulge in the luxury of a private yacht excursion, our service is meticulously designed to meet every nautical whim.</div>
                    </div>
                    <Link href="/page-boatbooking" className="theme-btn btn-style-one read-more">Discover More</Link>
                    <figure className="image-2"><img src="images/resource/icon-2.png" alt=""/></figure>
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-4">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="image overlay-anim"><img src="/images/home/boat2.jpg" alt=""/></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
