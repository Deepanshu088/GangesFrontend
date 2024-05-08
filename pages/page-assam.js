import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Assam from "@/components/sections/Assam"

export default function pageassam() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Assam Room" />
      <Assam/>
      </Layout>
    </>
  )
}