import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Maharashtraroom from "@/components/sections/Maharashtraroom"

export default function pagemaharashroom() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Maharashthara Room" />
      <Maharashtraroom/>
      </Layout>
    </>
  )
}