import { useRouter } from "next/router";
import { default as RoomDetailsById } from "../room-detailssss";

const RoomDetails = () => {
    const router = useRouter()
    // console.log(router.query.id)
    return <RoomDetailsById roomId={router.query.id} />
}

export default RoomDetails;