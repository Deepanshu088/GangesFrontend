import Layout from "@/components/layout/Layout"
import Facilitydetails from "@/components/sections/Facilitydetails"
import FoodSection from "@/components/sections/FoodSection"
import PageTitle from "@/components/sections/PageTitle"
import Restaurant from "@/components/sections/Restaurant"


export default function pagefacilities() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Restaurant" />
      
      <Restaurant/>
      </Layout>
    </>
  )
}