import Link from 'next/link';
import React from 'react';

export default function ContactPage() {
    return (
        <>
          <section class="contact-details">
            <div class="container ">
              <div class="row">
                <div class="col-xl-7 col-lg-6">
                  <div class="sec-title">
                    <span class="sub-title before-none">Send us email</span>
                    <h2>Feel free to write</h2>
                  </div>
                  <form id="contact_form" name="contact_form" class="" action="#" method="post">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="mb-3">
                          <input name="form_name" class="form-control" type="text" placeholder="Enter Name"/>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb-3">
                          <input name="form_email" class="form-control required email" type="email" placeholder="Enter Email"/>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="mb-3">
                          <input name="form_subject" class="form-control required" type="text" placeholder="Enter Subject"/>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="mb-3">
                          <input name="form_phone" class="form-control" type="text" placeholder="Enter Phone"/>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <textarea name="form_message" class="form-control required" rows="7" placeholder="Enter Message"></textarea>
                    </div>
                    <div class="mb-5">
                      <input name="form_botcheck" class="form-control" type="hidden" value="" />
                      <button type="submit" class="theme-btn btn-style-one me-3" data-loading-text="Please wait..."><span class="btn-title">Send message</span></button>
                      <button type="reset" class="theme-btn btn-style-one bg-theme-color5"><span class="btn-title">Reset</span></button>
                    </div>
                  </form>
                </div>
                <div class="col-xl-5 col-lg-6">
                  <div class="contact-details__right">
                    <div class="sec-title">
                      <span class="sub-title before-none">Need any help?</span>
                      <h2>Get in touch with us</h2>
                      {/* <div class="text">Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.</div> */}
                    </div>
                    <ul class="list-unstyled contact-details__info">
                      <li>
                        <div class="icon">
                          <span class="lnr-icon-phone-plus"></span>
                        </div>
                        <div class="text">
                          <h6>Have any question?</h6>
                          <a href="tel:+91-7408423504"> +91-7408423504, +91-7408423511, <br/> +91-9984826656, +91-9198113594, <br/> +91-8765817841</a>
                        </div>
                      </li>
                      <li>
                        <div class="icon">
                          <span class="lnr-icon-envelope1"></span>
                        </div>
                        <div class="text">
                          <h6>Write email</h6>
                          <a href="mailto:info@palaceonganges.com">info@palaceonganges.com</a>
                        </div>
                      </li>
                      <li>
                        <div class="icon">
                          <span class="lnr-icon-location"></span>
                        </div>
                        <div class="text">
                          <h6>Visit anytime</h6>
                          <span>B-1/158, Assighat, Varanasi. Pin 221001</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="map-section">
            <iframe class="map w-100"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7214.940620912657!2d83.0007435532886!3d25.28839807765231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31edb80a9de3%3A0x614be1437579f848!2sPalace%20on%20Ganges-%20Varanasi!5e0!3m2!1sen!2sin!4v1710762308825!5m2!1sen!2sin" 
              className='w-full h-[500px] border-0'
              width="1500" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </>
    )
}
