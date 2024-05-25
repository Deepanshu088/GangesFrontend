import { useState } from "react";

const useForm = (initialFormValues, initialFormErrors) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [showFormErrors, setShowFormErrors] = useState(false);

    const onTextChange = (id, value, isValid) => {
        setFormValues(state => ({ ...state, [id]: value }));
        setFormErrors(state => ({ ...state, [id]: !isValid }));
        if (value === "") {
            setFormErrors(prev => ({ ...prev, [id]: true }));
        }
    };

    const onRadioChange = (id, value) => {
        setFormValues(state => ({ ...state, [id]: value }));
        setFormErrors(state => ({ ...state, [id]: false }));
    }

    const onDateChange = (id, value) => {
        setFormValues(state => ({ ...state, [id]: value }));
        setFormErrors(state => ({ ...state, [id]: false }));
    }

    const setFormDetails = (data) => {
        setFormValues(data);
        setFormErrors(Object.fromEntries(
            Object.keys(data).map(key => [key, false])
        ))
    }

    const setFormErrorDetails = data => {
        setFormErrors(data);
    }

    return {
        formValues,
        formErrors,
        showFormErrors,
        setShowFormErrors,
        onTextChange,
        onRadioChange,
        onDateChange,
        setFormDetails,
        setFormErrorDetails
    };
};

export default useForm;
