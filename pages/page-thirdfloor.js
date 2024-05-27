import FloorRooms from "@/components/FloorRooms"
import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Thirdfloor from "@/components/sections/Thirdfloor"

export default function pagegroundfloor() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Ganges View" />
      {/* <Thirdfloor/> */}
      <FloorRooms floor={3} />
      </Layout>
    </>
  )
}