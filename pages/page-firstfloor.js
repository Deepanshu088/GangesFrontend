import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Firstfloor from "@/components/sections/Firstfloor"

export default function pagegroundfloor() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Firstfloor" />
      <Firstfloor/>
      </Layout>
    </>
  )
}