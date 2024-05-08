import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Orissaroom from "@/components/sections/Orissaroom"

export default function pageorissaroom() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Orissa Room" />
      <Orissaroom/>
      </Layout>
    </>
  )
}