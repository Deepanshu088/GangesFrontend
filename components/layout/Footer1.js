import Link from 'next/link';
import React from 'react';
import BackToTop from '../elements/BackToTop'
import Image from 'next/image'
import LogoDark from '../../public/images/icons/Logo-Black.png';
const Footer1 = () => {
	return (
		<>
			<footer className="main-footer footer-style-one">

				<div className="widgets-section">
					<div className="auto-container">
						<div className="row">
							<div className="footer-column col-xl-4 col-sm-6">
								<div className="footer-widget about-widget">
									<div className="logo w-60">
										<Image src={LogoDark} alt="Hoexr" title="Hoexr" className='w-full h-auto' />
									</div>
									<div className="text"> Palace on Ganges has coined all distinct cultures of India and accordingly altogether twenty four rooms
										under one grand heritage hotel roof are designed
										and dedicated to each of those provincial culture.</div>
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

							<div className="footer-column col-lg-2 col-sm-6 mb-0">
								<div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
									<h4 className="widget-title">Quick Links</h4>
									<div className="widget-content">
										<ul className="user-links">
											<li><Link href="/"><i className="fa-solid fa-crosshairs"></i>Home</Link></li>
											<li><Link href="/our-rooms"><i className="fa-solid fa-crosshairs"></i>Rooms</Link></li>
											<li><Link href="/page-cabbooking"><i className="fa-solid fa-crosshairs"></i>Cab Srvices</Link></li>
											<li><Link href="/page-boatbooking"><i className="fa-solid fa-crosshairs"></i>Boat Booking</Link></li>
											<li><Link href="/page-about"><i className="fa-solid fa-crosshairs"></i>About Hotel</Link></li>
											<li><Link href="#"><i className="fa-solid fa-crosshairs"></i>Contact</Link></li>
										</ul>
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
														+91-9984826656, +91-9198113594</Link>
												</div>
												<div className="post-info text-fontGray">+91-8765817841</div>
												<div className="post-info text-fontGray"><i className="fa fa-envelope"></i> <a href="mailto:info@palaceonganges.com" className='text-fontGray'>info@palaceonganges.com</a></div>
												<div className="post-info"><i className="fas fa-location"></i> B-1/158, Assighat,<br />Varanasi. Pin 221001</div>
											</div>
										</article>
									</div>
								</div>
							</div>

							<div className="footer-column col-lg-3 col-sm-6">
								<div className="footer-widget news-widget wow fadeInLeft" data-wow-delay="400ms">
									<h4 className="widget-title">Newsletter</h4>
									<div className="subscribe-form-three">
										<form method="post" action="#">
											<div className="form-group">
												<input type="email" name="email" className="email" placeholder="Email Address" required="" />
												<button type="button" className="theme-btn btn-style-one"><span className="btn-title"><i className="fa fa-paper-plane"></i></span></button>
											</div>
										</form>
									</div>
									<div className="text"><i className="fa-regular fa-circle-check"></i>I agree to all terms and policies</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<div className="auto-container">
						<div className="inner-container">
							<div className="copyright-text">&copy; Palace on Ganges, Varanasi</div>
							<BackToTop />
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer1;