import Layout from "@/components/layout/Layout"
import Facilities from "@/components/sections/Facilities"
import Facilitydetails from "@/components/sections/Facilitydetails"
import PageTitle from "@/components/sections/PageTitle"


export default function pagefacilities() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Facilities" />
      
      <Facilities/>
      <Facilitydetails/>
      </Layout>
    </>
  )
}