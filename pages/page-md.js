import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Md from "@/components/sections/Md"

export default function pagemd() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="MD Message" />
      <Md/>
      </Layout>
    </>
  )
}