import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Sikkimroom from "@/components/sections/Sikkimroom"

export default function pagesikkimroom() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Sikkim Room" />
      <Sikkimroom/>
      </Layout>
    </>
  )
}