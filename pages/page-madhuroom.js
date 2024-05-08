import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Madhuroom from "@/components/sections/Madhuroom"

export default function pagemadhuroom() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Madhubani Room" />
      <Madhuroom/>
      </Layout>
    </>
  )
}