import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Kerala from "@/components/sections/Kerala"

export default function pagekerala() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Kerala Room" />
      <Kerala/>
      </Layout>
    </>
  )
}