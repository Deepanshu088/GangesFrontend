import React, { useState } from 'react';
import DatePicker from '../shared/Input/DatePicker';
import useForm from '@/hooks/useForm';
import CounterInput from '../shared/Input/CounterInput';

const Cabbooking = () => {
	const [currentTab, setCurrentTab] = useState(0);
	const { formValues, formErrors, onTextChange, onDateChange } = useForm({
		plannedDate: '',
		plannedTime: '',
		city: '',
		country: '',
		numberOfPassengers: 1,
		name: '',
		email: '',
		phone: ''
	}, {});

	// const nextPrev = (n) => {
	// 	// If moving to the next tab
	// 	if (n === 1) {
	// 		// Check if all required fields in the current tab are filled
	// 		const currentTabInputs = document.querySelectorAll('.cabbooking-tab.active input[required]');
	// 		let isValid = true;
	// 		currentTabInputs.forEach(input => {
	// 			if (!input.value.trim()) {
	// 				isValid = false;
	// 				input.classList.add('error');
	// 			} else {
	// 				input.classList.remove('error');
	// 			}
	// 		});

	// 		// If all required fields are filled, move to the next tab
	// 		if (isValid) {
	// 			setCurrentTab(currentTab + n);
	// 		}
	// 	} else {
	// 		setCurrentTab(currentTab + n);
	// 	}
	// };

	const nextPrev = (n) => {
		let newValue = ((currentTab + n) > 0) ? currentTab + n : 0;
		setCurrentTab(newValue);
	};

	const handleInputChange = (event) => {
		// setFormValues({ ...formValues, [event.target.name]: event.target.value });
		// event.target.className = '';
	};

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
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-6 cabbooking-contact-bg02" style={{ paddingLeft: '20px' }}>
						<div className="section-title center-align">
							<h2>Boat Ride Booking</h2>
						</div>
						<p>To reserve the ride, please complete and submit the booking forms.</p>
						<div className="w3layoutscontactagileits cabbooking-booking-form">
							<form id="cabbooking-regForm" action="/action_page.php">
								<div className={`cabbooking-tab ${currentTab === 0 ? 'active' : ''}`} style={{ display: currentTab === 0 ? 'block' : 'none' }}>

									<DatePicker id="plannedDate" name="plannedDate" placeholder="Select Date" errorMessage="This field is required."
										value={formValues.plannedDate}
										onChange={onDateChange}
									/>

									<DatePicker id="plannedTime" name="plannedTime" placeholder="Select Time" errorMessage="This field is required."
										value={formValues.plannedTime} onChange={onDateChange} timeOnly
									/>

									<p><input placeholder="City" onInput={handleInputChange} name="city" className="form-control bg-white rounded-none border border-[#adadad]" required /></p>
									<p><input placeholder="Country" onInput={handleInputChange} name="country" className="form-control bg-white rounded-none border border-[#adadad]" required /></p>
									{/* <p><input placeholder="No. of Passengers" onInput={handleInputChange} name="numberOfPassengers" className="form-control bg-white rounded-none border border-[#adadad]" required /></p> */}

									<CounterInput id="numberOfPassengers" name="numberOfPassengers" placeholder="Number of Passengers" type='number' errorMessage="This field is required."
										value={formValues.numberOfPassengers}
										onChange={onTextChange}
									// validator={["PHONE_NUMBER"]}
									// isError={showFormErrors && formErrors.phoneNumber}
									/>

									<p className="ng-binding text-[#c3bd10] text-2xl"><b>Amount Payable:</b> Rs. {formValues.numberOfPassengers * 1000}</p>
									<div style={{ textAlign: 'right' }}>
										<button type="button" id="cabbooking-nextBtn" onClick={() => nextPrev(1)} className="cabbooking-button">Next</button>
									</div>
								</div>
								<div className={`cabbooking-tab ${currentTab === 1 ? 'active' : ''}`} style={{ display: currentTab === 1 ? 'block' : 'none' }}>
									<p><input placeholder="Your Name" onInput={handleInputChange} name="name" className="form-control bg-white rounded-none border border-[#adadad]" required /></p>
									<p><input placeholder="E-mail..." onInput={handleInputChange} name="email" className="form-control bg-white rounded-none border border-[#adadad]" required /></p>
									<p><input placeholder="Phone..." onInput={handleInputChange} name="phone" className="form-control bg-white rounded-none border border-[#adadad]" required /></p>
									<div style={{ overflow: 'auto' }}>
										<div style={{ float: 'left' }}>
											<button type="button" id="cabbooking-prevBtn" onClick={() => nextPrev(-1)} className="cabbooking-button1">Previous</button>
										</div>
										<div style={{ float: 'right' }}>
											<button type="submit" id="cabbooking-submitBtn" className="cabbooking-button">Submit</button>
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
