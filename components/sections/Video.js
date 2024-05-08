import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function Video() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <section className="video-section">
        <div className="bg bg-image" style={{ backgroundImage: 'url(images/1.jpg)' }}></div>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-9 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title-two light wow slideInUp">
                <span className="sub-title" style={{ color: 'white' }}>Promotional Video</span>
                <h2 className="sub-title" style={{ color: 'white', fontSize: '30px' }}>Experience the essence of heritage and hospitality in our captivating promotional video.</h2>
                </div>
              </div>
            </div>
            <div className="btn-column col-lg-3 col-md-12 col-sm-12 play-button-container" style={{ paddingTop: '80px' }}>
              <div className="inner-column">
                  <a onClick={() => setOpen(true)} className="play-now-two"><img src="images/icons/play.png" alt="" /><span className="ripple"></span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
    </>
  )
}
