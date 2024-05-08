'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        // spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

				breakpoints:{
            320: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            575: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            767: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            991: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            1199: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
        }
    };

export default function Testimonial1() {
    return (
        <>

            <section className="testimonial-section">
                <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/testi-bg.jpg)' }}></div>
                <div className="auto-container">
                    <div className="row">
                        {/* Title Column */}
                        <div className="col-lg-4 hide-on-tablet"></div>
                        {/* Testimonial Column */}
                        <div className="testimonial-column col-lg-8 col-md-12">
                            <div className="inner-column">
                                <div className="sec-title light wow fadeInUp">
                                    <span className="sub-title">What says for customer</span>
                                    <h2> What Client's Say?</h2>
                                </div>
                                <Swiper {...swiperOptions} className="testimonial-slider owl-carousel default-navs">
                                    {/* Testimonial Block */}
                                    <SwiperSlide className="testimonial-slide">
                                        <div className="content-box">
                                            
                                            <div className="info-box">
                                                <ul className="rating-list" data-animation-in="fadeInUp" data-delay-in="0.2">
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                </ul>
                                                <div className="text" data-animation-in="fadeInUp" data-delay-in="0.3">"I had an incredible stay at this heritage hotel! The blend of modern amenities with historic charm was captivating. The staff's hospitality was outstanding, and the dining experience was exceptional. I highly recommend this hotel to anyone looking for a unique and luxurious stay."</div>
                                                <div className="auther-info" data-animation-in="fadeInUp" data-delay-in="0.4">
                                                <h4 className="title">Jackson Smith</h4>
                                                <span className="designation">Guest Review</span>
                                                </div>
                                                <div className="icon-box" data-animation-in="fadeInUp" data-delay-in="0.5"><figure className="image"><img src="images/resource/comas.png" alt=""/></figure></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Testimonial Block */}
                                    <SwiperSlide className="testimonial-slide">
                                        <div className="content-box">
                                        <div className="info-box">
                                            <ul className="rating-list" data-animation-in="fadeInUp" data-delay-in="0.2">
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            </ul>
                                            <div className="text" data-animation-in="fadeInUp" data-delay-in="0.3">"I had an incredible stay at this heritage hotel! The blend of modern amenities with historic charm was captivating. The staff's hospitality was outstanding, and the dining experience was exceptional. I highly recommend this hotel to anyone looking for a unique and luxurious stay."</div>
                                            <div className="auther-info" data-animation-in="fadeInUp" data-delay-in="0.4">
                                            <h4 className="title">Jackson Smith</h4>
                                            <span className="designation">Guest Review</span>
                                            </div>
                                            <div className="icon-box" data-animation-in="fadeInUp" data-delay-in="0.5"><figure className="image"><img src="images/resource/comas.png" alt=""/></figure></div>
                                        </div>
                                        </div>
                                    </SwiperSlide>
                                    {/* Testimonial Block */}
                                    <SwiperSlide className="testimonial-slide">
                                        <div className="content-box">
                                            <div className="info-box">
                                                <ul className="rating-list" data-animation-in="fadeInUp" data-delay-in="0.2">
                                                    <li><i className="fa-solid fa-star"></i></li>
                                                    <li><i className="fa-solid fa-star"></i></li>
                                                    <li><i className="fa-solid fa-star"></i></li>
                                                    <li><i className="fa-solid fa-star"></i></li>
                                                    <li><i className="fa-solid fa-star"></i></li>
                                                </ul>
                                                <div className="text" data-animation-in="fadeInUp" data-delay-in="0.3">"I had an incredible stay at this heritage hotel! The blend of modern amenities with historic charm was captivating. The staff's hospitality was outstanding, and the dining experience was exceptional. I highly recommend this hotel to anyone looking for a unique and luxurious stay."</div>
                                                <div className="auther-info" data-animation-in="fadeInUp" data-delay-in="0.4">
                                                    <h4 className="title">Jackson Smith</h4>
                                                    <span className="designation">Guest Review</span>
                                                </div>
                                                <div className="icon-box" data-animation-in="fadeInUp" data-delay-in="0.5"><figure className="image"><img src="images/resource/comas.png" alt=""/></figure></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
