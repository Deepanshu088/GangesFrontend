import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function MD() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            <section className="about-section">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-xl-6 col-lg-6 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">PALACE ON GANGES</span>
                                    <div className='text-5xl font-gilda text-black'>Message from MD's desk</div>
                                    <div className="text"> It is with great pleasure and pride that I extend a warm welcome to each and every one of you to our esteemed heritage hotel. As you step through our doors, you are not only entering a place of historical significance but also a sanctuary of unparalleled hospitality and service.<br /><br />
                                        At the Palace on Ganges, we understand the importance of creating memorable experiences for our guests. Whether you are here for leisure or business, our commitment to providing you with the best-in-class service remains unwavering. From the moment you arrive until the time of your departure, our dedicated team is at your service to ensure that your stay exceeds all expectations.<br /><br />
                                        Nestled within the walls of this historic building are modern amenities and luxurious accommodations, meticulously designed to cater to every aspect of your stay to elevate your experience.<br /><br />
                                        As guardians of this cherished heritage, we take great pride in preserving its rich legacy while embracing the comforts of contemporary hospitality. Allow us to be your hosts as you embark on a journey through time, where the charm of yesteryears seamlessly blends with the sophistication of today.<br /><br />
                                        Once again, on behalf of the entire team at the Palace on Ganges, I extend a heartfelt welcome to our distinguished guests. Your presence enriches our legacy, and we are honored to be a part of your unforgettable memories.<br /><br />
                                    </div>
                                    <h4>Warm Regards,<br />Pradeep Narayan Singh</h4>
                                    <span>Managing Director <br />THE PALACE ON GANGES</span>
                                </div>


                            </div>
                        </div>

                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-6">
                            <div class="inner-column wow fadeInLeft">
                                <figure class="image-1 overlay-anim wow fadeInUp"><img src="images/resource/about1-1.jpg" alt="" /></figure>
                                <figure class="image-2 overlay-anim wow fadeInLeft"><img src="images/md.png" height="250px;" width="250px" alt="" /></figure>
                                <figure class="image-4 overlay-anim wow fadeInLeft"><img src="images/resource/icon-1.png" alt="" /></figure>
                                <figure class="image-5 bounce-y overlay-anim wow fadeInLeft"><img src="images/resource/icon-6.png" alt="" /></figure>
                                <div class="btn-box">
                                    <a href="https://www.youtube.com/watch?v=FEGSV2bMNxA" class="play-now-two"
                                        data-fancybox="gallery" data-caption>
                                        <i class="icon fa fa-play" aria-hidden="true"></i>
                                        <span class="ripple"></span>
                                    </a>
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
