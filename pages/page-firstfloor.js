import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Firstfloor from "@/components/sections/Firstfloor"
import FloorRooms from "@/components/FloorRooms"

export default function pagegroundfloor() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Heritage Luxury ( First Floor )" />
      {/* <Firstfloor/> */}
      <FloorRooms floor={1} />
      </Layout>
    </>
  )
}