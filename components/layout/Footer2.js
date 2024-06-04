import Link from 'next/link';
import React from 'react';
import BackToTop from '../elements/BackToTop'
import Image from 'next/image'
import LogoDark from './../../public/images/logo-2.png';
const Footer1 = () => {
	return (
		<>
			<footer className="main-footer footer-style-two">

				<div className="widgets-section">
					<div className="auto-container">
						<div className="row">
							<div className="footer-column col-xl-3 col-sm-6">
								<div className="footer-widget about-widget">
									<div className="logo">
										<Link href="/"><Image src={LogoDark} title='Hoexr' alt="" /></Link>
									</div>
									<div className="text">Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan volutpat.</div>
									<ul className="social-icon-two">
										<li>
											<Link href="#"><i className="fab fa-twitter"></i></Link>
										</li>
										<li>
											<Link href="#"><i className="fab fa-facebook"></i></Link>
										</li>
										<li>
											<Link href="#"><i className="fab fa-pinterest"></i></Link>
										</li>
										<li>
											<Link href="#"><i className="fab fa-instagram"></i></Link>
										</li>
									</ul>
								</div>
							</div>

							<div className="footer-column col-lg-3 col-sm-6 mb-0">
								<div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
									<h4 className="widget-title">Quick Links</h4>
									<div className="widget-content">
										<ul className="user-links">
											<li><Link href="/"><i className="fa-solid fa-crosshairs"></i>Home</Link></li>
											<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Suites</Link></li>
											<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Restaurant</Link></li>
											<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>News</Link></li>
											<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>About Hotel</Link></li>
										</ul>
										<ul className="user-links">
											<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Rooms</Link></li>
											<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Wellness</Link></li>
											<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Spa</Link></li>
											<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Gallery</Link></li>
											<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Contact</Link></li>
										</ul>
									</div>
								</div>
							</div>

							<div className="footer-column col-lg-3 col-sm-6">
								<div className="footer-widget news-widget wow fadeInLeft" data-wow-delay="300ms">
									<h4 className="widget-title">Latest News</h4>
									<div className="news-info">
										<figure className="image overlay-anim"><Link href="#"><img src="images/resource/news-info-1.jpg" alt="" /></Link></figure>
										<h6 className="title"><Link href="#" title="">Quisque at Felis <br />Port Titordga</Link></h6>
										<span className="date">14 May 2023</span>
									</div>
									<div className="news-info">
										<figure className="image overlay-anim"><Link href="#"><img src="images/resource/news-info-2.jpg" alt="" /></Link></figure>
										<h6 className="title"><Link href="#" title="">Tips For Picking <br />Vacation</Link></h6>
										<span className="date">14 May 2023</span>
									</div>
								</div>
							</div>
							<div className="footer-column col-lg-3 col-sm-6">
								<div className="footer-widget info-widget wow fadeInLeft" data-wow-delay="300ms">
									<h4 className="widget-title">Information</h4>
									<div className="widget-content">

										<article className="recent-post">
											<div className="inner">
												<div className="post-info"><i className="fas fa-phone"></i>
													<Link href="tel:+7408423504" className="text-fontGray">+91-7408423504, +91-7408423511,
														+91-9984826656, +91-9198113594</Link></div>
												<div className="post-info text-fontGray">+91-8765817841</div>
												<div className="post-info"><i className="fa fa-envelope"></i><a href="mailto:info@palaceonganges.com" className='text-fontGray'>info@palaceonganges.com</a></div>
												<div className="post-info"><i className="fas fa-location"></i> 1247/Plot No. 39, 15th Phase, <br />United States of America</div>
											</div>
										</article>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<div className="auto-container">
						<div className="inner-container">
							<div className="copyright-text">&copy; Copyright Reserved by kodesolution.com</div>
							<BackToTop />
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer1;