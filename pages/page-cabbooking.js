import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Cabbooking from "@/components/sections/Cabbooking"
import Testimonial3 from "@/components/sections/Testimonial3"
import Cabbookingform from "@/components/sections/Cabbookingform"

export default function pagecabbooking() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Cab Booking" />
      <Cabbookingform/>
      <Cabbooking/>
      <Testimonial3 />
      </Layout>
    </>
  )
}