import Link from 'next/link';
import React from 'react';

export default function Ganga() {
  return (
    <>
      <section className="blog-details pt-120 pb-120">
        <div className="auto-container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="testimonial-block-home5 mb-50">
                <div className="inner-box">
                  <div className="image-box"><figure className="image"><img className="w-100" src="/images/room-1.jpg" alt=""/></figure></div>
                </div>
              </div>
              <div className="room-details__left">
                <div className="wrapper">
                  <h3>Description of Room</h3>
                  <p className="text">With the motive to rob the golden treasury of india number of people inwaded in last five thousand year</p>
                  <div className="row justify-content-center">
                    <div className="col-xl-12">
                      <div className="room-details__content-right mb-40 mt-20">
                        <div className="room-details__details-box">
                          <div className="row">
                            <div className="col-6 col-md-3">
                              <p className="text mb-0">Rooms Bed</p>
                              <h6>2 Single Bed</h6>
                            </div>
                            <div className="col-6 col-md-3">
                              <p className="text mb-0">Occupancy</p>
                              <h6>Three Persons</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-40">
                  <h4>Room Facilities</h4>
                  <div className="row room-facility-list mb-40">
                    <div className="col-sm-6 col-xl-4">
                      <div className="list-one d-flex align-items-center me-sm-4 mb-3">
                        <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="far fa-air-conditioner"></i></div>
                        <h6 className="title m-0">Air Conditionar</h6>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      <div className="list-one d-flex align-items-center me-sm-4 mb-3">
                        <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="far fa-parking"></i></div>
                        <h6 className="title m-0">Paid Parking</h6>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                      <div className="list-one d-flex align-items-center me-sm-4 mb-3">
                        <div className="icon text-theme-color1 mr-10 flex-shrink-0"><i className="fas fa-wifi"></i></div>
                        <h6 className="title m-0">Free WI Fi</h6>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">
                <div className="sidebar__post mb-30">
                  
                    <div className="mb-3">
                      <input name="form_botcheck" className="form-control" type="hidden" value=""/>
                      <button type="submit" className="theme-btn btn-style-one w-100" data-loading-text="Please wait..."><span className="btn-title">MAKE RESERVATION</span></button>
                    </div>
            
                </div>
                <div className="sidebar__single sidebar__post">
                  <h3 className="sidebar__title">Compare Room</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    <li>
                      <div className="sidebar__post-image"> <img src="/images/room-1.jpg" alt=""/> </div>
                      <div className="sidebar__post-content">
                        <h3> <span className="sidebar__post-content-meta"><i className="far fa-door-open"></i>Heritage Luxury</span> <Link href="">₹10000 / NIGHT</Link>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image"> <img src="/images/room-2.jpg" alt=""/> </div>
                      <div className="sidebar__post-content">
                        <h3> <span className="sidebar__post-content-meta"><i className="far fa-door-open"></i>Heritage Luxury</span> <Link href="">₹10000 / NIGHT</Link> </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image"> <img src="/images/room-3.jpg" alt=""/> </div>
                      <div className="sidebar__post-content">
                        <h3> <span className="sidebar__post-content-meta"><i className="far fa-door-open"></i>Heritage Luxury</span> <Link href="">₹10000 / NIGHT</Link> </h3> 
                      </div>
                    </li>
                  </ul>
                </div><br/><br/>

                <div className="p-4 p-lg-5 bg-light">
    <h4 className="mt-0">Send Query</h4>
    <form id="contact_form" name="contact_form" className="" action="includes/sendmail.php" method="post">
        <div className="mb-3">
            
            <input name="form_name" id="name" className="form-control bg-white" type="text" placeholder="Enter Name"/>
        </div>
        <div className="mb-3">
            
            <input name="form_email" id="email" className="form-control bg-white required email" type="email" placeholder="Enter Email"/>
        </div>
        <div className="mb-3">
            
            <input name="form_phone" id="phone" className="form-control bg-white required phone" type="number" placeholder="Enter Phone"/>
        </div>
        <div className="mb-3">
            
            <textarea name="form_message" id="message" className="form-control bg-white required" rows="5" placeholder="Enter Message"></textarea>
        </div>
        <div className="mb-0">
            <input name="form_botcheck" className="form-control" type="hidden" value=""/>
            <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title">Submit </span></button>
        </div>
    </form>
</div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
