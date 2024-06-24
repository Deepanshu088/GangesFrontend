import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/Contact"
import FoodSection from "@/components/sections/FoodSection"
import Form2 from "@/components/sections/Form2"
import Testimonial3 from "@/components/sections/Testimonial3"
import PageTitle from "@/components/sections/PageTitle"
import SEOSetup from "@/components/SEOSetup"

export default function PageAbout() {
  return (
    <>
      <SEOSetup
        title="Contact Us - Palace On Ganges Heritage Hotel, Assi Ghat, Varanasi"
        description="Contact Palace On Ganges Heritage Hotel for reservations, queries, or feedback. Located at Assi Ghat, Varanasi, experience heritage hospitality."
        keywords="contact us, Palace On Ganges Heritage Hotel, Assi Ghat, Varanasi, heritage hotel, reservations, queries, feedback"
      />
      <Layout headerStyle={2}>
        <PageTitle pageName="Contact Us" />
        <Contact />
      </Layout>
    </>
  )
}