import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

export default function Profile() {
  const [isOpen, setOpen] = useState(false)
    
    return (
        <>
          <section className="food-section pt-0">
            <div className="auto-container">
              <div className="row">
                <div className="image-column col-xl-4 col-lg-4">
                  <div className="inner-column">
                    <div className="image-box">
                    <figure className="image wow fadeInUp">
                     <img src="images/feature-2.jpg" alt="" style={{ width: '100%', height: '100%' }} />
                    </figure>

                    </div>
                    <a onClick={() => setOpen(true)} className="play-now-two"><i className="icon fa fa-play" aria-hidden="true"></i><span className="ripple"></span></a>
                    <div className="quote-box">
                      <div className="icon-box"><i className="flaticon-quotation"></i></div>
                      <div className="text">Great hospitality is the key to Pride of Britain’s longstanding reputation for excellence.</div>
                    </div>
                  </div>
                </div>
                <div className="content-column col-xl-8">
                  <div className="inner-column">
                    <div className="sec-title"> 
                      <h2>Profile</h2>
                      <div className="text"> Kashi, Benaras or Varanasi is the oldest living city in the History of Mankind. This City is acknowledged as the cultural Capital of the Oriental part of the Globe. This is treated as an embodied divine. India, the nation with diversified culture has one unity or Common that is Varanasi where cultures from all the walks of this Country Congregated and accepted this City as their spiritual DESTINY.<br/><br/>
                      For more than two thousand years, people have been coming from different states of India to Varanasi with their Cultural heritage & lineage. This amalgamation of Oriental Cultures and life styles of west made this colossal city a panorama.<br/><br/>
                      Hotel Palace on Ganges has coined all distinct cultures of India and accordingly altogether forty two rooms under one Grand Heritage Hotel roof are designed and dedicated to each of those provincial cultures.<br/><br/>
                      Hotel Palace on Ganges has coined all distinct cultures of India and accordingly altogether forty two rooms under one Grand Heritage Hotel roof are designed and dedicated to each of those provincial cultures.<br/><br/> </div>
                      <div className="healthy-food">
                        <div className="food-list">
                          <h4 className="title">Restaurant</h4>
                          <ul>
                            <span>Ground floor</span>
                            <li>
      <i className="fa-regular fa-square-check"></i>
      <a href="/page-avadhroom">Avadh</a>
    </li>
    <li>
      <i className="fa-regular fa-square-check"></i>
      <a href="/page-nagalandroom">Nagaland</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-maharashroom">Maharashtra</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-himachalroom">Himachal</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-sakkimroom">Sakkim</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-bengalroom">Bengal</a>
    </li>
                      
                           
                          </ul>
                        </div>
                        <div className="food-list two">
                            <ul>
                            <span>First floor</span>
                            <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-colonialroom">Colonial</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-karnatakaroom">Karnataka</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-kashmirroom">Kashmir</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-goaroom">Goa</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-sanchirrom">Sanchi</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-rajputhana">Rajasthan</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-rajputhana">Rajaputhana</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-madhuroom">Madhubani</a>
    </li>
                           
                          </ul>
                        </div>

                        <div className="food-list two">
                            <ul>
                            <span>Second floor</span>
                            <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-colonialroom">Colonial</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-tamilnadu">Tamil nadu</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-orissaroom">Orissa</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-assam">Assam</a>
    </li>

    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-kerala">Kerala</a>
    </li> 
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-jodhpur">Jodhpur</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-gujarat">Gujarat</a>
    </li>
    <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-punjab">Punjab</a>
    </li>
                          </ul>
                        </div>
                        <div className="food-list two">
                            <ul>
                            <span>Third floor</span>
                            <li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-ganga"> Ganges view I</a>
    </li>
<li>
    <i className="fa-regular fa-square-check"></i>
      <a href="/page-ganga"> Ganges view II</a>
    </li>
    
                          </ul>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="FEGSV2bMNxA" onClose={() => setOpen(false)} />
        </>
    )
}
