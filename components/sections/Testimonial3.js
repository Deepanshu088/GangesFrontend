import Link from 'next/link';
import React from 'react';

export default function Testimonial2() {
    
    const data = [    
        {
           
            title: "Jina Nillson",
            designation: "Founder of Webflex",
            subtitile: " A stay at this hotel is like a dream - the Ganges view, impeccable service, and luxurious rooms made my trip to Varanasi unforgettable."
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
        <>
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
                            </div>))}
                        </div>
                </div>
            </section>
        </>
    )
}
