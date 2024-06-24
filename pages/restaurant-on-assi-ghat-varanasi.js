import SEOSetup from "@/components/SEOSetup"
import Layout from "@/components/layout/Layout"
import Facilitydetails from "@/components/sections/Facilitydetails"
import FoodSection from "@/components/sections/FoodSection"
import PageTitle from "@/components/sections/PageTitle"
import Restaurant from "@/components/sections/Restaurant"


export default function pagefacilities() {
  return (
    <>
      <SEOSetup
        title="Restaurant Facility | Palace on Ganges Heritage Hotel at Assi Ghat, Varanasi"
        description="Enjoy authentic dining at the restaurant of Palace on Ganges Heritage Hotel, located on Assi Ghat in Varanasi. Our heritage hotel offers a variety of traditional and international cuisines to delight your taste buds. Book your stay and dine with us today."
        keywords="Restaurant Palace on Ganges Heritage Hotel, Heritage Hotel Varanasi, Assi Ghat Varanasi, Ganges River Hotel Dining, Varanasi Heritage Accommodation, Palace on Ganges, Assi Ghat Hotel Restaurant, Varanasi Hotel Dining"
      />
      <Layout headerStyle={2}>
      <PageTitle pageName="Restaurant" />
      
      <Restaurant/>
      </Layout>
    </>
  )
}