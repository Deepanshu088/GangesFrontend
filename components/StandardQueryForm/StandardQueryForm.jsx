import useForm from "@/hooks/useForm";
import useHttp from "@/hooks/useHttp";
import { useRouter } from "next/router";
import { useState } from "react";
import Input from "../shared/Input/Input";
import TextArea from "../shared/Input/TextArea";

const INITIAL_FORM_VALUES = {
    name: '',
    email: '',
    phoneNumber: '',
    message: "",
}

const INITIAL_FORM_ERRORS = {
    name: true,
    email: true,
    phoneNumber: true,
    message: true,
}

const StandardQueryForm = () => {
    const router = useRouter();
    const { formValues, formErrors, onTextChange, onDateChange, showFormErrors, setShowFormErrors, setFormDetails, setFormErrorDetails } = useForm(INITIAL_FORM_VALUES, INITIAL_FORM_ERRORS);
    const { isLoading, apiService, error, clearError } = useHttp();
    const [toastDetails, setToastDetails] = useState({
        show: false,
        type: "success",
        title: "Success",
        message: "Successfully submitted the form.",
    });


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log("osnsubmtit henallder")
        console.log(formErrors);
        try {
            const isFormInvalid = Object.values(formErrors).reduce((a, b) => a || b, false);
            if (isFormInvalid) {
                setShowFormErrors(true);
                return;
            }

            await apiService("/enquiryForm/contactUs", "POST", formValues);
            setFormDetails(INITIAL_FORM_VALUES);
            setFormErrorDetails(INITIAL_FORM_ERRORS);
            setToastDetails({ show: true, type: 'success', title: 'Success', message: 'Form Submitted Successfully.' });
            router.push("/form-success");
        } catch (e) {
            console.log(e);
            setToastDetails({ show: true, type: 'error', title: 'Error', message: 'Something went wrong.' });
        }
    }

    const resetForm = async (e) => {
        e.preventDefault();
        setFormDetails(INITIAL_FORM_VALUES);
        setFormErrorDetails(INITIAL_FORM_ERRORS);
        setShowFormErrors(false);
    }

    let isFormInvalid = null;
    if (showFormErrors) {
        isFormInvalid = Object.values(formErrors).reduce((a, b) => a || b, false);
    }

    return <div className="p-4 p-lg-5 bg-light">
        <h4 className="mt-0">Send Query</h4>
            <Input id="name" name="name" placeholder="Enter Name" errorMessage="This field is required." variant="third"
                onChange={onTextChange} value={formValues.name}
                validator={["REQUIRE"]} isError={showFormErrors && formErrors.name}
            />

            <Input id="email" name="email" placeholder="Enter Email" errorMessage="Please enter a valid email." variant="third"
                onChange={onTextChange} value={formValues.email}
                validator={["EMAIL"]} isError={showFormErrors && formErrors.email}
            />

            <Input id="phoneNumber" name="phoneNumber" placeholder="Enter Phone" errorMessage="This field is required." variant="third"
                onChange={onTextChange} value={formValues.phoneNumber}
                validator={["PHONE_NUMBER"]} isError={showFormErrors && formErrors.phoneNumber}
            />

            <TextArea
                id="message" name="message" placeholder="Enter Message" errorMessage="This field is required." variant="third"
                onChange={onTextChange} value={formValues.message}
                validator={["REQUIRE"]} isError={showFormErrors && formErrors.message}
            />

            <div className="mb-0">
                <input name="form_botcheck" className="form-control" type="hidden" value="" />
                <button className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title" onClick={onSubmitHandler}>Submit </span></button>
            </div>
    </div>
}

export default StandardQueryForm;