import Link from 'next/link';
import React from 'react';

export default function Services2() {
    
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
        <>
            <section className="service-section-two">
                <div className="auto-container">
                    <div className="sec-title text-center wow fadeInUp">
                        <span className="sub-title">OUR SERVICES</span>
                        <h2>Hotel Facilities</h2>
                    </div>
                        <div className="row wow fadeInUp">
                        {data.map((item, i) => (
                            <div key={i} className="service-block-two col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box wow fadeInLeft">
                              <div className="image-box">
                                <div className="icon-box wow fadeInUp"><i className={item.icon}></i></div>
                                <h4 className="title"><Link href="page-service-details">{item.title}</Link></h4>
                              </div>
                              <div className="content-box">
                                <div className="text">{item.subtitile}</div>
                              </div>
                            </div>
                            
                            </div>))}
                            <div className="service-block-two col-lg-4 col-sm-6">
                                <div className="inner-box-two wow fadeInLeft" data-wow-delay="600ms">
                                    <div className="image-box">
                                    <figure className="image wow fadeInUp overlay-anim"><img src="images/resource/service2-1.jpg" alt=""/></figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}
