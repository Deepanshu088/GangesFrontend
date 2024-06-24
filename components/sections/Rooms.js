import { GANGES_VIEW_FLOOR_ROUTE, LOWER_LEVEL_FLOOR_ROUTE, UPPER_LEVEL_FLOOR_ROUTE } from '@/constants/RoutesConstants';
import Link from 'next/link';
import React from 'react';

export default function Rooms({homeRoomImgs}) {

	return (
		<>
			<section className="rooms-section pb-100">
				<div className="auto-container">
					<div className="sec-title text-center wow fadeInUp">
						<span className="sub-title">HERITAGE ROOMS</span>
						<h2>Luxury Heritage Rooms</h2>
					</div>
					<div className="row">

						<div className="room-block col-lg-6 col-md-6 col-sm-12">
							<div className="inner-box wow fadeIn">
								<div className="image-box">
									<figure className="image-2 overlay-anim"><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${homeRoomImgs[0]}`} alt="" className="md:h-[360px] max-h-[400px] w-full object-cover"/></figure>
								</div>
								<div className="content-box">
									<h6 className="title"><Link href={LOWER_LEVEL_FLOOR_ROUTE}>Lower Level Heritage Deluxe</Link></h6>
									{/* <span className="price">₹10000  / NIGHT</span> */}
								</div>
								<div className="box-caption">
									<Link href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5OQ==&individual=true" title="" className="book-btn">book now</Link>
									<ul className="bx-links">
										<li><i className="fa fa-wifi"></i></li>
										<li><i className="fa fa-bed"></i></li>
										<li><i className="fa fa-bath"></i></li>
										<li><i className="fa fa-shower"></i></li>
									</ul>
								</div>
							</div>
						</div>

						<div className="room-block col-lg-6 col-md-6 col-sm-12">
							<div className="inner-box wow fadeIn" data-wow-delay="200ms">
								<div className="image-box">
									<figure className="image-2 overlay-anim"><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${homeRoomImgs[1]}`} alt="" className="md:h-[360px] max-h-[400px] w-full object-cover"/></figure>
								</div>
								<div className="content-box">
									<h6 className="title"><Link href={UPPER_LEVEL_FLOOR_ROUTE}>Upper Level Heritage Deluxe</Link></h6>
									{/* <span className="price">₹10000  / NIGHT</span> */}
								</div>
								<div className="box-caption">
									<Link href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5OQ==&individual=true" title="" className="book-btn">book now</Link>
									<ul className="bx-links">
										<li><i className="fa fa-wifi"></i></li>
										<li><i className="fa fa-bed"></i></li>
										<li><i className="fa fa-bath"></i></li>
										<li><i className="fa fa-shower"></i></li>
									</ul>
								</div>
							</div>
						</div>

						<div className="room-block col-lg-3 col-md-6 col-sm-12">
							<div className="inner-box wow fadeIn" data-wow-delay="300ms">
								<div className="image-box">
									<figure className="image-2 overlay-anim"><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${homeRoomImgs[2]}`} alt="" className="md:h-[360px] max-h-[400px] w-full object-cover"/></figure>
								</div>
								<div className="content-box">
									<h6 className="title"><Link href={LOWER_LEVEL_FLOOR_ROUTE}>Ganges View</Link></h6>
									{/* <span className="price">₹10000  / NIGHT</span> */}
								</div>
								<div className="box-caption">
									<Link href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5OQ==&individual=true" title="" className="book-btn">book now</Link>
									<ul className="bx-links">
										<li><i className="fa fa-wifi"></i></li>
										<li><i className="fa fa-bed"></i></li>
										<li><i className="fa fa-bath"></i></li>
										<li><i className="fa fa-shower"></i></li>
									</ul>
								</div>
							</div>
						</div>

						<div className="room-block col-lg-6 col-md-6 col-sm-12">
							<div className="inner-box large-style wow fadeIn" data-wow-delay="400ms">
								<div className="image-box">
									<figure className="image-2 overlay-anim"><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${homeRoomImgs[3]}`} alt="" className="md:h-[360px] max-h-[400px] w-full object-cover"/></figure>
								</div>
								<div className="content-box">
									<h6 className="title"><Link href={GANGES_VIEW_FLOOR_ROUTE}>Lower Level Heritage Deluxe</Link></h6>
									{/* <span className="price">₹10000  / NIGHT</span> */}
								</div>
								<div className="box-caption">
									<Link href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5OQ==&individual=true" title="" className="book-btn">book now</Link>
									<ul className="bx-links">
										<li><i className="fa fa-wifi"></i></li>
										<li><i className="fa fa-bed"></i></li>
										<li><i className="fa fa-bath"></i></li>
										<li><i className="fa fa-shower"></i></li>
									</ul>
								</div>
							</div>
						</div>

						<div className="room-block col-lg-3 col-md-6 col-sm-12">
							<div className="inner-box wow fadeIn" data-wow-delay="500ms">
								<div className="image-box">
									<figure className="image-2 overlay-anim"><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${homeRoomImgs[4]}`} alt="" className="md:h-[360px] max-h-[400px] w-full object-cover"/></figure>
								</div>
								<div className="content-box">
									<h6 className="title"><Link href={GANGES_VIEW_FLOOR_ROUTE}>Ganges View</Link></h6>
									{/* <span className="price">₹10000  / NIGHT</span> */}
								</div>
								<div className="box-caption">
									<Link href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5OQ==&individual=true" title="" className="book-btn">book now</Link>
									<ul className="bx-links">
										<li><i className="fa fa-wifi"></i></li>
										<li><i className="fa fa-bed"></i></li>
										<li><i className="fa fa-bath"></i></li>
										<li><i className="fa fa-shower"></i></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
