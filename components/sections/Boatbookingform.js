import React, { useState } from 'react';

const Cabbooking = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const [formValues, setFormValues] = useState({
    date: '',
    time: '',
    city: '',
    country: '',
    numberOfPassengers: '',
    name: '',
    email: '',
    phone: ''
  });

  const nextPrev = (n) => {
    // If moving to the next tab
    if (n === 1) {
      // Check if all required fields in the current tab are filled
      const currentTabInputs = document.querySelectorAll('.cabbooking-tab.active input[required]');
      let isValid = true;
      currentTabInputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });

      // If all required fields are filled, move to the next tab
      if (isValid) {
        setCurrentTab(currentTab + n);
      }
    } else {
      setCurrentTab(currentTab + n);
    }
  };

  const handleInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    event.target.className = '';
  };

  return (
    <section className="cabbooking-booking pt-10 pb-10 p-relative fix" style={{ paddingTop: '20px', paddingBottom: '20px', position: 'relative' }}>
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
                  <p><input type="date" placeholder="Date" onInput={handleInputChange} name="date" className="cabbooking-input" required /></p>
                  <p><input type="time" placeholder="Time" onInput={handleInputChange} name="time" className="cabbooking-input" required /></p>
                  <p><input placeholder="City" onInput={handleInputChange} name="city" className="cabbooking-input" required /></p>
                  <p><input placeholder="Country" onInput={handleInputChange} name="country" className="cabbooking-input" required /></p>
                  <p><input placeholder="No. of Passengers" onInput={handleInputChange} name="numberOfPassengers" className="cabbooking-input" required /></p>
                  <span>Amount Payable: Rs. 1000</span>
                  <div style={{ textAlign: 'right' }}>
                    <button type="button" id="cabbooking-nextBtn" onClick={() => nextPrev(1)} className="cabbooking-button">Next</button>
                  </div>
                </div>
                <div className={`cabbooking-tab ${currentTab === 1 ? 'active' : ''}`} style={{ display: currentTab === 1 ? 'block' : 'none' }}>
                  <p><input placeholder="Your Name" onInput={handleInputChange} name="name" className="cabbooking-input" required /></p>
                  <p><input placeholder="E-mail..." onInput={handleInputChange} name="email" className="cabbooking-input" required /></p>
                  <p><input placeholder="Phone..." onInput={handleInputChange} name="phone" className="cabbooking-input" required /></p>
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
              <img src="images/boat6.jpg" alt="img" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cabbooking;
