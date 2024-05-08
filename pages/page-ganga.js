import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Ganga from "@/components/sections/Ganga"

export default function pageganga() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Ganga view Room" />
      <Ganga/>
      </Layout>
    </>
  )
}