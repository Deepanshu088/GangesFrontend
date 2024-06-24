import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Cabbooking from "@/components/sections/Cabbooking"
import Testimonial3 from "@/components/sections/Testimonial3"
import Citytourform from "@/components/sections/Citytourform"
import Boatbooking from "@/components/sections/Boatbooking"
import Citytour from "@/components/sections/Citytour"
import SEOSetup from "@/components/SEOSetup"

export default function pagecitytour() {
  return (
    <>
      <SEOSetup
        title="Guided City Tour Services | Palace on Ganges Heritage Hotel at Assi Ghat, Varanasi"
        description="Experience the best of Varanasi with guided city tours offered by Palace on Ganges Heritage Hotel. Located on Assi Ghat, our heritage hotel provides expert tours to explore the cultural and historical treasures of the city. Book your heritage stay and tour today."
        keywords="Guided City Tour Palace on Ganges Heritage Hotel"
      />
      <Layout headerStyle={2}>
      <PageTitle pageName="Guided Tour" />
      <Citytourform/>
      <Citytour/>
      <Testimonial3 />
      </Layout>
    </>
  )
}