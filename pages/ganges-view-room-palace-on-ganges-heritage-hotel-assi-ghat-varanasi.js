import FloorRooms from "@/components/FloorRooms"
import SEOSetup from "@/components/SEOSetup"
import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Thirdfloor from "@/components/sections/Thirdfloor"

export default function pagegroundfloor() {
  return (
    <>
      <SEOSetup
        title="Ganges View Room - Palace On Ganges Heritage Hotel, Assi Ghat, Varanasi"
        description="Designed for spiritual seekers and nature lovers, the Ganga River View rooms offer a tranquil retreat. These rooms feature direct views of the sacred Ganges River, allowing guests to observe the spiritual rituals and daily life of Varanasi from a peaceful vantage point."
        keywords="Ganges View Room, Palace On Ganges Heritage Hotel, Assi Ghat, Varanasi, stunning views, Ganges River, comfort, serenity"
      />
      <Layout headerStyle={2}>
      <PageTitle pageName="Ganges View" />
      {/* <Thirdfloor/> */}
      <FloorRooms floor={3} />
      </Layout>
    </>
  )
}