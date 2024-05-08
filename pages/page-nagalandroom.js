import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Nagalandroom from "@/components/sections/Nagalandroom"

export default function pagenagalandroom() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Nagaland Room" />
      <Nagalandroom/>
      </Layout>
    </>
  )
}