import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Punjab from "@/components/sections/Punjab"

export default function pagepunjab() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Punjab Room" />
      <Punjab/>
      </Layout>
    </>
  )
}