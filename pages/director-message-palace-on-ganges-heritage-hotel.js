import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Md from "@/components/sections/Md"
import SEOSetup from "@/components/SEOSetup"

export default function pagemd() {
  return (
    <>
      <SEOSetup
        title="Welcome to Palace On Ganges Heritage Hotel - Director's Message"
        description="Discover the essence of heritage at Palace On Ganges, Assi Ghat, Varanasi. Read a special message from our director."
        keywords="Palace On Ganges, Heritage Hotel, Director's Message, Assi Ghat, Varanasi"
      />
      <Layout headerStyle={2}>
      <PageTitle pageName="Message from MD's desk" />
      <Md/>
      </Layout>
    </>
  )
}