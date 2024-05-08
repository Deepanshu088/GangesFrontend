import Link from 'next/link';
import React from 'react';

export default function Services() {
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
            title: "Ganga View",
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
            <section className="service-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">OUR SERVICES</span>
                        <h2>Hotel Facilities</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                            <div key={i} className="service-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <div className="icon-box"><i className={item.icon}></i></div>
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
        </>
    )
}
