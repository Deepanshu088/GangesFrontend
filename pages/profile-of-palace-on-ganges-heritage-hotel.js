import SEOSetup from "@/components/SEOSetup"
import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Profile from "@/components/sections/Profile"

export default function pageProfile() {
  return (
    <>
      <SEOSetup
        title="Profile - Palace On Ganges Heritage Hotel, Varanasi"
        description="Varanasi, historically known as Kashi or Banaras, is heralded as the oldest continuously inhabited city in human history. This venerable city is esteemed not only as the cultural capital of the Eastern world but also as a pivotal spiritual haven that draws seekers and devotees from across the globe."
        keywords="Palace On Ganges, Heritage Hotel, Varanasi, Assi Ghat, Profile"
      />
      <Layout headerStyle={2}>
      <PageTitle pageName="Profile" />
      <Profile/>
      </Layout>
    </>
  )
}