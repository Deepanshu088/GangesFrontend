import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Colonialroom from "@/components/sections/Colonialroom"

export default function pagecolonialroom() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Colonial Room" />
      <Colonialroom/>
      </Layout>
    </>
  )
}