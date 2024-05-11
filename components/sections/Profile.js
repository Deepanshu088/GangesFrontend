import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function Profile() {
	const [isOpen, setOpen] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const [hoveredCity, setHoveredCityDetails] = useState({});
	const placesList = {
		groundFloor: [
			{ title: "Avadh", url: "/page-avadhroom" },
			{
				title: "Nagaland",
				url: "/page-nagalandroom"
			}, {
				title: "Maharashtra",
				url: "/page-maharashroom"
			}, {
				title: "Himachal",
				url: "/page-himachalroom"
			}, {
				title: "Sakkim",
				url: "/page-sakkimroom"
			}, {
				title: "Bengal",
				url: "/page-bengalroom"
			}
		],
		firstFloor: [
			{
				title: "Colonial",
				url: "/page-colonialroom"
			}, {
				title: "Karnataka",
				url: "/page-karnatakaroom"
			}, {
				title: "Kashmir",
				url: "/page-kashmirroom"
			}, {
				title: "Goa",
				url: "/page-goaroom"
			}, {
				title: "Sanchi",
				url: "/page-sanchirrom"
			}, {
				title: "Rajasthan",
				url: "/page-rajputhana"
			}, {
				title: "Madhubani",
				url: "/page-madhuroom"
			}
		],
		secondFloor: [
			{
				title: "Colonial",
				url: "/page-colonialroom"
			}, {
				title: "Tamil",
				url: "/page-tamilnadu"
			}, {
				title: "Orissa",
				url: "/page-orissaroom"
			}, {
				title: "Assam",
				url: "/page-assam"
			}, {
				title: "Kerala",
				url: "/page-kerala"
			}, {
				title: "Jodhpur",
				url: "/page-jodhpur"
			}, {
				title: "Gujarat",
				url: "/page-gujarat"
			}, {
				title: "Punjab",
				url: "/page-punjab"
			}
		],
		thirdFloor: [
			{
				title: "Ganges view I",
				url: "/page-ganga"
			}, {
				title: "Ganges view II",
				url: "/page-ganga"
			}
		]
	}

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
				{
					showPopup &&
					<div className="absolute bottom-0 p-8 w-2/5 border border-black mb-20 ml-10">
						<div className="flex justify-start">
							<div className="w-1/2">
								<img src="images/room-4.jpg" alt="Product" className='w-auto h-full object-cover' />
							</div>
							<div className="ml-8">
								<div className="product-details">
									<h4 className="product-name"><strong>{hoveredCity.title}</strong></h4>
									<h2 className="product-content"><p>It's home to diverse indigenous tribes, with festivals and markets celebrating the different tribes' culture</p></h2>
									<button className='bg-[#aa8453] p-4 w-full hover:text-black'>
										<a href="https://staahmax.staah.net/be/indexpack?propertyId=MTA5OQ&individual=true&roomTypeId=100333" className="text-white hover:text-black">MAKE RESERVATION</a>
									</button>
								</div>
							</div>
						</div>
					</div>
				}
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
									<div className="text">Great hospitality is the key to Pride of Britain’s longstanding reputation for excellence.</div>
								</div>
							</div>
						</div>
						<div className="content-column col-xl-8">
							<div className="inner-column">
								<div className="sec-title">
									<h2>Profile</h2>
									<div className="text"> Kashi, Benaras or Varanasi is the oldest living city in the History of Mankind. This City is acknowledged as the cultural Capital of the Oriental part of the Globe. This is treated as an embodied divine. India, the nation with diversified culture has one unity or Common that is Varanasi where cultures from all the walks of this Country Congregated and accepted this City as their spiritual DESTINY.<br /><br />
										For more than two thousand years, people have been coming from different states of India to Varanasi with their Cultural heritage & lineage. This amalgamation of Oriental Cultures and life styles of west made this colossal city a panorama.<br /><br />
										Hotel Palace on Ganges has coined all distinct cultures of India and accordingly altogether forty two rooms under one Grand Heritage Hotel roof are designed and dedicated to each of those provincial cultures.<br /><br />
										Hotel Palace on Ganges has coined all distinct cultures of India and accordingly altogether forty two rooms under one Grand Heritage Hotel roof are designed and dedicated to each of those provincial cultures.<br /><br /> </div>
									<div className="healthy-food">
										<div className="food-list">
											<ul>
												<span className="whitespace-nowrap underline text-black mb-20">Ground floor</span>
												{
													placesList.groundFloor.map(item => <li key={item.url} onMouseEnter={() => onMouseEnterHandler(item)} onMouseLeave={() => onMouseLeaveHandler(item)}>
														<i className="fa-regular fa-square-check"></i>
														<a href={item.url}>{item.title}</a>
													</li>)
												}
											</ul>
										</div>
										<div className="food-list two">
											<ul>
												<span className="whitespace-nowrap underline text-black">First floor</span>
												{
													placesList.firstFloor.map(item => <li key={item.url} onMouseEnter={() => onMouseEnterHandler(item)} onMouseLeave={() => onMouseLeaveHandler(item)}>
														<i className="fa-regular fa-square-check"></i>
														<a href={item.url}>{item.title}</a>
													</li>)
												}
											</ul>
										</div>

										<div className="food-list two">
											<ul>
												<span className="whitespace-nowrap underline text-black">Second floor</span>
												{
													placesList.secondFloor.map(item => <li key={item.url} onMouseEnter={() => onMouseEnterHandler(item)} onMouseLeave={() => onMouseLeaveHandler(item)}>
														<i className="fa-regular fa-square-check"></i>
														<a href={item.url}>{item.title}</a>
													</li>)
												}


											</ul>
										</div>
										<div className="food-list two">
											<ul>
												<span className="whitespace-nowrap underline text-black">Third floor</span>

												{
													placesList.thirdFloor.map(item => <li key={item.url} onMouseEnter={() => onMouseEnterHandler(item)} onMouseLeave={() => onMouseLeaveHandler(item)}>
														<i className="fa-regular fa-square-check"></i>
														<a href={item.url}>{item.title}</a>
													</li>)
												}

											</ul>
										</div>

									</div>
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
