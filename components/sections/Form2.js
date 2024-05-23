import Link from 'next/link';
import React from 'react';
import DatePicker from '../shared/Input/DatePicker';

export default function Form2() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  }
    
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
                      <h4 className="title">River Ganga View</h4>
                      <div className="text">Immerse yourself in the spiritual heart of Varanasi with our rooms offering unobstructed views of the Ganges River. These rooms provide a serene space to witness the vibrant cultural activities and rituals performed on the ghats.</div>
                    </div>
                  </div>
                  <div className="btn-box"> <Link href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MTA5OQ==&individual=true" className="read-more whitespace-nowrap px-10 w-auto">MAKE A RESERVATION</Link> </div>
                </div>
              </div>
              <div className="col-lg-6 booking-form-column">
                <div className="inner-column wow fadeInRight" data-wow-delay="200ms">
                  <div className="sec-title"> <span className="sub-title">ROOMS & SUITES</span>
                    <h2>Hotel Booking </h2>
                  </div>
                  <form className="bk-form" onSubmit={onSubmitHandler}>
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
            </div>
          </div>
        </section>
        </>
    )
}
