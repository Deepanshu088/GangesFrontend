import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Profile from "@/components/sections/Profile"

export default function pageProfile() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Profile" />
      <Profile/>
      </Layout>
    </>
  )
}