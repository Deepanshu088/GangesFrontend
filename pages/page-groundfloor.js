import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Groundfloor from "@/components/sections/Groundfloor"
import FloorRooms from "@/components/FloorRooms"

export default function pagegroundfloor() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Lower Floor Heritage Deluxe" />
      {/* <Groundfloor/> */}
      <FloorRooms floor={0} />
      </Layout>
    </>
  )
}