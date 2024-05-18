import Link from 'next/link';
import React from 'react';
import RoomGallery from './RoomGallery';

const listOfImages = ["/images/room-1.jpg", "/images/rooms/room4.jpg", "/images/room-3.jpg", "/images/rooms/room1.jpg", "/images/rooms/room3.jpg"]

export default function RoomDetails({ roomDetail }) {
	const { name, longDescription, floor, coverPhoto, isBreakfast, isDinner, isRiverView, isWifi, isTelevision, isAirConditioned, isParking, customerRating, luxuryCategory, regularPrice } = roomDetail;

	return (
		<>
			<section className="blog-details pt-120 pb-120">
				<div className="auto-container">
					<div className="row">
						<div className="col-xl-8 col-lg-7">
							<div className="testimonial-block-home5 mb-50">
								<RoomGallery data={listOfImages} />
							</div>
							<div className="room-details__left">
								<div className="wrapper">
									<h3>Description of Room</h3>
									{
										longDescription ?
										<p className="text">{longDescription}</p>
										:
										<p className="text">Experience comfort and convenience in our luxurious heritage rooms. Each room is meticulously designed to offer relaxation and modern amenities, including plush bedding, a spacious work desk, and a flat-screen TV. Stay connected with high-speed Wi-Fi or unwind in the luxurious en-suite bathroom with complimentary toiletries. Enjoy a fresh cup of coffee from the in-room coffee maker or a drink from the minibar. For added convenience, our rooms offer a safe for your valuables and 24-hour room service. Whether you're traveling for business or pleasure, our rooms provide a sanctuary of comfort and style.</p>
									}
									<div className="row justify-content-center">
										<div className="col-xl-12">
											<div className="room-details__content-right mt-5">
												<div className="room-details__details-box">
													<div className="row">
														<div className="col-6 col-md-3">
															<p className="text mb-0">Rooms Bed</p>
															<h6>2 Single Bed</h6>
														</div>
														{
															floor === 3 &&
															<div className="col-6 col-md-3">
																<p className="text mb-0">View</p>
																<h6>Ganga River</h6>
															</div>
														}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="mt-16 mb-10">
									<h4>Room Facilities</h4>
									<div className="row room-facility-list">
										<div className="col-sm-6 col-xl-4">
											<div className="list-one d-flex align-items-center me-sm-4 mb-3">
												<div className="icon text-theme-color1 mr-3 flex-shrink-0"><i className="far fa-air-conditioner"></i></div>
												<h6 className="title my-auto">Air Conditionar</h6>
											</div>
										</div>
										<div className="col-sm-6 col-xl-4">
											<div className="list-one d-flex align-items-center me-sm-4 mb-3">
												<div className="icon text-theme-color1 mr-3 flex-shrink-0"><i className="far fa-parking"></i></div>
												<h6 className="title my-auto">Paid Parking</h6>
											</div>
										</div>
										<div className="col-sm-6 col-xl-4">
											<div className="list-one d-flex align-items-center me-sm-4 mb-3">
												<div className="icon text-theme-color1 mr-3 flex-shrink-0"><i className="far fa-shield-check"></i></div>
												<h6 className="title my-auto">Security</h6>
											</div>
										</div>
										<div className="col-sm-6 col-xl-4">
											<div className="list-one d-flex align-items-center me-sm-4 mb-3">
												<div className="icon text-theme-color1 mr-3 flex-shrink-0"><i className="fas fa-wifi"></i></div>
												<h6 className="title my-auto">Free WI Fi</h6>
											</div>
										</div>
										{
											floor === 3 &&
											< div className="col-sm-6 col-xl-4">
												<div className="list-one d-flex align-items-center me-sm-4 mb-3">
													<div className="icon text-theme-color1 mr-3 flex-shrink-0"><i className="far fa-water"></i></div>
													<h6 className="title my-auto">Ganga View</h6>
												</div>
											</div>
										}
									</div>
								</div>
								<div className="d-sm-flex align-items-sm-center justify-content-sm-between py-10 border-top">
									<h6 className="my-sm-0">Share Details</h6>
									<div className="blog-details__social-list"> <Link href="news-details"><i className="fab fa-twitter"></i></Link> <Link href="news-details"><i className="fab fa-facebook"></i></Link> <Link href="news-details"><i className="fab fa-pinterest-p"></i></Link> <Link href="news-details"><i className="fab fa-instagram"></i></Link> </div>
								</div>

							</div>
						</div>
						<div className="col-xl-4 col-lg-5">
							<div className="sidebar">
								<div className="sidebar__post mb-30">

									<div className="mb-3">
										<input name="form_botcheck" className="form-control" type="hidden" value="" />
										<button type="submit" className="theme-btn btn-style-one w-100" data-loading-text="Please wait..."><span className="btn-title">MAKE RESERVATION</span></button>
									</div>

								</div>
								<div className="sidebar__single sidebar__post">
									<h3 className="sidebar__title">Also Available</h3>
									<ul className="sidebar__post-list list-unstyled">
										<li>
											<div className="sidebar__post-image"> <img src="/images/room-1.jpg" alt="" /> </div>
											<div className="sidebar__post-content">
												<h3> 
													<span className="sidebar__post-content-meta"><i className="far fa-door-open"></i>Heritage Luxury</span> 
													{/* <Link href="">₹10000 / NIGHT</Link> */}
												</h3>
											</div>
										</li>
										<li>
											<div className="sidebar__post-image"> <img src="/images/room-2.jpg" alt="" /> </div>
											<div className="sidebar__post-content">
												<h3>
													<span className="sidebar__post-content-meta"><i className="far fa-door-open"></i>Heritage Luxury</span>
													{/* <Link href="">₹10000 / NIGHT</Link> */}
												</h3>
											</div>
										</li>
										<li>
											<div className="sidebar__post-image"> <img src="/images/room-3.jpg" alt="" /> </div>
											<div className="sidebar__post-content">
												<h3>
													<span className="sidebar__post-content-meta"><i className="far fa-door-open"></i>Heritage Luxury</span>
													{/* <Link href="">₹10000 / NIGHT</Link> */}
												</h3>
											</div>
										</li>
									</ul>
								</div><br /><br />

								<div className="p-4 p-lg-5 bg-light">
									<h4 className="mt-0">Send Query</h4>
									<form id="contact_form" name="contact_form" className="" action="includes/sendmail.php" method="post">
										<div className="mb-3">

											<input name="form_name" id="name" className="form-control bg-white" type="text" placeholder="Enter Name" />
										</div>
										<div className="mb-3">

											<input name="form_email" id="email" className="form-control bg-white required email" type="email" placeholder="Enter Email" />
										</div>
										<div className="mb-3">

											<input name="form_phone" id="phone" className="form-control bg-white required phone" type="number" placeholder="Enter Phone" />
										</div>
										<div className="mb-3">

											<textarea name="form_message" id="message" className="form-control bg-white required" rows="5" placeholder="Enter Message"></textarea>
										</div>
										<div className="mb-0">
											<input name="form_botcheck" className="form-control" type="hidden" value="" />
											<button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title">Submit </span></button>
										</div>
									</form>
								</div>


							</div>
						</div>
					</div>
				</div>
			</section >
		</>
	)
}
