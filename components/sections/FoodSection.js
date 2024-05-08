import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function FoodSection() {
  const [isOpen, setOpen] = useState(false)
    
    return (
        <>
          <section className="food-section pt-0">
            <div className="auto-container">
              <div className="row">
                <div className="image-column col-xl-4 col-lg-4">
                  <div className="inner-column">
                    <div className="image-box">
                    <img src="images/feature-2.jpg" alt="" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <a onClick={() => setOpen(true)} className="play-now-two"><i className="icon fa fa-play" aria-hidden="true"></i><span className="ripple"></span></a>
                    <div className="quote-box">
                      <div className="icon-box"><i className="flaticon-quotation"></i></div>
                      <div className="text">Great hospitality is the key to Pride of Britain’s longstanding reputation for excellence.</div>
                    </div>
                  </div>
                </div>
                <div className="content-column col-xl-8">
                  <div className="inner-column">
                    <div className="sec-title"> <span className="sub-title">EAT FROM THE LAND</span>
                      <h2>Enjoy Food and Even<br/>
                        Better Hospitality</h2>
                      <div className="text">Embark on a culinary adventure at our restaurant, where each dish is crafted to perfection, combining local flavors with global inspiration. Our chefs are dedicated to creating a menu that tantalizes the taste buds and leaves a lasting impression. Experience exceptional service and a welcoming atmosphere that ensures an unforgettable dining experience. </div>
                      <div className="healthy-food">
                        <div className="food-list">
                          <h4 className="title">Restaurant</h4>
                          <ul>
                            <li><i className="fa-regular fa-square-check"></i>Healthy Food</li>
                            <li><i className="fa-regular fa-square-check"></i>Best Ambience Restaurent</li>
                            <li><i className="fa-regular fa-square-check"></i>Comfortable seating arrangements</li>
                           
                          </ul>
                        </div>
                        <div className="food-list two">

                          <ul>
                            <li><i className="fa-regular fa-square-check"></i> Free Wifi</li>
                            <li><i className="fa-regular fa-square-check"></i>Dining Area</li>
                            <li><i className="fa-regular fa-square-check"></i>Wide range of dishes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    )
}
