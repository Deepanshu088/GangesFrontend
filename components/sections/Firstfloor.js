import React from 'react';
import Link from 'next/link'; // Import Link from Next.js for navigation

export default function firstfloor() {
  return (
    <div className="room-container" style={{ marginTop: '80px', marginLeft: '50px', marginRight: '50px' }}>
      {/* Add some space above the first row */}
      <div className="spacer" style={{ height: '20px' }}></div>
    <div className="row">

    <div className="room-block col-lg-6 col-md-6 col-sm-15">
      <div className="inner-box wow fadeIn">
        <div className="image-box">
          <figure className="image-2 overlay-anim"><img src="images/room-1.jpg" alt=""/></figure>
        </div>
        <div className="content-box">
        <h6 className="title" style={{ marginRight: '30px' }}><Link href="/page-avadhroom">Avadh Room</Link></h6>
        <span className="price" style={{ marginRight: '30px' }}>₹10000  / NIGHT</span>
        </div>
        <div className="box-caption">
        <Link href="/room-details" title="" className="book-btn" style={{ fontSize: '12px' }}>book now</Link>
          <ul className="bx-links">
            <li><Link href="/room-details" title=""><i className="fa fa-wifi"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bed"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bath"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-shower"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="room-block col-lg-6 col-md-6 col-sm-15">
      <div className="inner-box wow fadeIn">
        <div className="image-box">
          <figure className="image-2 overlay-anim"><img src="images/room-1.jpg" alt=""/></figure>
        </div>
        <div className="content-box">
          <h6 className="title" style={{ marginRight: '30px' }}><Link href="/page-karnatakaroom">Karnataka Room</Link></h6>
          <span className="price" style={{ marginRight: '30px' }}>₹10000  / NIGHT</span>
        </div>
        <div className="box-caption">
        <Link href="/room-details" title="" className="book-btn" style={{ fontSize: '12px' }}>book now</Link>
          <ul className="bx-links">
            <li><Link href="/room-details" title=""><i className="fa fa-wifi"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bed"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bath"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-shower"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="room-block col-lg-6 col-md-6 col-sm-15">
      <div className="inner-box wow fadeIn">
        <div className="image-box">
          <figure className="image-2 overlay-anim"><img src="images/room-1.jpg" alt=""/></figure>
        </div>
        <div className="content-box">
          <h6 className="title" style={{ marginRight: '30px' }}><Link href="/page-kashmirroom">Kashmir Room</Link></h6>
          <span className="price" style={{ marginRight: '30px' }}>₹10000  / NIGHT</span>
        </div>
        <div className="box-caption">
        <Link href="/room-details" title="" className="book-btn" style={{ fontSize: '12px' }}>book now</Link>
          <ul className="bx-links">
            <li><Link href="/room-details" title=""><i className="fa fa-wifi"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bed"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bath"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-shower"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="room-block col-lg-6 col-md-6 col-sm-12">
      <div className="inner-box wow fadeIn">
        <div className="image-box">
          <figure className="image-2 overlay-anim"><img src="images/room-1.jpg" alt=""/></figure>
        </div>
        <div className="content-box">
          <h6 className="title" style={{ marginRight: '30px' }}><Link href="/page-goaroom">Goa Room</Link></h6>
          <span className="price" style={{ marginRight: '30px' }}>₹10000  / NIGHT</span>
        </div>
        <div className="box-caption">
        <Link href="/room-details" title="" className="book-btn" style={{ fontSize: '12px' }}>book now</Link>
          <ul className="bx-links">
            <li><Link href="/room-details" title=""><i className="fa fa-wifi"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bed"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bath"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-shower"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="room-block col-lg-6 col-md-6 col-sm-12">
      <div className="inner-box wow fadeIn">
        <div className="image-box">
          <figure className="image-2 overlay-anim"><img src="images/room-1.jpg" alt=""/></figure>
        </div>
        <div className="content-box">
          <h6 className="title" style={{ marginRight: '30px' }}><Link href="/page-sanchiroom">Sanchi Room</Link></h6>
          <span className="price" style={{ marginRight: '30px' }}>₹10000  / NIGHT</span>
        </div>
        <div className="box-caption">
        <Link href="/room-details" title="" className="book-btn" style={{ fontSize: '12px' }}>book now</Link>
          <ul className="bx-links">
            <li><Link href="/room-details" title=""><i className="fa fa-wifi"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bed"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bath"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-shower"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="room-block col-lg-6 col-md-6 col-sm-12">
      <div className="inner-box wow fadeIn" data-wow-delay="200ms">
        <div className="image-box">
          <figure className="image-2 overlay-anim"><img src="images/room-2.jpg" alt=""/></figure>
        </div>
        <div className="content-box">
          <h6 className="title" style={{ marginRight: '30px' }}><Link href="/page-rajputhana">Rajputhana Room</Link></h6>
          <span className="price" style={{ marginRight: '30px' }}>₹10000  / NIGHT</span>
        </div>
        <div className="box-caption">
        <Link href="/room-details" title="" className="book-btn" style={{ fontSize: '12px' }}>book now</Link>
          <ul className="bx-links">
            <li><Link href="/room-details" title=""><i className="fa fa-wifi"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bed"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bath"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-shower"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="room-block col-lg-6 col-md-6 col-sm-12">
      <div className="inner-box wow fadeIn" data-wow-delay="200ms">
        <div className="image-box">
          <figure className="image-2 overlay-anim"><img src="images/room-2.jpg" alt=""/></figure>
        </div>
        <div className="content-box">
          <h6 className="title" style={{ marginRight: '30px' }}><Link href="/page-madhuroom">Madhubani Room</Link></h6>
          <span className="price" style={{ marginRight: '30px' }}>₹10000  / NIGHT</span>
        </div>
        <div className="box-caption">
        <Link href="/room-details" title="" className="book-btn" style={{ fontSize: '12px' }}>book now</Link>
          <ul className="bx-links">
            <li><Link href="/room-details" title=""><i className="fa fa-wifi"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bed"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bath"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-shower"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="room-block col-lg-6 col-md-6 col-sm-12">
      <div className="inner-box wow fadeIn" data-wow-delay="200ms">
        <div className="image-box">
          <figure className="image-2 overlay-anim"><img src="images/room-2.jpg" alt=""/></figure>
        </div>
        <div className="content-box">
          <h6 className="title" style={{ marginRight: '30px' }}><Link href="/room-details">Rajputana Room</Link></h6>
          <span className="price" style={{ marginRight: '30px' }}>₹10000  / NIGHT</span>
        </div>
        <div className="box-caption">
        <Link href="/room-details" title="" className="book-btn" style={{ fontSize: '12px' }}>book now</Link>
          <ul className="bx-links">
            <li><Link href="/room-details" title=""><i className="fa fa-wifi"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bed"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-bath"></i></Link></li>
            <li><Link href="/room-details" title=""><i className="fa fa-shower"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
  </div>
)
}
