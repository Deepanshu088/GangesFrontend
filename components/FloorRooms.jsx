import useHttp from "@/hooks/useHttp";
import { fetchAllRooms } from "@/redux/slices/roomSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const FloorRooms = ({ floor }) => {
    const { groundFloor, firstFloor, secondFloor, thirdFloor } = useSelector(state => state.room);
    const dispatch = useDispatch();
    const { apiService, isLoading } = useHttp();

    useEffect(() => {
        dispatch(fetchAllRooms(apiService))
    }, [])

    let roomsList = [...groundFloor, ...firstFloor, ...secondFloor, ...thirdFloor];
    roomsList = roomsList.filter(item => item.floor == floor);

    if (!roomsList || !(roomsList.length > 0)) {
        return <div className="m-auto text-center font-bold text-3xl bg-orange-200 py-6 rounded-lg">
            {
                isLoading ? "Rooms are loading..." : "No Rooms Found."
            }
        </div>
    }

    return <div className="md:mx-10 lg:mx-[5vw] m-auto mt-20">
        <div className="row">
            {
                roomsList.map(item =>
                    <div className="room-block col-lg-6 col-md-6 col-sm-15">
                        <div className="inner-box wow fadeIn">
                            <div className="image-box">
                                <figure class="image-2 overlay-anim"><img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.gallery[0]}`} alt="" className="lg:h-[60vh] w-full object-cover" /></figure>
                            </div>
                            <div className="content-box">
                                <h6 className="title" style={{ marginRight: '30px' }}><Link href={`/room-details/${item.roomId}`}>{item.name}</Link></h6>
                                {/* <span className="price" style={{ marginRight: '30px' }}>₹10000 / NIGHT</span> */}
                            </div>
                            <div className="box-caption">
                                <Link href="https://staahmax.staah.net/be/indexpack?propertyId=MTA5OQ&individual=true&roomTypeId=100333" title="" className="book-btn" style={{ fontSize: '12px' }}>book now</Link>
                                <ul className="bx-links">
                                    <li><i className="fa fa-wifi"></i></li>
                                    <li><i className="fa fa-bed"></i></li>
                                    <li><i className="fa fa-bath"></i></li>
                                    <li><i className="fa fa-shower"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    </div>
}

export default FloorRooms;