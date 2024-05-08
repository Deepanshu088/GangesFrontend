import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Goaroom from "@/components/sections/Goaroom"

export default function pagegoaroom() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Goa Room" />
      <Goaroom/>
      </Layout>
    </>
  )
}