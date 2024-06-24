import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Groundfloor from "@/components/sections/Groundfloor"
import FloorRooms from "@/components/FloorRooms"
import SEOSetup from "@/components/SEOSetup"

export default function pagegroundfloor() {
  return (
    <>
      <SEOSetup
        title="Lower Level Heritage Deluxe Room - Palace On Ganges Heritage Hotel, Assi Ghat, Varanasi"
        description="Our lower level rooms are designed to be a gateway to the traditional artistry of states accross India. Decorated with local handicrafts of several states of India, textiles, and artworks, these rooms provide a warm and inviting ambiance."
        keywords="Lower Level Heritage Deluxe Room, Palace On Ganges Heritage Hotel, Assi Ghat, Varanasi, heritage charm, modern amenities"
      />
      <Layout headerStyle={2}>
      <PageTitle pageName="Lower Level Heritage Deluxe" />
      {/* <Groundfloor/> */}
      <FloorRooms floor={0} />
      </Layout>
    </>
  )
}