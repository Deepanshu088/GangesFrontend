import React, { useRef, useState } from 'react';
import Input from '../shared/Input/Input';
import DatePicker from '../shared/Input/DatePicker';
import useForm from '@/hooks/useForm';
// import CounterInput from '../shared/Input/CounterInput';
import useHttp from '@/hooks/useHttp';
import SpinningLoader from '../shared/Loader/SpinningLoader';
import Toast from '../shared/Toast/Toast';
import DropDownInput from '../shared/Input/DropDown';
import FixedTable42 from '../shared/FixedTable-4-2/FixedTable-4-2';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';

const items = [
	[
		'Swift Dzire, Indigo or Amaze',
		'Innova, Crysta or Ertiga',
	],
	[
		'Taxi for upto 4 Person | Airport Pickup/Drop - 1250 | Railway Station Pickup/Drop - 800 | Full Day - 2200 | Half Day - 1400 | Sarnath Tour - 1600',
		'Taxi for upto 6 Person | Airport Pickup/Drop - 1500 | Railway Station Pickup/Drop - 1100 | Full Day - 3200 | Half Day - 2200 | Sarnath Tour - 2000',
	],
	// [
	// 	'Parking and toll charges will be extra, after 09:00 PM 300 will be chargable as driver night charge',
	// 	'Parking and toll charges will be extra, after 09:00 PM 300 will be chargable as driver night charge',
	// ]
];

const CabBookingCarOptions = [
	{
		name: "Hatchback ( Upto 4 Passengers )",
		value: "hatchback"
	},
	{
		name: "Sedan ( Upto 4 Passengers )",
		value: "sedan"
	},
	{
		name: "SUV ( Upto 7 Passengers )",
		value: "suv"
	}
]

const MaximumNumberOfPassengers = [
	{
		name: "1",
		value: 1
	},
	{
		name: "2",
		value: 2
	},
	{
		name: "3",
		value: 3
	},
	{
		name: "4",
		value: 4
	},
	{
		name: "5",
		value: 5
	},
	{
		name: "6",
		value: 6
	},
	{
		name: "7",
		value: 7
	},
]


const INITIAL_FORM_VALUES = {
	pickupPoint: "",
	dropoffPoint: "",
	plannedDate: "",
	plannedTime: "",
	cabType: null,
	noOfPassengers: null,
	// numberOfAdults: null,
	// numberOfChild: null,
	name: "",
	email: "",
	phoneNumber: "",
}

const INITIAL_FORM_ERRORS = {
	pickupPoint: true,
	dropoffPoint: true,
	plannedDate: true,
	plannedTime: true,
	noOfPassengers: true,
	cabType: true,
	// numberOfAdults: true,
	// numberOfChild: true,
	name: true,
	email: true,
	phoneNumber: true
}

