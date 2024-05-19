import React from 'react';
import DatePicker from '../shared/Input/DatePicker';

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
                    {/* <div class="frm-field">
                        <input type="text" name="check-in" class="date-pick" placeholder="Check in" />
                        <img src="images/icons/mail.png" alt />
                    </div>

                    <div className="frm-field">
                      <input type="text" name="check-out" className="date-pick" placeholder="Check out" />
                      <img src="images/icons/mail.png" alt="" />
                    </div> */}

                    <DatePicker id="checkIn" name="checkIn" placeholder="Check in" errorMessage="This field is required." />
                    
                    <DatePicker id="checkOut" name="checkOut" placeholder="Check out" errorMessage="This field is required." />
                    <div className="frm-field">
                      <select placeholder="Adult">
                        <option>Adult</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                      <i className="fa fa-angle-down"></i>
                    </div>
                    <div className="frm-field">
                      <select>
                        <option>Children</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                      </select>
                      <i className="fa fa-angle-down"></i>
                    </div>
                    <div className="form-submit">
                      <button><a href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5OQ==&individual=true" className='text-white' >BOOK NOW</a></button>
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
                    <h4 className="title"><a href='tel:+91-7408423504'>+91-7408423504</a> <br/><a href='tel:+91-7408423511'>+91-7408423511</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
