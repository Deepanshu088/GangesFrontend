import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Rajputhanaroom from "@/components/sections/Rajputhanaroom"

export default function pagerajputhana() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Rajputhana Room" />
      <Rajputhanaroom/>
      </Layout>
    </>
  )
}