import Link from 'next/link';
import React from 'react';

export default function Form2() {
    
    return (
        <>
        <section className="call-to-action pt-0">
          <div className="auto-container">
            <div className="row">
              <div className="content-colum col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="sec-title"> <span className="sub-title">Call to action</span>
                    <h2>The Thin Escape.</h2>
                  </div>

                  <div className="call-block">
                    <div className="inner-box">
                      <div className="icon-box"> <i className="flaticon-car"></i> </div>
                      <h4 className="title">Transportation facility</h4>
                      <div className="text">Paid transportation facility is available at the hotel for the convenience of our guests.</div>
                    </div>
                  </div>

                  <div className="call-block">
                    <div className="inner-box">
                      <div className="icon-box"> <i className="flaticon-fast-food"></i> </div>
                      <h4 className="title">Essence of Healthy, Hygienic Dining</h4>
                      <div className="text">Our chefs skillfully blend local ingredients with global influences to create a menu that delights the senses.</div>
                    </div>
                  </div>

                  <div className="call-block">
                    <div className="inner-box">
                      <div className="icon-box"> <i className="flaticon-swimming-pool-1"></i> </div>
                      <h4 className="title">Ganges View</h4>
                      <div className="text">Enjoy mesmerizing views of the sacred Ganges River from the comfort of your room.</div>
                    </div>
                  </div>
                  <div className="btn-box"> <Link href="" className="read-more">MAKE A RESERVATION</Link> </div>
                </div>
              </div>
              <div className="col-lg-6 booking-form-column">
                <div className="inner-column wow fadeInRight" data-wow-delay="200ms">
                  <div className="sec-title"> <span className="sub-title">ROOMS & SUITES</span>
                    <h2>Hotel Booking </h2>
                  </div>
                  <form className="bk-form">
                    <div className="frm-field">
                      <input type="text" name="check-in" className="date-pick" placeholder="Check in" />
                      <img src="images/icons/mail.png" alt="" /> </div>
                    <div className="frm-field">
                      <input type="text" name="check-in" className="date-pick" placeholder="Check out" />
                      <img src="images/icons/mail.png" alt="" /> </div>
                    <div className="frm-field">
                      <select>
                        <option>Adult</option>
                        <option>Adult</option>
                        <option>Adult</option>
                        <option>Adult</option>
                      </select>
                      <i className="fa fa-angle-down"></i> </div>
                    <div className="frm-field">
                      <select>
                        <option>Children</option>
                        <option>Children</option>
                        <option>Children</option>
                        <option>Children</option>
                      </select>
                      <i className="fa fa-angle-down"></i> </div>
                    <div className="form-submit">
                      <button type="submit">Check Availability</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
