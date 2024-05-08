import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Kashmirroom from "@/components/sections/Kashmirroom"

export default function pagekashmirroom() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Kashmir Room" />
      <Kashmirroom/>
      </Layout>
    </>
  )
}