import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Himachalroom from "@/components/sections/Himachalroom"

export default function pagehimachalroom() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Himachal Room" />
      <Himachalroom/>
      </Layout>
    </>
  )
}