import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Cabbooking from "@/components/sections/Cabbooking"
import Testimonial3 from "@/components/sections/Testimonial3"
import Boatbookingform from "@/components/sections/Boatbookingform"
import Boatbooking from "@/components/sections/Boatbooking"

export default function pageboatbooking() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Boat Booking" />
      <Boatbookingform/>
      <Boatbooking/>
      <Testimonial3 />
      </Layout>
    </>
  )
}