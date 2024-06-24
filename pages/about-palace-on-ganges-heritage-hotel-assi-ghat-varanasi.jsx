import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import FoodSection from "@/components/sections/FoodSection"
import Form2 from "@/components/sections/Form2"
import Testimonial3 from "@/components/sections/Testimonial3"
import PageTitle from "@/components/sections/PageTitle"
import SEOSetup from "@/components/SEOSetup"

export default function PageAbout() {
  return (
    <>
      <SEOSetup
        title="About Us | Palace on Ganges Heritage Hotel at Assi Ghat, Varanasi"
        description="Learn about Palace on Ganges Heritage Hotel, a distinguished heritage hotel situated on Assi Ghat in Varanasi. Discover our history, vision, and commitment to providing an authentic and comfortable stay along the sacred Ganges River."
        keywords="About Palace on Ganges Heritage Hotel, Heritage Hotel Varanasi, Assi Ghat Varanasi, Ganges River Hotel Varanasi, Varanasi Heritage Accommodation, Palace on Ganges, Ghat Hotels, Varanasi Hotel History"
      />

      <Layout headerStyle={2}>
      <PageTitle pageName="About Us" />
      <About1 />
      <FoodSection />
      <Form2 />
      <Testimonial3 />
      </Layout>
    </>
  )
}