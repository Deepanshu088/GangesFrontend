import SEOSetup from "@/components/SEOSetup"
import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import SPECIALITY from "@/components/sections/Speciality"

export default function pagespeciality() {
  return (
    <>
      <SEOSetup
        title="Our Specialities - Palace On Ganges Heritage Hotel, Assi Ghat, Varanasi"
        description="Discover the unique offerings and experiences at Palace On Ganges Heritage Hotel. Located at Assi Ghat, Varanasi, our heritage hotel offers a blend of tradition and comfort."
        keywords="specialities, Palace On Ganges Heritage Hotel, Assi Ghat, Varanasi, heritage hotel, unique offerings, experiences"
      />
      <Layout headerStyle={2}>
      <PageTitle pageName="Speciality" />
      <SPECIALITY/>
      </Layout>
    </>
  )
}