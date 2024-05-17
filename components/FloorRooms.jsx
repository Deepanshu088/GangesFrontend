import Link from "next/link";

const { FirstFloorRooms, GroundFloorRooms, SecondFloorRooms, ThirdFloorRooms } = require("@/constants/RoomDetailConstants")

const FloorRooms = ({ floor }) => {
    let roomsList = [...GroundFloorRooms, ...FirstFloorRooms, ...SecondFloorRooms, ...ThirdFloorRooms];
    roomsList = roomsList.filter(item => item.floor == floor);

    console.log(roomsList);


    return <div className="md:mx-10 lg:mx-[5vw] m-auto mt-20">
        <div className="row">
            {
                roomsList.map(item =>
                    <div className="room-block col-lg-6 col-md-6 col-sm-15">
                        <div className="inner-box wow fadeIn">
                            <div className="image-box">
                                <figure class="image-2 overlay-anim"><img src={item.coverPhoto} alt="" className="lg:h-[60vh] w-full object-cover" /></figure>
                            </div>
                            <div className="content-box">
                                <h6 className="title" style={{ marginRight: '30px' }}><Link href={`/room-details/${item.roomId}`}>{item.name}</Link></h6>
                                <span className="price" style={{ marginRight: '30px' }}>₹10000 / NIGHT</span>
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