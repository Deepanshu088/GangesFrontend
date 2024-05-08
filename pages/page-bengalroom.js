import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Bengalroom from "@/components/sections/Bengalroom"

export default function pagebengalroom() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Bengal Room" />
      <Bengalroom/>
      </Layout>
    </>
  )
}