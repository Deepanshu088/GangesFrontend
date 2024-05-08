import Layout from "@/components/layout/Layout"
import GALLERY from "@/components/sections/Gallery"
import PageTitle from "@/components/sections/PageTitle"


export default function pagegallery() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Gallery" />
      <GALLERY/>
      </Layout>
    </>
  )
}