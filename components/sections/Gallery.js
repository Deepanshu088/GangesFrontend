import Link from 'next/link';
import React from 'react';

export default function GALLERY() {
    
    return (
        <>
        <section className="rooms-section pb-100">
          <div className="auto-container">
            <div className="row">

              <div className="room-block col-lg-6 col-md-6 col-sm-12">
                  <div className="image-box">
                    <figure className="image-2 overlay-anim"><img src="images/room-1.jpg" alt=""/></figure>
                </div>
              </div>

              <div className="room-block col-lg-6 col-md-6 col-sm-12">
                <div className="image-box">
                    <figure className="image-2 overlay-anim"><img src="images/room-2.jpg" alt=""/></figure>
                </div>
              </div>

              <div className="room-block col-lg-3 col-md-6 col-sm-12">
                <div className="image-box">
                    <figure className="image-2 overlay-anim"><img src="images/room-3.jpg" alt=""/></figure>
                  </div>
              </div>

              <div className="room-block col-lg-6 col-md-6 col-sm-12">
               <div className="image-box">
                    <figure className="image-2 overlay-anim"><img src="images/room-4.jpg" alt=""/></figure> 
                </div>
              </div>

              <div className="room-block col-lg-3 col-md-6 col-sm-12">
                  <div className="image-box">
                      <figure className="image-2 overlay-anim"><img src="images/room-5.jpg" alt=""/></figure>
                    </div>
                  </div>
            </div>
          </div>
        </section>
        </>
    )
}
