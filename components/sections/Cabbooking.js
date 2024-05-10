import React from 'react';
import Link from 'next/link';

export default function Cabbooking() {
	return (
		<section className="booking-details-section">
			<div className="container pt-0 pb-0 mb-0">
				<div className="row">
					<div className="image-side col-xl-4 col-lg-4">
						<div className="inner-column">
							<div className="imagecorner">
								<figure className="new-image wow fadeInUp"><img src="images/cab3.jpg" alt="" /></figure>
							</div>
							<div className="new-quote-box">
								<div className="new-icon-box"><i className="flaticon-quotation"></i></div>
								<div className="new-text">Great hospitality is the key to our longstanding reputation for excellence.</div>
							</div>
						</div>
					</div>
					<div className="content-side col-xl-8">
						<div className="inner-column pl-8 pt-6">
							<div className="new-sec-title">
								<span className="new-sub-title"></span>
								<h3>Our Premier Cab Booking Service</h3>
								<div className="new-text">Welcome to hassle-free travel during your stay at our hotel! We understand that
									getting around can be one of the biggest concerns during your travels.<br /><br />

									That's why we're delighted to offer our guests an exclusive Cab Booking Service designed to make your
									local transportation seamless and stress-free.</div>
								<div className="new-healthy-food mt-4">
									<div className="new-food-list">
										<ul>
											<li><i className="fa-regular fa-square-check mr-4 mb-2"></i>Safety and Comfort First</li>
											<li><i className="fa-regular fa-square-check mr-4 mb-2"></i>24/7 Availability</li>
											<li><i className="fa-regular fa-square-check mr-4 mb-2"></i>Personalized Journeys</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

