import React from 'react';

export default function Form() {
    
    return (
        <>
        <section className="booking-section">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6 booking-form-column wow fadeInUp">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">ROOMS & SUITES</span>
                    <h2>Hotel Booking </h2>
                  </div>
                  <form className="bk-form">
                    fdsf
                    <div class="frm-field">
                        <input type="text" name="check-in" class="date-pick" placeholder="Check out" />
                        <img src="images/icons/mail.png" alt />
                    </div>

                    <div className="frm-field">
                      <input type="text" name="check-in" className="date-pick" placeholder="Check out" />
                      <img src="images/icons/mail.png" alt="" />
                    </div>
                    <div className="frm-field">
                      <select>
                        <option>Adult</option>
                        <option>Adult</option>
                        <option>Adult</option>
                        <option>Adult</option>
                      </select>
                      <i className="fa fa-angle-down"></i>
                    </div>
                    <div className="frm-field">
                      <select>
                        <option>Children</option>
                        <option>Children</option>
                        <option>Children</option>
                        <option>Children</option>
                      </select>
                      <i className="fa fa-angle-down"></i>
                    </div>
                    <div className="form-submit">
                      <button type="submit">Book Now</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 booking-content-column wow fadeInRight" data-wow-delay="200ms">
                <div className="inner-column">
                  <div className="sec-title white">
                  <span className="sub-title" style={{ color: 'white' }}>OUR HOTEL</span>
                    <h2>Check Availability </h2>
                  </div>
                  <p style={{ color: 'white' , fontSize: '17px' }}>Our heritage hotel in Varanasi offers a breathtaking view of the Ganges, providing a tranquil retreat amidst the bustling city. Experience the rich history and culture of Varanasi while enjoying modern comforts and impeccable service..</p>
                  <p style={{ color: 'white' , fontSize: '17px'}}> Our elegant rooms, delectable cuisine, and serene ambiance ensure a truly unforgettable stay</p>
                  <div className="contact-info">
                    <div className="icon-box"><i className="flaticon-customer-service"></i></div>
                    <span><a href='https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5OQ==&individual=true' className='text-white'>Book Now</a></span>
                    <h4 className="title">+91-7408423504 <br/>+91-7408423511</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
