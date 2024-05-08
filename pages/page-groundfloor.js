import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Groundfloor from "@/components/sections/Groundfloor"

export default function pagegroundfloor() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Groundfloor" />
      <Groundfloor/>
      </Layout>
    </>
  )
}