const Cabbooking = () => {
	const [toastDetails, setToastDetails] = useState({
		show: false,
		type: "success",
		title: "Success",
		message: "Successfully submitted the form.",
	});

	const [currentTab, setCurrentTab] = useState(0);
	const { formValues, formErrors, onTextChange, onDateChange, showFormErrors, setShowFormErrors, setFormDetails, setFormErrorDetails } = useForm(INITIAL_FORM_VALUES, INITIAL_FORM_ERRORS);
	const { isLoading, apiService, error, clearError } = useHttp();
	const router = useRouter();

	const nextPrev = (n) => {
		let newValue = ((currentTab + n) > 0) ? currentTab + n : 0;
		setCurrentTab(newValue);
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			const isFormInvalid = Object.values(formErrors).reduce((a, b) => a || b, false);
			if (isFormInvalid) {
				setShowFormErrors(true);
				console.log("Invalid formmm")
				return;
			}

			const response = await apiService("/enquiryForm/cab", "POST", formValues);
			setFormDetails(INITIAL_FORM_VALUES);
			setFormErrorDetails(INITIAL_FORM_ERRORS);
			setToastDetails({ show: true, type: 'success', title: 'Success', message: 'Form Submitted Successfully.' });
			router.push("/form-success");
		} catch (e) {
			console.log(e);
			setToastDetails({ show: true, type: 'error', title: 'Error', message: 'Something went wrong.' });
		}
	}

	let maxNumberOfPassengersItem = [];

	switch(formValues.cabType) {
		case "hatchback": maxNumberOfPassengersItem = MaximumNumberOfPassengers.slice(0, 4);
			break;
		case "sedan": maxNumberOfPassengersItem = MaximumNumberOfPassengers.slice(0, 4);
			break;
		case "suv": maxNumberOfPassengersItem = MaximumNumberOfPassengers.slice(0, 7);
			break;
		default: maxNumberOfPassengersItem = MaximumNumberOfPassengers;
	}

	let isFormInvalid = null;
	if(showFormErrors) {
		isFormInvalid = Object.values(formErrors).reduce((a, b) => a || b, false);
	}

	return (
		<section className="cabbooking-booking pt-10 pb-10 p-relative fix" style={{ paddingTop: '120px', paddingBottom: '120px', position: 'relative' }}>

			<style>
				{`
          .cabbooking-input {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 20px;
            border: none;
            border-bottom: 1px solid #ccc;
            outline: none;
          }

          .cabbooking-input:focus {
            border-bottom: 2px solid #4CAF50;
          }

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
          .cabbooking-button1{
            background-color:gray;
            padding: 10px 30px;
            border: none;
            cursor: pointer;
            border-radius: 4px;
            margin-right: 10px;
          }
          .error {
            border-bottom: 2px solid red;
          }
        `}
			</style>

			{
				toastDetails.show &&
				<Toast show={toastDetails.show} type={toastDetails.type} title={toastDetails.title} message={toastDetails.message} setToastDetails={setToastDetails} />
			}

			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-6 cabbooking-contact-bg02" style={{ paddingLeft: '20px' }}>
						<div className="section-title center-align">
							<h2>Book a Cab</h2>
						</div>
						<p>To reserve the ride, please complete and submit the booking form.</p>
						<div className="w3layoutscontactagileits cabbooking-booking-form">
							<form id="cabbooking-regForm" className='bk-form' action="/action_page.php">
								{
									currentTab === 0 &&
									<div className={`cabbooking-tab ${currentTab === 0 ? 'active' : ''}`} style={{ display: currentTab === 0 ? 'block' : 'none' }}>
										<Input id="pickupPoint" name="pickupPoint" placeholder="Enter Pick Up Point" errorMessage="This field is required."
											onChange={onTextChange} value={formValues.pickupPoint}
											validator={["REQUIRE"]} isError={showFormErrors && formErrors.pickupPoint}
										/>

										<Input id="dropoffPoint" name="dropoffPoint" placeholder="Enter Drop Off Point" errorMessage="This field is required."
											value={formValues.dropoffPoint} onChange={onTextChange}
											validator={["REQUIRE"]} isError={showFormErrors && formErrors.dropoffPoint}
										/>

										<DatePicker id="plannedDate" name="plannedDate" placeholder="Select Date" errorMessage="This field is required."
											value={formValues.plannedDate} onChange={onDateChange} isError={showFormErrors && formErrors.plannedDate}
										/>

										<DatePicker id="plannedTime" name="plannedTime" placeholder="Select Time" errorMessage="This field is required."
											value={formValues.plannedTime} onChange={onDateChange} timeOnly isError={showFormErrors && formErrors.plannedTime}
										/>

										<DropDownInput id="cabType" name="cabType" placeholder="Select Cab Size" errorMessage="This field is required."
											value={formValues.cabType} onChange={(...args) => {
												onTextChange(...args);
												onTextChange("noOfPassengers", null, false);
											}} isError={showFormErrors && formErrors.cabType}
											options={CabBookingCarOptions}
										/>

										<DropDownInput id="noOfPassengers" name="noOfPassengers" placeholder="Select Number of Passengers" errorMessage="This field is required."
											value={formValues.noOfPassengers} onChange={onTextChange} isError={showFormErrors && formErrors.noOfPassengers}
											options={maxNumberOfPassengersItem}
										/>

										{/* <CounterInput id="numberOfAdults" name="numberOfAdults" placeholder="Number of Adults" type='number' errorMessage="This field is required."
											value={formValues.numberOfAdults} onChange={onTextChange}
											isError={showFormErrors && formErrors.numberOfAdults}
										/>

										<CounterInput id="numberOfChild" name="numberOfChild" placeholder="Number of Children" type='number' errorMessage="This field is required."
											value={formValues.numberOfChild} onChange={onTextChange}
											isError={showFormErrors && formErrors.numberOfChild}
										/> */}

										<div style={{ textAlign: 'right' }}>
											<button type="button" id="cabbooking-nextBtn" onClick={() => nextPrev(1)} className="cabbooking-button">Next</button>
										</div>
									</div>
								}
								{
									currentTab === 1 &&
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

										<div style={{ width: "100%" }}>
											<div style={{ float: 'left' }}>
												<button type="button" id="cabbooking-prevBtn" onClick={() => nextPrev(-1)} className="cabbooking-button1 w-full">Previous</button>
											</div>
											<div style={{ float: 'right' }}>
												<button type="submit" id="cabbooking-submitBtn" className="cabbooking-button w-full text-center" onClick={onSubmitHandler} disabled={isLoading}>{isLoading ? <SpinningLoader /> : "Submit"}</button>
											</div>
										</div>
									</div>
								}


								<div style={{ textAlign: 'center', marginTop: '40px' }}>
									<span className={`step ${currentTab === 0 ? 'active' : ''}`}></span>
									<span className={`step ${currentTab === 1 ? 'active' : ''}`}></span>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="booking- rounded-xl overflow-hidden">
							<img src="/images/facilities/table/car2.jpg" alt="img" style={{ width: '100%', height: 'auto' }} />
						</div>

						<div className='my-10'>
							<FixedTable42 items={items} images={["/images/facilities/boat/boat3.jpg", "/images/facilities/boat/boat3.jpg"]} note="Parking and toll charges will be extra, after 09:00 PM 300 will be chargable as driver night charge" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cabbooking;
