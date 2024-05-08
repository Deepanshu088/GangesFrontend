import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Secondfloor from "@/components/sections/Secondfloor"

export default function pagegroundfloor() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Secondfloor" />
      <Secondfloor/>
      </Layout>
    </>
  )
}