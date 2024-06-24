import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Cabbooking from "@/components/sections/Cabbooking"
import Testimonial3 from "@/components/sections/Testimonial3"
import Cabbookingform from "@/components/sections/Cabbookingform"
import SEOSetup from "@/components/SEOSetup"

export default function pagecabbooking() {
  return (
    <>
      <SEOSetup
        title="Cab Booking Facility | Palace on Ganges Heritage Hotel at Assi Ghat, Varanasi"
        description="Enjoy convenient cab booking services at Palace on Ganges Heritage Hotel, located on Assi Ghat in Varanasi. Our heritage hotel ensures easy transportation to explore the sacred city and its surroundings. Book your stay and travel with ease."
        keywords="Cab Booking Palace on Ganges Heritage Hotel"
      />
      <Layout headerStyle={2}>
      <PageTitle pageName="Cab Booking" />
      <Cabbookingform/>
      <Cabbooking/>
      <Testimonial3 />
      </Layout>
    </>
  )
}