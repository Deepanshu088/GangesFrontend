import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function Restaurant() {
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
                      <div className="text">Step into a world of culinary delight at our restaurant, where exceptional food meets unparalleled hospitality. At our pure Vegetarian restaurant, every dish is an art form, blending traditional local flavours with exciting global influences to create a menu that both surprises and satisfies.Our skilled chefs focus on the freshest ingredients, delivering a menu that not only excites the palate but also supports health and well-being. </div>
                      <div className="healthy-food">
                        <div className="food-list">
                          <h4 className="title">Restaurant</h4>
                          <ul>
											<li><i className="fa-regular fa-square-check mr-4 mb-2"></i><strong style={{ color: 'black', fontSize:'18px' }}>Culinary Excellence and Innovation</strong></li>
											<span>Dive into a menu where each item is a testament to culinary craftsmanship. From local specialties that celebrate Varanasi’s rich food heritage to international dishes reimagined with a local touch, our restaurant offers a dining experience that is both diverse and delightful.</span><br/><br/>
											<li><i className="fa-regular fa-square-check mr-4 mb-2"></i><strong style={{ color: 'black', fontSize:'18px' }}>Unmatched Dining Ambiance</strong></li>
											<span>Enjoy your meal in a setting that perfectly balances elegance with comfort. Our restaurant’s ambiance is to enhance your dining experience, featuring an inviting atmosphere that combines contemporary design with traditional touches. Whether you are enjoying a quiet dinner or celebrating a special occasion, our setting provides the perfect backdrop.</span><br/><br/>
											<li><i className="fa-regular fa-square-check mr-4 mb-2"></i><strong style={{ color: 'black', fontSize:'18px' }}>Dedicated to Health and Comfort</strong></li>
											<span>We believe that dining out should not compromise on health. That is why our menu includes a variety of healthy options, crafted using only the highest quality ingredients. Additionally, our comfortable seating arrangements ensure that your dining experience is relaxed and enjoyable.</span><br/><br/>
                      <li><i className="fa-regular fa-square-check mr-4 mb-2"></i><strong style={{ color: 'black', fontSize:'18px' }}>Enhanced with Modern Amenities</strong></li>
											<span>Stay connected with complimentary high-speed Wi-Fi, making it easy to share your moments of joy or catch up on work. Our restaurant also boasts a spacious dining area, accommodating both intimate gatherings and larger parties with ease.</span><br/><br/>
                      <li><i className="fa-regular fa-square-check mr-4 mb-2"></i><strong style={{ color: 'black', fontSize:'18px' }}>A Broad Spectrum of Choices</strong></li>
											<span>With a wide range of dishes available, every visit can be a new culinary adventure. Our menu is designed to cater to various dietary preferences and palates, ensuring there is something to tantalize everyone.</span><br/><br/>
										</ul>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </section>

          
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="FEGSV2bMNxA" onClose={() => setOpen(false)} />
        
        </>
    )
}
