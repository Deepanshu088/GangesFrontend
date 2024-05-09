import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Link from 'next/link';

// SPECIALITY component
export default function SPECIALITY() {
  const [isOpen, setOpen] = useState(false)
    
  return (
    <>
      <section className="food-section pt-0">
        <div className="auto-container">
          <div className="row">
            <div className="image-column col-xl-4 col-lg-4">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="image wow fadeInUp">
                    <img src="images/feature-2.jpg" alt="" style={{ width: '100%', height: '100%' }} />
                  </figure>
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
                <div className="sec-title"> 
                  <h2>Palace on Ganges A Grand Heritage Hotel in Varanasi</h2>
                  <div className="text" > Benares is no ordinary city. It is Varanasi today, and yet, it is also Kashi — the oldest living city in the history of mankind<br/><br/>
                  The quintessential India<br/>The Living Orient <br/><br/>
                  Should it be any wonder that the city enfolds a little of everything that is Indian?
                  This is what the city offers to the visitor from all over the world.
                  The essence of India…<br/><br/>
                  On the banks of the Holy Ganga river, the glory of India awaits you In the majestic and truly unique<br/><br/>
                  </div>
                  <span>Palace on Ganges <br/>A Grand Heritage Hotel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="FEGSV2bMNxA" onClose={() => setOpen(false)} />
      {/* Add Services component here */}
      <Services />
      {/* Add Testimonial2 component here */}
      <Testimonial2 />
    </>
  );
}

// Services component
function Services() {
  const data = [    
    {
      icon: "flaticon-bed-2",
      title: "Room Service",
      subtitile: "Indulge in comfort with our convenient room service, delivering delicious meals right to your door."
    },
    {
      icon: "flaticon-car",
      title: "Pick Up & Drop",
      subtitile: "Enjoy hassle-free travel with our convenient pick and drop facility, ensuring a seamless stay from start to finish."
    },
    {
      icon: "flaticon-wifi",
      title: "Free Wifi",
      subtitile: "Stay connected with complimentary high-speed Wi-Fi throughout our hotel."
    },
    {
      icon: "flaticon-breakfast",
      title: "Restaurant",
      subtitile: "Savor exquisite flavors and impeccable service at our restaurant, where every meal is a culinary delight."
    },
    {
      icon: "far fa-water",
      title: " Ganga View",
      subtitile: "Immerse yourself in the spiritual ambiance of Varanasi with our rooms offering stunning views of the sacred Ganges River, creating an unforgettable experience for your stay"
    },
    {
      icon: "flaticon-car",
      title: "Paid Parking Space",
      subtitile: "Convenience meets security with our paid parking space, ensuring peace of mind during your stay."
    }
  ];

  return (
    <section className="service-section">
      <div className="auto-container">
        <div className="sec-title text-center wow fadeInUp">
          <span className="sub-title">OUR SERVICES</span>
          <h2>Hotel Facilities</h2>
        </div>
        <div className="row wow fadeInUp">
          {data.map((item, i) => (
            <div key={i} className="service-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box wow fadeIn">
                <div className="icon-box wow fadeInUp"><i className={item.icon}></i></div>
                <div className="content-box">
                  <h4 className="title"><Link href="page-service-details">{item.title}</Link></h4>
                  <div className="text">{item.subtitile}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial2 component
function Testimonial2() {
  const data = [    
    {
      title: "Jina Nillson",
      designation: "Founder of Webflex",
      subtitile: "A stay at this hotel is like a dream - the Ganges view, impeccable service, and luxurious rooms made my trip to Varanasi unforgettable."
    },
    {
      title: "Donald Browfish",
      designation: "CEO",
      subtitile: "The hotel's charm, coupled with its stunning Ganges view, created a magical experience. The staff's hospitality and attention to detail were exceptional."
    },
    {
      title: "Robotor Doses",
      designation: "MANAGER",
      subtitile: "Staying here was a highlight of my Varanasi trip. The Ganges view from my room was breathtaking, and the hotel's ambiance and service were top-notch."
    }
  ];

  return (
    <section className="client-section pb-80">
      <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/3.jpg)' }}></div>
      <div className="auto-container">
        <div className="sec-title light text-center wow fadeInUp">
          <span className="sub-title">What says for customer</span>
          <h2>What Client's Say?</h2>
        </div>
        <div className="row wow fadeInUp">
          {data.map((item, i) => (
            <div key={i} className="client-block col-lg-4 col-sm-6">
              <div className="inner-box wow fadeInLeft">
                <h4 className="title">{item.title}</h4>
                <span>{item.designation}</span> <br/><br/>
                <div className="text">{item.subtitile}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
