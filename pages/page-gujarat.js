import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Gujarat from "@/components/sections/Gujarat"

export default function pagegujarat() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Gujarat Room" />
      <Gujarat/>
      </Layout>
    </>
  )
}