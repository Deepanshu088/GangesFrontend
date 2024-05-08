import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Sanchiroom from "@/components/sections/Sanchiroom"

export default function pagesanchiroom() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Sanchi Room" />
      <Sanchiroom/>
      </Layout>
    </>
  )
}