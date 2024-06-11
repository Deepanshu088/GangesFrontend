import Link from 'next/link';
import React from 'react';
import RoomGallery from './RoomGallery';
import { useSelector } from 'react-redux';
import StandardQueryForm from '../StandardQueryForm/StandardQueryForm';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { usePathname } from 'next/navigation';
import Head from 'next/head';

export default function RoomDetails({ roomDetail = {} }) {
	const pathname = usePathname();
	const { homeRoomImgs } = useSelector(state => state.settings);
	const { name, longDescription, floor, noOfBeds, isBreakfast, gallery = [], isDinner, isRiverView, isWifi, isTelevision, isAirConditioned, isParking, customerRating, luxuryCategory, regularPrice } = roomDetail;

	const galleryURLs = gallery.map(item => process.env.NEXT_PUBLIC_BASE_URL + "/" + item);

	const shareUrl = process.env.NEXT_PUBLIC_CLIENT_BASE_URL + pathname;

	return (
		<>
			<Head>
				<title>{name}</title>
				<meta property="og:title" content={name} key="title" />
				<meta property="og:description" content={longDescription} />
				<meta property="og:type" content="article" />
				
				<meta property="og:image" content={galleryURLs[0]} />
				<meta property="og:URL" content={galleryURLs[0]} />
			</Head>
			<section className="blog-details pt-120 pb-120">
				<div className="auto-container">
					<div className="row">
						<div className="col-xl-8 col-lg-7">
							<div className="testimonial-block-home5 mb-50">
								<RoomGallery data={galleryURLs} />
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
															<h6>{noOfBeds} Single Bed</h6>
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
									<div className="row room-facility-list whitespace-nowrap">
										{
											isAirConditioned &&
											<div className="col-sm-6 col-xl-4">
												<div className="list-one d-flex align-items-center me-sm-4 mb-3">
													<div className="icon text-theme-color1 mr-3 flex-shrink-0"><i className="far fa-air-conditioner"></i></div>
													<h6 className="title my-auto">Air Conditionar</h6>
												</div>
											</div>
										}
										{
											isBreakfast &&
											<div className="col-sm-6 col-xl-4">
												<div className="list-one d-flex align-items-center me-sm-4 mb-3">
													<div className="icon text-theme-color1 mr-3 flex-shrink-0"><i className="far fa-air-conditioner"></i></div>
													<h6 className="title my-auto">Breakfast Available</h6>
												</div>
											</div>
										}
										{
											isDinner &&
											<div className="col-sm-6 col-xl-4">
												<div className="list-one d-flex align-items-center me-sm-4 mb-3">
													<div className="icon text-theme-color1 mr-3 flex-shrink-0"><i className="far fa-air-conditioner"></i></div>
													<h6 className="title my-auto">Dinner Available</h6>
												</div>
											</div>
										}
										<div className="col-sm-6 col-xl-4">
											<div className="list-one d-flex align-items-center me-sm-4 mb-3">
												<div className="icon text-theme-color1 mr-3 flex-shrink-0"><i className="far fa-parking"></i></div>
												<h6 className="title my-auto">{isParking ? "Free" : "Paid"} Parking</h6>
											</div>
										</div>
										{/* <div className="col-sm-6 col-xl-4">
											<div className="list-one d-flex align-items-center me-sm-4 mb-3">
												<div className="icon text-theme-color1 mr-3 flex-shrink-0"><i className="far fa-shield-check"></i></div>
												<h6 className="title my-auto">Security</h6>
											</div>
										</div> */}
										{
											isWifi &&
											<div className="col-sm-6 col-xl-4">
												<div className="list-one d-flex align-items-center me-sm-4 mb-3">
													<div className="icon text-theme-color1 mr-3 flex-shrink-0"><i className="fas fa-wifi"></i></div>
													<h6 className="title my-auto">Free WI Fi</h6>
												</div>
											</div>
										}
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
									<div className="blog-details__social-list gap-2">
										{/* <Link href="#"><i className="fab fa-twitter"></i></Link>
										<Link href="#"><i className="fab fa-facebook"></i></Link>
										<Link href="#"><i className="fab fa-pinterest-p"></i></Link>
										<Link href="#"><i className="fab fa-instagram"></i></Link> */}


										<TwitterShareButton
											url={shareUrl}
											title={name}
										>
											<a><i className="fab fa-twitter text-black"></i></a>
										</TwitterShareButton>

										<FacebookShareButton
											url={shareUrl}
											title={name}
										>
											<a><i className="fab fa-facebook text-black"></i></a>
										</FacebookShareButton>


										<PinterestShareButton
											url={shareUrl}
											title={name}
											media={galleryURLs[0]}
										>
											<a><i className="fab fa-pinterest-p text-black"></i></a>
										</PinterestShareButton>

										<WhatsappShareButton
											url={shareUrl}
											title={name}
											separator=" "
										>
											<a><i className="fab fa-whatsapp text-black"></i></a>
										</WhatsappShareButton>
									</div>
								</div>

							</div>
						</div>
						<div className="col-xl-4 col-lg-5">
							<div className="sidebar">
								<div className="sidebar__post mb-30">

									<div className="mb-3">
										<input name="form_botcheck" className="form-control" type="hidden" value="" />
										<button type="submit" className="theme-btn btn-style-one w-100" data-loading-text="Please wait..."><span className="btn-title"><Link href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5OQ==&individual=true" >MAKE RESERVATION</Link></span></button>
									</div>

								</div>
								<div className="sidebar__single sidebar__post">
									<h3 className="sidebar__title">Also Available</h3>
									<ul className="sidebar__post-list list-unstyled">
										<li>
											<div className="sidebar__post-image"> <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${homeRoomImgs[0]}`} alt="" /> </div>
											<div className="sidebar__post-content">
												<h3>
													<a className="sidebar__post-content-meta" href='/page-groundfloor'>
														<div className='flex justify-start font-normal'>
															<i className="far fa-door-open mr-2"></i>
															<span>Lower Level Heritage Deluxe</span>
														</div>
													</a>
													{/* <Link href="">₹10000 / NIGHT</Link> */}
												</h3>
											</div>
										</li>
										<li>
											<div className="sidebar__post-image"> <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${homeRoomImgs[1]}`} alt="" /> </div>
											<div className="sidebar__post-content">
												<h3>
													<a className="sidebar__post-content-meta" href='/page-firstfloor'>
														<div className='flex justify-start font-normal'>
															<i className="far fa-door-open mr-2"></i>
															<span>Upper Level Heritage Deluxe</span>
														</div>
													</a>
													{/* <span className="sidebar__post-content-meta"><i className="far fa-door-open"></i> Level Heritage Deluxe</span> */}
													{/* <Link href="">₹10000 / NIGHT</Link> */}
												</h3>
											</div>
										</li>
										<li>
											<div className="sidebar__post-image"> <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${homeRoomImgs[2]}`} alt="" /> </div>
											<div className="sidebar__post-content">
												<h3>
													<a className="sidebar__post-content-meta" href='/page-thirdfloor'>
														<div className='flex justify-start font-normal'>
															<i className="far fa-door-open mr-2"></i>
															<span>Ganges View</span>
														</div>
													</a>
													{/* <span className="sidebar__post-content-meta"><i className="far fa-door-open"></i>Ganges View</span> */}
													{/* <Link href="">₹10000 / NIGHT</Link> */}
												</h3>
											</div>
										</li>
									</ul>
								</div><br /><br />

								<StandardQueryForm />


							</div>
						</div>
					</div>
				</div>
			</section >
		</>
	)
}
