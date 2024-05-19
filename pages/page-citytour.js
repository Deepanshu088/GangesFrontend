import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Cabbooking from "@/components/sections/Cabbooking"
import Testimonial3 from "@/components/sections/Testimonial3"
import Citytourform from "@/components/sections/Citytourform"
import Boatbooking from "@/components/sections/Boatbooking"
import Citytour from "@/components/sections/Citytour"

export default function pagecitytour() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Guided Tour" />
      <Citytourform/>
      <Citytour/>
      <Testimonial3 />
      </Layout>
    </>
  )
}