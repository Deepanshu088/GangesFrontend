import React, { useState } from 'react';
import DatePicker from '../shared/Input/DatePicker';
import useForm from '@/hooks/useForm';
import CounterInput from '../shared/Input/CounterInput';
import Input from '../shared/Input/Input';
import useHttp from '@/hooks/useHttp';
import SpinningLoader from '../shared/Loader/SpinningLoader';
import Toast from '../shared/Toast/Toast';
import Carousel from '../shared/Carousel/Carousel';
import FixedTable42 from '../shared/FixedTable-4-2/FixedTable-4-2';
import { useRouter } from 'next/router';
import DropDownInput from '../shared/Input/DropDown';

const BoatType = [
	{
		name: "Motor Boat",
		value: "motorBoat"
	},
	{
		name: "Hand Boat",
		value: "handBoat"
	},
]

const INITIAL_FORM_VALUES = {
	plannedDate: '',
	plannedTime: '',
	city: '',
	country: '',
	noOfPassengers: null,
	// numberOfAdults: null,
	// numberOfChild: null,
	boatType: null,
	name: '',
	email: '',
	phoneNumber: ''
}

const INITIAL_FORM_ERRORS = {
	plannedDate: true,
	plannedTime: true,
	city: true,
	country: true,
	// numberOfAdults: true,
	// numberOfChild: true,
	boatType: true,
	noOfPassengers: true,
	name: true,
	email: true,
	phoneNumber: true
}

const BoatCarouselItems = [
	{ imagePath: "/images/facilities/boat/boat3.jpg" },
	{ imagePath: "/images/facilities/boat/boat4.jpg" },
	{ imagePath: "/images/facilities/boat/boat5.jpg" },
	{ imagePath: "/images/facilities/boat/boat6.jpg" },
	{ imagePath: "/images/facilities/boat/boat7.jpg" }
]

const items = [
	[
		'Motor Boat - 3200, Hand boat 2800 prices for 4 person',
		'Motor boat',
	],
	[
		'Morning Sunrise tour - 05:30 AM to 7:00 AM - From Assi Ghat to Manikarnika Ghat and back',
		'Evening Sunset tour - 05:30 AM to 7:00 AM - From Assi Ghat to Dashaswamedh Ghat and back',
	],
	// [
	// 	'Above 4 Person - 400 will be charged for extra per person',
	// 	'Above 4 Person - 400 will be charged for extra per person'
	// ]
];

