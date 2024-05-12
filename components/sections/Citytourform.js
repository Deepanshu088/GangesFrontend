import React, { useState } from 'react';
import DatePicker from '../shared/Input/DatePicker';
import useForm from '@/hooks/useForm';
import CounterInput from '../shared/Input/CounterInput';

const Cabbooking = () => {
  const { formValues, formErrors, onTextChange, onDateChange } = useForm({
    plannedDate: '',
    plannedTime: '',
    city: '',
    country: '',
    numberOfAdults: null,
    numberOfChild: null,
    name: '',
    email: '',
    phone: ''
  }, {});

  const [currentTab, setCurrentTab] = useState(0);

  // const nextPrev = (n) => {
  //   const inputs = document.querySelectorAll('.cabbooking-tab.active input[required]');
  //   let isValid = true;
  //   inputs.forEach(input => {
  //     if (!input.value.trim()) {
  //       isValid = false;
  //       input.classList.add('error');
  //     } else {
  //       input.classList.remove('error');
  //     }
  //   });

  //   if (!isValid) return;

  //   setCurrentTab(currentTab + n);
  // };
  
	const nextPrev = (n) => {
		let newValue = ((currentTab + n)  > 0) ? currentTab + n : 0;
		setCurrentTab(newValue);
	};

  const handleInputChange = (event) => {
    // event.target.className = '';
  };

  return (
    <section className="cabbooking-booking pt-10 pb-10 p-relative fix" style={{ paddingTop: '20px', paddingBottom: '20px', position: 'relative' }}>
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
          .error {
            border: 1px solid red; /* Add red border to highlight error */
          }
        `}
      </style>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 cabbooking-contact-bg02" style={{ paddingLeft: '20px' }}>
            <div className="section-title center-align">
            </div>
            <h2 className='mb-8'>City Tour</h2>
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

                  <CounterInput id="numberOfAdults" name="numberOfAdults" placeholder="Number of Adults" type='number' errorMessage="This field is required."
                    value={formValues.numberOfAdults}
                    onChange={onTextChange}
                  // validator={["PHONE_NUMBER"]}
                  // isError={showFormErrors && formErrors.phoneNumber}
                  />

                  <CounterInput id="numberOfChild" name="numberOfChild" placeholder="Number of Children" type='number' errorMessage="This field is required."
                    value={formValues.numberOfChild}
                    onChange={onTextChange}
                  // validator={["PHONE_NUMBER"]}
                  // isError={showFormErrors && formErrors.phoneNumber}
                  />

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
              <img src="images/facilities/cityTour/cityTour1.jpg" alt="img" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cabbooking;
