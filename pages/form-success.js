import FormSuccessMessage from "@/components/FormSuccessMessage/FormSuccessMessage";
import Layout from "@/components/layout/Layout";
import PageTitle from "@/components/sections/PageTitle";

const FormSuccessPage = () => {
    return <>
        <Layout headerStyle={1}>
            <div className="auto-container mt-[10vh]">
                <FormSuccessMessage />
            </div>
        </Layout>
    </>
}

export default FormSuccessPage;