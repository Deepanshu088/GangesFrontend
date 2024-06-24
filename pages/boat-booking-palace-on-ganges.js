import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Cabbooking from "@/components/sections/Cabbooking"
import Testimonial3 from "@/components/sections/Testimonial3"
import Boatbookingform from "@/components/sections/Boatbookingform"
import Boatbooking from "@/components/sections/Boatbooking"
import SEOSetup from "@/components/SEOSetup"

export default function pageboatbooking() {
  return (
    <>
      <SEOSetup
        title="Boat Booking Services | Palace on Ganges Heritage Hotel at Assi Ghat, Varanasi"
        description="Discover the serene beauty of the Ganges with boat booking services at Palace on Ganges Heritage Hotel. Located on Assi Ghat, our heritage hotel offers convenient boat tours to explore the sacred river. Book your heritage stay and river tour today."
        keywords="Boat Booking Palace on Ganges Heritage Hotel, Heritage Hotel Varanasi"
      />
      <Layout headerStyle={2}>
      <PageTitle pageName="Boat Booking" />
      <Boatbookingform/>
      <Boatbooking/>
      <Testimonial3 />
      </Layout>
    </>
  )
}