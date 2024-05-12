import Layout from "@/components/layout/Layout"
import RoomsDetails from "@/components/sections/RoomsDetails"
import PageTitle from "@/components/sections/PageTitle"
import { FirstFloorRooms, GroundFloorRooms, SecondFloorRooms, ThirdFloorRooms } from "@/constants/RoomDetailConstants";

export default function RoomDetails({ roomId = 1 }) {
	const RoomsList = [...GroundFloorRooms, ...FirstFloorRooms, ...SecondFloorRooms, ...ThirdFloorRooms];
	const roomDetail = RoomsList.find(item => item.roomId == roomId);

	return (
		<>
			<Layout headerStyle={2}>
				<PageTitle pageName={roomDetail.name} />
				<RoomsDetails roomDetail={roomDetail} />
			</Layout>
		</>
	)
}