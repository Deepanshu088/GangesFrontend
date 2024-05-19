import Layout from "@/components/layout/Layout"
import RoomsDetails from "@/components/sections/RoomsDetails"
import PageTitle from "@/components/sections/PageTitle"
import { useDispatch, useSelector } from "react-redux";
import useHttp from "@/hooks/useHttp";
import { useEffect } from "react";
import { fetchAllRooms } from "@/redux/slices/roomSlice";

export default function RoomDetails({ roomId = 1 }) {
	const { groundFloor, firstFloor, secondFloor, thirdFloor } = useSelector(state => state.room);
	const RoomsList = [...firstFloor, ...groundFloor, ...secondFloor, ...thirdFloor];
	const roomDetail = RoomsList.find(item => item.roomId == roomId);
	const { isLoading, apiService } = useHttp();
	const dispatch = useDispatch();


	console.log(roomDetail);

	useEffect(() => {
		dispatch(fetchAllRooms(apiService))
	}, [])

	if (!roomDetail || !roomDetail.name) {
		// navigate("/our-rooms")
		// return <>
		// 	<Layout headerStyle={2}>
		// 		<div>
		// 			fdhsofh
		// 		</div>
		// 	</Layout>
		// </>
	}

	return (
		<>
			<Layout headerStyle={2}>
				<PageTitle pageName={roomDetail?.name} />
				<RoomsDetails roomDetail={roomDetail} />
			</Layout>
		</>
	)
}