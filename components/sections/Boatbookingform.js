import React, { useState } from 'react';
import DatePicker from '../shared/Input/DatePicker';
import useForm from '@/hooks/useForm';
import CounterInput from '../shared/Input/CounterInput';
import Input from '../shared/Input/Input';
import useHttp from '@/hooks/useHttp';
import SpinningLoader from '../shared/Loader/SpinningLoader';
import Toast from '../shared/Toast/Toast';

const INITIAL_FORM_VALUES = {
	plannedDate: '',
	plannedTime: '',
	city: '',
	country: '',
	numberOfAdults: null,
	numberOfChild: null,
	name: '',
	email: '',
	phoneNumber: ''
}

const INITIAL_FORM_ERRORS = {
	plannedDate: true,
	plannedTime: true,
	city: true,
	country: true,
	numberOfAdults: true,
	numberOfChild: true,
	name: true,
	email: true,
	phoneNumber: true
}

const Cabbooking = () => {
	const [currentTab, setCurrentTab] = useState(0);
    const [ toastDetails, setToastDetails ] = useState({
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
		} catch (e) {
			console.log(e);
			setToastDetails({ show: true, type: 'error', title: 'Error', message: 'Something went wrong.' });
		}
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
					<div className="col-lg-6 col-md-6 cabbooking-contact-bg02" style={{ paddingLeft: '20px' }}>
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

									<CounterInput id="numberOfAdults" name="numberOfAdults" placeholder="Number of Passengers" type='number' errorMessage="This field is required."
										value={formValues.numberOfAdults}
										onChange={onTextChange}
										isError={showFormErrors && formErrors.numberOfAdults}
									/>

									<p className="ng-binding text-[#c3bd10] text-2xl"><b>Amount Payable:</b> Rs. {+formValues.numberOfAdults * 1000}</p>
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

									<div style={{ overflow: 'auto' }}>
										<div style={{ float: 'left' }}>
											<button type="button" id="cabbooking-prevBtn" onClick={() => nextPrev(-1)} className="cabbooking-button1">Previous</button>
										</div>
										<div style={{ float: 'right' }}>
											<button type="button" className="cabbooking-button" onClick={onSubmitHandler} disabled={isLoading}>{ isLoading ? <SpinningLoader /> : "Submit" }</button>
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
						<div className="booking-img">
							<img src="images/home/boat2.jpg" alt="" className='h-full w-auto object-cover' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cabbooking;
