import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import { FirstFloorRooms, GroundFloorRooms, SecondFloorRooms, ThirdFloorRooms } from "@/constants/RoomDetailConstants";

const OurRooms = () => {
    return <div>
        <Layout>


            {/* <section class="page-title" style={{ backgroundImage: "url(images/background/page-title-bg.png)" }}>
                <div class="auto-container">
                    <div class="title-outer text-center">
                        <h1 class="title">Our rooms</h1>
                        <ul class="page-breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li>Our Rooms</li>
                        </ul>
                    </div>
                </div>
            </section> */}


            <PageTitle pageName="Our Rooms" />


            <section class="rooms-section pb-20">
                <div class="md:mx-10 lg:mx-[5vw] m-auto">
                    <div class="row">
                        <div class="sec-title">
                            <h2>Ganga River View (Third Floor)<br /></h2>
                        </div>

                        {
                            ThirdFloorRooms.map(item =>
                                <div class="room-block col-lg-6 col-md-6">
                                    <div class="inner-box wow fadeIn" data-wow-delay="200ms">
                                        <div class="image-box">
                                            <figure class="image-2 overlay-anim"><img src={item.coverPhoto} alt="" className="h-[50vh] md:h-[60vh] w-full object-cover" /></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6 class="title"><a href={`/room-details/${item.roomId}`}>{item.name}</a></h6>
                                            <span class="price">₹10000 / NIGHT</span>
                                        </div>
                                        <div class="box-caption">
                                            <a href="https://staahmax.staah.net/be/indexpack?propertyId=MTA5OQ&individual=true&roomTypeId=100333"
                                                title class="book-btn">book now</a>
                                            <ul class="bx-links">
                                                <li><a title><i class="fa fa-wifi"></i></a></li>
                                                <li><a title><i class="fa fa-bed"></i></a></li>
                                                <li><a title><i class="fa fa-bath"></i></a></li>
                                                <li><a title><i class="fa fa-shower"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </section>


            <section class="rooms-section pb-20">
                <div class="md:mx-10 lg:mx-[5vw] m-auto">
                    <div class="row">
                        <div class="sec-title">
                            <h2>Heritage luxury (Ground Floor)<br />
                            </h2>
                        </div>

                        {
                            GroundFloorRooms.map(item =>
                                <div class="room-block col-lg-4 col-md-4">
                                    <div class="inner-box wow fadeIn">
                                        <div class="image-box">
                                            <figure class="image-2 overlay-anim"><img src={item.coverPhoto} alt="" className="h-[50vh] md:h-[60vh] w-full object-cover" /></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6 class="title"><a href={`/room-details/${item.roomId}`}>{item.name}</a></h6>

                                            <span class="price">₹10000 / NIGHT</span>
                                        </div>
                                        <div class="box-caption">

                                            <a href="https://staahmax.staah.net/be/indexpack?propertyId=MTA5OQ&individual=true&roomTypeId=100333"
                                                title class="book-btn">book now</a><br />

                                            <ul class="bx-links">
                                                <li><a title><i class="fa fa-wifi"></i></a></li>
                                                <li><a title><i class="fa fa-bed"></i></a></li>
                                                <li><a title><i class="fa fa-bath"></i></a></li>
                                                <li><a title><i class="fa fa-shower"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </section>


            <section class="rooms-section pb-100">
                <div class="md:mx-10 lg:mx-[5vw] m-auto">
                    <div class="row">
                        <div class="sec-title">
                            <h2>Heritage luxury (Upper Floor)<br />
                            </h2>
                        </div>
                        {
                            FirstFloorRooms.map(item =>
                                <div class="room-block col-lg-4 col-md-4">
                                    <div class="inner-box wow fadeIn">
                                        <div class="image-box">
                                            <figure class="image-2 overlay-anim"><img src={item.coverPhoto} alt="" className="h-[50vh] md:h-[60vh] w-full object-cover" /></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6 class="title"><a href={`/room-details/${item.roomId}`}>{item.name}</a></h6>

                                            <span class="price">₹10000 / NIGHT</span>
                                        </div>
                                        <div class="box-caption">

                                            <a href="https://staahmax.staah.net/be/indexpack?propertyId=MTA5OQ&individual=true&roomTypeId=100333"
                                                title class="book-btn">book now</a><br />

                                            <ul class="bx-links">
                                                <li><a title><i class="fa fa-wifi"></i></a></li>
                                                <li><a title><i class="fa fa-bed"></i></a></li>
                                                <li><a title><i class="fa fa-bath"></i></a></li>
                                                <li><a title><i class="fa fa-shower"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>


            <section class="rooms-section pb-100">
                <div class="md:mx-10 lg:mx-[5vw] m-auto">
                    <div class="row">
                        <div class="sec-title">
                            <h2>Heritage luxury (Second Floor)<br />
                            </h2>
                        </div>

                        {
                            SecondFloorRooms.map(item =>
                                <div class="room-block col-lg-4 col-md-4">
                                    <div class="inner-box wow fadeIn">
                                        <div class="image-box">
                                            <figure class="image-2 overlay-anim"><img src={item.coverPhoto} alt="" className="h-[50vh] md:h-[60vh] w-full object-cover" /></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6 class="title"><a href={`/room-details/${item.roomId}`}>{item.name}</a></h6>

                                            <span class="price">₹10000 / NIGHT</span>
                                        </div>
                                        <div class="box-caption">

                                            <a href="https://staahmax.staah.net/be/indexpack?propertyId=MTA5OQ&individual=true&roomTypeId=100333"
                                                title class="book-btn">book now</a><br />

                                            <ul class="bx-links">
                                                <li><a title><i class="fa fa-wifi"></i></a></li>
                                                <li><a title><i class="fa fa-bed"></i></a></li>
                                                <li><a title><i class="fa fa-bath"></i></a></li>
                                                <li><a title><i class="fa fa-shower"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </Layout>
    </div >
}

export default OurRooms;