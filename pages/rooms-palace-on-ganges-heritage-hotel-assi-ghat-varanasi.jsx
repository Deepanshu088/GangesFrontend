import SEOSetup from "@/components/SEOSetup";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";
import { FirstFloorRooms, GroundFloorRooms, SecondFloorRooms, ThirdFloorRooms } from "@/constants/RoomDetailConstants";
import useHttp from "@/hooks/useHttp";
import { fetchAllRooms } from "@/redux/slices/roomSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const OurRooms = () => {
	const { groundFloor, firstFloor, secondFloor, thirdFloor } = useSelector(state => state.room);
    const dispatch = useDispatch();
    const { apiService, isLoading } = useHttp();
    
	useEffect(() => {
		dispatch(fetchAllRooms(apiService))
	}, [])

    const upperFloor = [  ...firstFloor, ...secondFloor ];

    return <div>
        <SEOSetup
            title="Our Rooms | Palace on Ganges Heritage Hotel at Assi Ghat, Varanasi"
            description="Explore the rooms at Palace on Ganges Heritage Hotel in Varanasi. Situated on Assi Ghat, our heritage hotel offers a range of comfortable and uniquely decorated rooms with stunning views of the Ganges River. Book your stay now."
            keywords="Rooms at Palace on Ganges Heritage Hotel, Heritage Hotel Varanasi, Assi Ghat Varanasi, Ganges River Hotel Rooms, Varanasi Heritage Accommodation, Palace on Ganges, Assi Ghat Hotel Rooms, Varanasi Hotel Stay"
        />

        <Layout>
            <PageTitle pageName="Our Rooms" />

            <section class="rooms-section pb-20">
                <div class="md:mx-10 lg:mx-[5vw] m-auto">
                    <div class="row">
                        <div class="sec-title">
                            <h2>GANGES VIEW<br /></h2><br/>
                            <div className="new-text">Designed for spiritual seekers and nature lovers, the Ganga River View rooms offer a tranquil retreat. These rooms feature direct views of the sacred Ganges River, allowing guests to observe the spiritual rituals and daily life of Varanasi from a peaceful vantage point. The soothing sounds of the river and the serene views provide a perfect backdrop for meditation or relaxation. The decor is subtly crafted to complement the natural beauty outside, with touches of local craftsmanship that enhance the spiritual experience.</div>
                        </div>
                        {
                            thirdFloor && thirdFloor.length > 0 ?
                            thirdFloor.map(item =>
                                <div class="room-block col-lg-6 col-md-6">
                                    <div class="inner-box wow fadeIn" data-wow-delay="200ms">
                                        <div class="image-box">
                                            <figure class="image-2 overlay-anim"><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.gallery[0]}`} alt="" className="h-[50vh] md:h-[60vh] w-full object-cover" /></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6 class="title"><a href={`/room-details/${item.roomId}`}>{item.name}</a></h6>
                                            {/* <span class="price">₹10000 / NIGHT</span> */}
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
                            :
                            <div className="m-auto text-center font-bold text-3xl bg-orange-200 py-6 rounded-lg">
                                {
                                    isLoading ? "Rooms are loading..." : "No Rooms Found."
                                }
                            </div>
                        }

                    </div>
                </div>
            </section>

            <section class="rooms-section pb-100">
                <div class="md:mx-10 lg:mx-[5vw] m-auto">
                    <div class="row">
                        <div class="sec-title">
                            <h2>UPPER LEVEL HERITAGE DELUXE<br />
                            </h2><br/>
                            <div className="new-text">The Upper Level rooms are again a nod to India's regal past, embodying a more spacious and luxurious environment. The rooms feature intricate carvings and lush textiles reminiscent of the country's royal history. Each piece in the room—from the plush bedding to the ornate decorations—is chosen to reflect the grandeur of bygone eras. Equipped with the latest technological amenities, these rooms offer a royal retreat perfect for those who appreciate the finer things in life while soaking in the historical ambiance.</div>
                        </div>
                        {
                            upperFloor && upperFloor.length > 0 ? upperFloor.map(item =>
                                <div class="room-block col-lg-4 col-md-4">
                                    <div class="inner-box wow fadeIn">
                                        <div class="image-box">
                                            <figure class="image-2 overlay-anim"><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.gallery[0]}`} alt="" className="h-[50vh] md:h-[60vh] w-full object-cover" /></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6 class="title"><a href={`/room-details/${item.roomId}`}>{item.name}</a></h6>

                                            {/* <span class="price">₹10000 / NIGHT</span> */}
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
                            :
                            <div className="m-auto text-center font-bold text-3xl bg-orange-200 py-6 rounded-lg">
                            {
                                isLoading ? "Rooms are loading..." : "No Rooms Found."
                            }
                            </div>
                        }
                    </div>
                </div>
            </section>


            <section class="rooms-section pb-100">
                <div class="md:mx-10 lg:mx-[5vw] m-auto">
                    <div class="row">
                        <div class="sec-title">
                            <h2>LOWER LEVEL HERITAGE DELUXE<br />
                            </h2><br/>
                            <div className="new-text">Our lower level rooms are designed to be a gateway to the traditional artistry of states accross India. Decorated with local handicrafts of several states of India, textiles, and artworks, these rooms provide a warm and inviting ambiance. The furnishings, while comfortable and contemporary, complement the aesthetic of the rich cultural motifs, ensuring a restful and visually appealing environment. Ideal for travellers looking to absorb the Indian culture, these rooms also come equipped with all modern amenities necessary for comfort kiand convenience.</div>
                        </div>

                        {
                            groundFloor && groundFloor.length > 0 ? groundFloor.map(item =>
                                <div class="room-block col-lg-4 col-md-4">
                                    <div class="inner-box wow fadeIn">
                                        <div class="image-box">
                                            <figure class="image-2 overlay-anim"><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.gallery[0]}`} alt="" className="h-[50vh] md:h-[60vh] w-full object-cover" /></figure>
                                        </div>
                                        <div class="content-box">
                                            <h6 class="title"><a href={`/room-details/${item.roomId}`}>{item.name}</a></h6>

                                            {/* <span class="price">₹10000 / NIGHT</span> */}
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
                            :
                            <div className="m-auto text-center font-bold text-3xl bg-orange-200 py-6 rounded-lg">
                            {
                                isLoading ? "Rooms are loading..." : "No Rooms Found."
                            }
                            </div>
                        }
                    </div>
                </div>
            </section>
        </Layout>
    </div >
}

export default OurRooms;