import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Avadhroom from "@/components/sections/Avadhroom"

export default function pageavadhroom() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Avadh Room" />
      <Avadhroom/>
      </Layout>
    </>
  )
}