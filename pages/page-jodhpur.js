import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Jodhpur from "@/components/sections/Jodhpur"

export default function pagejodhpur() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Jodhpur Room" />
      <Jodhpur/>
      </Layout>
    </>
  )
}