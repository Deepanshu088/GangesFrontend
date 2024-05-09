import React, { useState } from 'react';
import Input from '../shared/Input/Input';

const Cabbooking = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const nextPrev = (n) => {
    // Validate required fields before proceeding to the next tab
    const inputs = document.querySelectorAll('.cabbooking-tab.active input[required]');
    let isValid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });

    if (!isValid) return; // If any required field is empty, do not proceed

    setCurrentTab(currentTab + n);
  };

  const handleInputChange = (event) => {
    event.target.className = '';
  };

  return (
    <section className="cabbooking-booking pt-10 pb-10 p-relative fix" style={{ paddingTop: '120px', paddingBottom: '120px', position: 'relative' }}>
      <style>
        {`
          .cabbooking-booking-form {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

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
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 cabbooking-contact-bg02" style={{ paddingLeft: '20px' }}>
            <div className="section-title center-align">
              <h2>Book A Cab</h2>
            </div>
            <p>To reserve the ride, please complete and submit the booking form.</p>
            <div className="w3layoutscontactagileits cabbooking-booking-form">
              <form id="cabbooking-regForm" action="/action_page.php">
                <div className={`cabbooking-tab ${currentTab === 0 ? 'active' : ''}`} style={{ display: currentTab === 0 ? 'block' : 'none' }}>
                  <Input
                    id="pickupPoint"
                    name="pickupPoint"
                    placeholder="Enter Pick Up Point"
                    // value={""}
                    // onChange={onTextChange}
                    // validator={["PHONE_NUMBER"]}
                    // label="Pick Up Point"
                    className="mb-4"
                    // isError={showFormErrors && formErrors.phoneNumber}
                    errorMessage="This field is required."
                  />

                  <Input
                    id="dropoffPoint"
                    name="dropoffPoint"
                    placeholder="Enter Drop Off Point"
                    // value={""}
                    // onChange={onTextChange}
                    // validator={["PHONE_NUMBER"]}
                    // label="Drop Off Point"
                    className="mb-4"
                    // isError={showFormErrors && formErrors.phoneNumber}
                    errorMessage="This field is required."
                  />
                  {/* <p><input placeholder="Pickup Point" onInput={handleInputChange} name="pickupPoint" className="cabbooking-input" required /></p> */}
                  {/* <p><input placeholder="Dropoff Point" onInput={handleInputChange} name="dropoffPoint" className="cabbooking-input" required /></p> */}

                  <Input
                    id="plannedDate"
                    name="plannedDate"
                    placeholder="Enter Drop Off Point"
                    value={"dd/mm/yyyy"}
                    // onChange={onTextChange}
                    // validator={["PHONE_NUMBER"]}
                    // label="Drop Off Point"
                    className="mb-4"
                    // isError={showFormErrors && formErrors.phoneNumber}
                    errorMessage="This field is required."
                  />

                  <Input
                    id="plannedTime"
                    name="plannedTime"
                    placeholder="Enter Drop Off Point"
                    value={"--:-- --"}
                    // onChange={onTextChange}
                    // validator={["PHONE_NUMBER"]}
                    // label="Drop Off Point"
                    className="mb-4"
                    // isError={showFormErrors && formErrors.phoneNumber}
                    errorMessage="This field is required."
                  />

                  {/* <p><input type="date" placeholder="Date" onInput={handleInputChange} name="date" className="cabbooking-input" required /></p>
                  <p><input type="time" placeholder="Time" onInput={handleInputChange} name="time" className="cabbooking-input" required /></p> */}


                  <Input
                    id="numberOfAdults"
                    name="numberOfAdults"
                    placeholder="Number of Adults"
                    // value={""}
                    // onChange={onTextChange}
                    // validator={["PHONE_NUMBER"]}
                    // label="Drop Off Point"
                    className="mb-4"
                    // isError={showFormErrors && formErrors.phoneNumber}
                    errorMessage="This field is required."
                  />

                  <Input
                    id="numberOfChild"
                    name="numberOfChild"
                    placeholder="Number of Children"
                    // value={""}
                    // onChange={onTextChange}
                    // validator={["PHONE_NUMBER"]}
                    // label="Drop Off Point"
                    className="mb-4"
                    // isError={showFormErrors && formErrors.phoneNumber}
                    errorMessage="This field is required."
                  />

                  {/* <p><input placeholder="Number of Adults" onInput={handleInputChange} name="numberOfAdults" className="cabbooking-input" required /></p>
                  <p><input placeholder="Number of Child" onInput={handleInputChange} name="numberOfChild" className="cabbooking-input" required /></p> */}
                  <div style={{ textAlign: 'right' }}>
                    <button type="button" id="cabbooking-nextBtn" onClick={() => nextPrev(1)} className="cabbooking-button">Next</button>
                  </div>
                </div>
                <div className={`cabbooking-tab ${currentTab === 1 ? 'active' : ''}`} style={{ display: currentTab === 1 ? 'block' : 'none' }}>
                  <p><input placeholder="Your Name" onInput={handleInputChange} name="name" className={`w-full text-base font-normal p-4 py-3 rounded-md bg-gray-100 border border-primaryBorderColor focus:border-primaryBorderColor`} style={{width: "100%"}}  required /></p>
                  <p><input placeholder="E-mail..." onInput={handleInputChange} name="email" className={`w-full text-base font-normal p-4 py-3 rounded-md bg-gray-100 border border-primaryBorderColor focus:border-primaryBorderColor`} style={{width: "100%"}}  required /></p>
                  <p><input placeholder="Phone..." onInput={handleInputChange} name="phone" className={`w-full text-base font-normal p-4 py-3 rounded-md bg-gray-100 border border-primaryBorderColor focus:border-primaryBorderColor`} style={{width: "100%"}}  required /></p>
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
                  <span className={`cabbooking-step ${currentTab === 0 ? 'active' : ''}`}></span>
                  <span className={`cabbooking-step ${currentTab === 1 ? 'active' : ''}`}></span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="booking-img">
              <img src="images/cab.jpg" alt="img" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cabbooking;
