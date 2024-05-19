'use client'
import Link from "next/link"
import { useSelector } from "react-redux"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 8500,
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
  }
}

export default function Slider1({ bannerImgs }) {
	return (
    <>
      <section className="banner-section">
        <Swiper {...swiperOptions} className="banner-slider owl-carousel owl-theme default-navs">
          {/* Slide Item */}
          {
            bannerImgs && bannerImgs.length && bannerImgs.map(item =>
              <SwiperSlide className="banner-slide slide-item">
                <figure className="image"><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item}`} alt="" /></figure>
                <div className="content-box">
                  <span className="sub-title" data-animation-in="fadeInUp" data-delay-in="0.1">unique place and luxury hotel</span>
                  <h1 data-animation-in="fadeInUp" data-delay-in="0.3">LUXURY HERITAGE <br />EXPERIENCE</h1>
                  <Link href="/our-rooms" className="btn" data-animation-in="fadeInUp" data-delay-in="0.5">OUR ROOMS</Link>
                </div>
              </SwiperSlide>
            )
          }
          {/* <SwiperSlide className="banner-slide slide-item">
            <figure className="image"><img src="images/banner/banner-6.jpg" alt="" /></figure>
            <div className="content-box">
              <span className="sub-title" data-animation-in="fadeInUp" data-delay-in="0.1">unique place and luxury hotel</span>
              <h1 data-animation-in="fadeInUp" data-delay-in="0.3">LUXURY HERITAGE <br />EXPERIENCE</h1>
              <Link href="/our-rooms" className="btn" data-animation-in="fadeInUp" data-delay-in="0.5">OUR ROOMS</Link>
            </div>
          </SwiperSlide> */}
          {/* Slide Item */}
          {/* <SwiperSlide className="banner-slide slide-item">
            <figure className="image"><img src="images/banner/banner-4.jpg" alt=""/></figure>
            <div className="content-box">
              <span className="sub-title" data-animation-in="fadeInUp" data-delay-in="0.1">unique place and luxury hotel</span>
              <h1 data-animation-in="fadeInUp" data-delay-in="0.3">LUXURY HERITAG <br/>EXPERIENCE</h1>
              <Link href="/our-rooms" className="btn" data-animation-in="fadeInUp" data-delay-in="0.5">OUR ROOMS</Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="banner-slide slide-item">
            <figure className="image"><img src="images/banner/banner-5.jpg" alt=""/></figure>
            <div className="content-box">
              <span className="sub-title" data-animation-in="fadeInUp" data-delay-in="0.1">unique place and luxury hotel</span>
              <h1 data-animation-in="fadeInUp" data-delay-in="0.3">LUXURY HERITAG <br/>EXPERIENCE</h1>
              <Link href="/our-rooms" className="btn" data-animation-in="fadeInUp" data-delay-in="0.5">OUR ROOMS</Link>
            </div>
          </SwiperSlide> */}
          <div className="owl-nav" style={{ zIndex: "999" }}>
            <div className="owl-prev h1p">
              <span className="fa fa-long-arrow-alt-left" />
            </div>
            <div className="owl-next h1n">
              <span className="fa fa-long-arrow-alt-right" />
            </div>
          </div>
        </Swiper>
      </section>
    </>
  )
}
