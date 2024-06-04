// import { FirstFloorRooms, GroundFloorRooms, SecondFloorRooms, ThirdFloorRooms } from '@/constants/RoomDetailConstants';
import useHttp from '@/hooks/useHttp';
import { fetchAllRooms } from '@/redux/slices/roomSlice';
import React, { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';
import { useDispatch, useSelector } from 'react-redux';

export default function Profile() {
	const { groundFloor, firstFloor, secondFloor, thirdFloor } = useSelector(state => state.room);
	const dispatch = useDispatch();
	const { apiService } = useHttp();
	const [isOpen, setOpen] = useState(false);
	const [showPopup, setShowPopup] = useState(true);
	const [hoveredCity, setHoveredCityDetails] = useState(groundFloor[0] || {});

	useEffect(() => {
		dispatch(fetchAllRooms(apiService))
	}, [])

	const onMouseEnterHandler = (item) => {
		setShowPopup(true);
		setHoveredCityDetails(item)
	}

	const onMouseLeaveHandler = (item) => {
		setShowPopup(false);
	}

	return (
		<>
			<section className="food-section pt-0">
				<div className="auto-container">
					<div className="row">
						<div className="image-column col-xl-4 col-lg-4">
							<div className="inner-column">
								<div className="image-box">
									<figure className="image wow fadeInUp">
										<img src="images/feature-2.jpg" alt="" style={{ width: '100%', height: '100%' }} />
									</figure>

								</div>
								<a onClick={() => setOpen(true)} className="play-now-two"><i className="icon fa fa-play" aria-hidden="true"></i><span className="ripple"></span></a>
								<div className="quote-box">
									<div className="icon-box"><i className="flaticon-quotation"></i></div>
									{/* <div className="text">Great hospitality is the key to Pride of Palace on Ganges longstanding reputation for excellence.</div> */}
								</div>
							</div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

						</div>
						<div className="content-column col-xl-8">
							<div className="inner-column">
								<div className="sec-title">
									<h2>Profile</h2>
									<div className="text"> Varanasi, historically known as Kashi or Banaras, is heralded as the oldest continuously inhabited city in human history. This venerable city is esteemed not only as the cultural capital of the Eastern world but also as a pivotal spiritual haven that draws seekers and devotees from across the globe. Recognized for its profound spiritual influence, Varanasi has been a destination where diverse cultures from all corners of India and beyond have converged, seeking enlightenment and spiritual fulfilment.<br /><br />
										For over two millennia, Varanasi has been a melting pot of cultures, where individuals from different regions of India have brought their unique cultural heritages and lineages. This rich influx of cultural traditions, combined with the city’s indigenous spiritual and cultural practices, has woven a vibrant tapestry that enhances its historical and contemporary allure. The synthesis of Eastern traditions with influences from various global cultures has transformed Varanasi into a city that not only embodies a rich historical narrative but also displays a dynamic cultural panorama. <br /><br />
										The Hotel Palace on Ganges stands as a testament to this cultural synthesis. Situated at the heart of this ancient city, the hotel embraces the spirit of Varanasi and all over India by dedicating each of its twenty-four rooms to distinct cultural themes reflective of India’s diverse regional traditions. Each room serves as a cultural alcove, offering guests an intimate experience with the aesthetic and spiritual heritage specific to each Indian province represented. From the architectural nuances to the decorative motifs and the curated artworks, the rooms are designed to offer guests more than just a place to stay—they provide a deep, immersive journey into the cultural soul of India.<br /><br />
										In preserving and showcasing such a broad spectrum of Indian cultural heritage under one roof, the Hotel Palace on Ganges not only honours the legacy of Varanasi as a centre of spiritual and cultural convergence but also enhances the cultural appreciation of its guests, making each stay a unique exploration of India’s rich cultural mosaic. Thus, the hotel not only offers world-class hospitality but also serves as a living museum of cultural heritage, enriching the travel experience of its guests with depth and authenticity. <br /><br />
									</div></div>
							</div>
						</div>
					</div>
					<div className="row relative" onMouseLeave={onMouseLeaveHandler}>
						<div className='className="image-column col-xl-5 col-lg-5'>
							{
								showPopup &&
								<div className="absolute p-8 border border-black w-1/2 left-0 -translate-x-1/4 hidden xl:block">
									<div className="flex justify-start">
										<div className="w-1/2">
											<img src={process.env.NEXT_PUBLIC_BASE_URL + "/" + hoveredCity.gallery?.[0]} alt="Product" className='w-full h-full object-cover max-h-72' />
										</div>
										<div className="ml-8 w-1/2">
											<div className="product-details">
												<h4 className="product-name"><strong>{hoveredCity.name}</strong></h4>
												<h2 className="product-content"><p>{hoveredCity.shortDescription || "It's home to diverse indigenous tribes, with festivals and markets celebrating the different tribes' culture"}</p></h2>
												<button className='bg-[#aa8453] p-4 w-full hover:text-black'>
													<a href="https://staahmax.staah.net/be/indexpack?propertyId=MTA5OQ&individual=true&roomTypeId=100333" className="text-white hover:text-black">MAKE RESERVATION</a>
												</button>
											</div>
										</div>
									</div>
								</div>
							}
						</div>
						<div className='content-column col-xl-7 inner-column'>
							<div className='text-2xl mb-6 font-gilda'>
								<a href='/our-rooms'>Our Rooms</a>
							</div>
							<div className="healthy-food flex justify-start flex-wrap md:flex-nowrap 	">
								<div className="food-list mb-10 mr-8 flex justify-start flex-col xl:flex-col-reverse">
									<ul className='xl:mt-10'>
										<span className="whitespace-nowrap underline text-black">Ganges View</span>

										{
											thirdFloor.map(item => <li key={item.url} onMouseEnter={() => onMouseEnterHandler(item)} >
												<i className="fa-regular fa-square-check mr-2"></i>
												<a href={`/room-details/${item.roomId}`} className='whitespace-nowrap'>{item.name}</a>
											</li>)
										}

									</ul>
									<ul className='mt-10 xl:mt-0'>
										<span className="whitespace-nowrap underline text-black mb-20">Lower Level Heritage Deluxe</span>
										{
											groundFloor.map(item => <li key={item.url} onMouseEnter={() => onMouseEnterHandler(item)} >
												<i className="fa-regular fa-square-check mr-2"></i>
												<a href={`/room-details/${item.roomId}`} className='whitespace-nowrap'>{item.name}</a>
											</li>)
										}
									</ul>
								</div>
								<div className="food-list two mb-0 mr-8">
									<ul>
										<span className="whitespace-nowrap underline text-black">Upper Level Heritage Deluxe </span>
										{
											[...firstFloor, ...secondFloor].slice(0, 8).map(item => <li key={item.url} onMouseEnter={() => onMouseEnterHandler(item)} >
												<i className="fa-regular fa-square-check mr-2"></i>
												<a href={`/room-details/${item.roomId}`} className='whitespace-nowrap'>{item.name}</a>
											</li>)
										}
									</ul>
								</div>
								<div className="food-list two mb-10 mr-8">
									<ul className='mt-0'>
										<span className="whitespace-nowrap hidden md:block text-black"> &nbsp; </span>
										{
											[...firstFloor, ...secondFloor].slice(8).map(item => <li key={item.url} onMouseEnter={() => onMouseEnterHandler(item)} >
												<i className="fa-regular fa-square-check mr-2"></i>
												<a href={`/room-details/${item.roomId}`} className='whitespace-nowrap'>{item.name}</a>
											</li>)
										}
									</ul>
								</div>
								{/* 
										<div className="food-list two mb-10 mr-8">
											<ul>
												<span className="whitespace-nowrap underline text-black">Second floor</span>
												{
													SecondFloorRooms.map(item => <li key={item.url} onMouseEnter={() => onMouseEnterHandler(item)} >
														<i className="fa-regular fa-square-check"></i>
														<a href={`/room-details/${item.roomId}`} className='whitespace-nowrap'>{item.name}</a>
													</li>)
												}
											</ul>
										</div> */}


								{/* <div className="food-list two">
										<ul>
											<span className="whitespace-nowrap underline text-black">Ganges View</span>

											{
												thirdFloor.map(item => <li key={item.url} onMouseEnter={() => onMouseEnterHandler(item)} >
													<i className="fa-regular fa-square-check"></i>
													<a href={`/room-details/${item.roomId}`} className='whitespace-nowrap'>{item.name}</a>
												</li>)
											}

										</ul>
									</div> */}

							</div>
						</div>
					</div>
				</div>
			</section >
			<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="jIXQjSaE2kk" onClose={() => setOpen(false)} />
		</>
	)
}
