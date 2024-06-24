import SEOSetup from "@/components/SEOSetup"
import Layout from "@/components/layout/Layout"
import GALLERY from "@/components/sections/Gallery"
import PageTitle from "@/components/sections/PageTitle"


export default function pagegallery() {
  return (
    <>
      <SEOSetup
        title="Photo Gallery - Palace On Ganges Heritage Hotel, Assi Ghat, Varanasi"
        description="Explore the enchanting images of Palace On Ganges Heritage Hotel. Located at Assi Ghat, Varanasi, our heritage hotel offers a visual feast of architecture and ambiance."
        keywords="photo gallery, Palace On Ganges Heritage Hotel, Assi Ghat, Varanasi, heritage hotel, images, architecture, ambiance"
      />
      <Layout headerStyle={2}>
      <PageTitle pageName="Gallery" />
      <GALLERY/>
      </Layout>
    </>
  )
}