import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Karnatakaroom from "@/components/sections/Karnatakaroom"

export default function pagekarnatakaroom() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Karnataka Room" />
      <Karnatakaroom/>
      </Layout>
    </>
  )
}