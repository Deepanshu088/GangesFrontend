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
                                    <div className='text-5xl font-gilda text-black'>Message from The Director's Desk</div>
                                    <div className="text">  We at the Palace on Ganges are pleased and honoured to extend a cordial welcome to each distinguished guest visiting our esteemed heritage hotel. This grand establishment is not merely a site of historical importance; it represents a bastion of exceptional hospitality and bespoke service, to ensure memorable guest experiences.<br/><br/>
We are committed to providing unparalleled service, catering to both leisure and business travellers with equal fervour. From the instant of your arrival to the moment of your departure, our dedicated staff is devoted to exceeding your expectations, ensuring a stay characterized by comfort and luxury. .<br/><br/>
Encased within our historical edifice are state-of-the-art amenities and sumptuous accommodations, each designed with meticulous attention to detail to enhance your overall experience. We harmoniously blend rich historical elements with modern luxury, making every stay both splendid and effortless. .<br/><br/>
As stewards of such a treasured heritage site, we take immense pride in preserving its storied past while seamlessly integrating contemporary comforts. We invite you to embark on an enchanting journey through time with us, where the allure of antiquity meets the sophistication of the modern day. .<br/><br/>
On behalf of our entire team, we sincerely welcome all esteemed guests. Your presence not only enriches our hotel’s legacy but also inspires our continued commitment to excellence. We at the Palace on Ganges are privileged to play a part in the creation of unforgettable memories for our honoured guests. .<br/><br/>

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
                                <figure class="image-2 overlay-anim wow fadeInLeft"><img src="images/profileImages/md1.jpg" height="250px;" width="250px" alt="" /></figure>
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
