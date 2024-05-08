import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Tamilnadu from "@/components/sections/Tamilnadu"

export default function pagetamilnadu() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Tamil nadu Room" />
      <Tamilnadu/>
      </Layout>
    </>
  )
}