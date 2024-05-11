import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import SPECIALITY from "@/components/sections/Speciality"

export default function pagespeciality() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Speciality" />
      <SPECIALITY/>
      </Layout>
    </>
  )
}