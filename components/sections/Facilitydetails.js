import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import Link from 'next/link';

// SPECIALITY component
export default function Facilitydetails() {
  const [isOpen, setOpen] = useState(false)
    
  return (
    <>
      <section className="food-section pt-0">
        
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
      subtitile: "Experience the epitome of convenience with our room service. Whether you're craving a late-night snack or a sumptuous breakfast in bed, our menu offers a wide range of local and international delicacies. Our prompt and discreet service ensures that your dining experience is both comfortable and enjoyable, without ever leaving the privacy of your room."
    },
    {
      icon: "flaticon-car",
      title: "Pick Up & Drop",
      subtitile: "Travel effortlessly with our exclusive pick-up and drop-off service. From the moment you arrive in Varanasi, be greeted by our professional chauffeur at the airport or railway station. Enjoy a smooth ride in our comfortable vehicles. This service is designed to provide a seamless transition from your travel to our hotel, ensuring a stress-free start and end to your stay. "
    },
    {
      icon: "flaticon-wifi",
      title: "Complimentary Wi-Fi",
      subtitile: "Stay connected with the world during your stay at the Palace on Ganges with our complimentary high-speed Wi-Fi. Accessible throughout the hotel, our reliable internet service allows you to keep in touch with loved ones, manage business communications, or plan your day’s adventures in Varanasi. Whether in your room or lounging by our terraces, connectivity is just a click away."
    },
    {
      icon: "flaticon-breakfast",
      title: "Restaurant",
      subtitile: "Dine at our in-house restaurant where each meal is a celebration of rich, culinary craftsmanship. Our Pure Vegetarian menu features a fusion of traditional Indian flavours and contemporary international dishes, all prepared with the freshest local ingredients. The restaurant boasts a stunning ambiance with our Indoor Dinning, providing not just a meal, but a memorable dining experience."
    },
    {
      icon: "far fa-water",
      title: "River Ganga View",
      subtitile: "Immerse yourself in the spiritual heart of Varanasi with our rooms offering unobstructed views of the Ganges River. These rooms provide a serene space to witness the vibrant cultural activities and rituals performed on the ghats. It is an ideal spot for meditation or simply to relax and absorb the sacred atmosphere, making your stay truly transformative."
    },
    {
      icon: "flaticon-car",
      title: "Paid Parking Space",
      subtitile: "Enjoy peace of mind with our secure paid parking facilities. Located in front of the hotel premises, our parking is monitored around the clock, ensuring the safety of your vehicle. This convenient service allows you to explore Varanasi without any concerns about the security of your car, giving you more freedom and ease during your visit.."
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
    <section className="client-section">
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