const Cabbooking = () => {
	const router = useRouter();
	const [currentTab, setCurrentTab] = useState(0);
	const [toastDetails, setToastDetails] = useState({
		show: false,
		type: "success",
		title: "Success",
		message: "Successfully submitted the form.",
	});
	const { formValues, formErrors, onTextChange, onDateChange, showFormErrors, setShowFormErrors, setFormDetails, setFormErrorDetails } = useForm(INITIAL_FORM_VALUES, INITIAL_FORM_ERRORS);
	const { isLoading, apiService, error, clearError } = useHttp();

	const nextPrev = (n) => {
		let newValue = ((currentTab + n) > 0) ? currentTab + n : 0;
		setCurrentTab(newValue);
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		console.log("osnsubmtit henallder")
		console.log(formErrors);
		try {
			const isFormInvalid = Object.values(formErrors).reduce((a, b) => a || b, false);
			if (isFormInvalid) {
				setShowFormErrors(true);
				return;
			}

			await apiService("/enquiryForm/boat", "POST", formValues);
			setFormDetails(INITIAL_FORM_VALUES);
			setFormErrorDetails(INITIAL_FORM_ERRORS);
			setToastDetails({ show: true, type: 'success', title: 'Success', message: 'Form Submitted Successfully.' });
			router.push("/form-success");
		} catch (e) {
			console.log(e);
			setToastDetails({ show: true, type: 'error', title: 'Error', message: 'Something went wrong.' });
		}
	}

	let isFormInvalid = null;
	if (showFormErrors) {
		isFormInvalid = Object.values(formErrors).reduce((a, b) => a || b, false);
	}


	return (
		<section className="cabbooking-booking pt-10 pb-10 p-relative fix" style={{ paddingTop: '20px', paddingBottom: '20px', position: 'relative' }}>
			<style>
				{`
					.cabbooking-button {
						background-color: #ad9700;
						color: white;
						padding: 10px 30px;
						border: none;
						cursor: pointer;
						border-radius: 4px;
						margin-right: 10px;
					}

					.cabbooking-button:hover {
						background-color: #ad9700;
					}
					.error {
						border-bottom: 2px solid red !important;
					}
				`}
			</style>

			{
				toastDetails.show &&
				<Toast show={toastDetails.show} type={toastDetails.type} title={toastDetails.title} message={toastDetails.message} setToastDetails={setToastDetails} />
			}

			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-6 cabbooking-contact-bg02 " style={{ paddingLeft: '20px' }}>
						<div className="section-title center-align">
							<h2>Boat Ride Booking</h2>
						</div>
						<p>To reserve the ride, please complete and submit the booking forms.</p>
						<div className="w3layoutscontactagileits cabbooking-booking-form">
							<form id="cabbooking-regForm">
								<div className={`cabbooking-tab ${currentTab === 0 ? 'active' : ''}`} style={{ display: currentTab === 0 ? 'block' : 'none' }}>

									<DatePicker id="plannedDate" name="plannedDate" placeholder="Select Date" errorMessage="This field is required."
										value={formValues.plannedDate} onChange={onDateChange}
										isError={showFormErrors && formErrors.plannedDate}
									/>

									<DatePicker id="plannedTime" name="plannedTime" placeholder="Select Time" errorMessage="This field is required."
										value={formValues.plannedTime} onChange={onDateChange} timeOnly
										isError={showFormErrors && formErrors.plannedTime}
									/>

									<Input id="city" name="city" placeholder="City" errorMessage="This field is required."
										value={formValues.city} onChange={onTextChange}
										validator={["REQUIRE"]} isError={showFormErrors && formErrors.city}
									/>

									<Input id="country" name="country" placeholder="Country" errorMessage="This field is required."
										value={formValues.country} onChange={onTextChange}
										validator={["REQUIRE"]} isError={showFormErrors && formErrors.country}
									/>

									<DropDownInput id="boatType" name="boatType" placeholder="Select Boat Type" errorMessage="This field is required."
										value={formValues.boatType} onChange={onTextChange} isError={showFormErrors && formErrors.boatType}
										options={BoatType}
									/>

									<CounterInput id="noOfPassengers" name="noOfPassengers" placeholder="Number of Passengers" type='number' errorMessage="This field is required."
										value={formValues.noOfPassengers}
										onChange={onTextChange}
										isError={showFormErrors && formErrors.noOfPassengers}
									/>

									{/* <p className="ng-binding text-[#c3bd10] text-2xl"><b>Amount Payable:</b> Rs. {+formValues.numberOfAdults * 1000}</p> */}
									<div style={{ textAlign: 'right' }}>
										<button type="button" id="cabbooking-nextBtn" onClick={() => nextPrev(1)} className="cabbooking-button">Next</button>
									</div>
								</div>
								<div className={`cabbooking-tab ${currentTab === 1 ? 'active' : ''}`} style={{ display: currentTab === 1 ? 'block' : 'none' }}>

									<Input id="name" name="name" placeholder="Enter Your Name" errorMessage="This field is required."
										value={formValues.name} onChange={onTextChange}
										validator={["REQUIRE"]} isError={showFormErrors && formErrors.name}
									/>

									<Input id="email" name="email" placeholder="example@example.com" errorMessage="This field is required."
										value={formValues.email} onChange={onTextChange}
										validator={["EMAIL"]} isError={showFormErrors && formErrors.email}
									/>

									<Input id="phoneNumber" name="phoneNumber" placeholder="Phone Number" errorMessage="Please enter a valid number (10 digits)."
										value={formValues.phoneNumber} onChange={onTextChange}
										validator={["PHONE_NUMBER"]} isError={showFormErrors && formErrors.phoneNumber}
									/>

									{
										isFormInvalid && <div className="text-orange-600 text-right text-sm my-6 mb-8"> <i class="fa-solid fa-triangle-exclamation mr-2"></i> Please fill the form completely.</div>
									}

									<div style={{ overflow: 'auto' }}>
										<div style={{ float: 'left' }}>
											<button type="button" id="cabbooking-prevBtn" onClick={() => nextPrev(-1)} className="cabbooking-button1">Previous</button>
										</div>
										<div style={{ float: 'right' }}>
											<button type="button" className="cabbooking-button" onClick={onSubmitHandler} disabled={isLoading}>{isLoading ? <SpinningLoader /> : "Submit"}</button>
										</div>
									</div>
								</div>
								<div style={{ textAlign: 'center', marginTop: '40px' }}>
									<span className={`step ${currentTab === 0 ? 'active' : ''}`}></span>
									<span className={`step ${currentTab === 1 ? 'active' : ''}`}></span>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className='ml-6'>
							<div className="booking-img">
								{/* <img src="images/home/boat2.jpg" alt="" className='h-full w-auto object-cover' /> */}
								<Carousel items={BoatCarouselItems} />
							</div>

							<div className='mt-10'>
								<FixedTable42 items={items} images={["/images/facilities/boat/boat3.jpg", "/images/facilities/boat/boat3.jpg"]} note="Above 4 Person - 400 will be charged for extra per person" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cabbooking;
