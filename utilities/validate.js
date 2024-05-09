function validate(value, validators) {
    value = value.trim();

    let isValid = true;
    for (const validator of validators) {
        switch (validator) {
            case "REQUIRE":
                isValid = isValid && value.length >= 3;
                break;
            case "EMAIL":
                isValid = isValid && /^\S+@\S+\.(\S){2,15}$/.test(value);
                break;
            case "ALPHABETS":
                isValid = isValid && /^[a-z|A-Z]*$/.test(value);
                break;
            case "NUMBER":
                isValid = isValid && /^\d*$/.test(value);
                break;
            case "PASSWORD":
                isValid = isValid && /^((?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16})*$/.test(value);
                break;
            case "ZIPCODE":
                isValid = isValid && /^\d{5}$|^\d{9}$/.test(value);
                break;
            case "REASONS":
                isValid = isValid && /^[a-zA-Z0-9&@.,:\-*=+#%_ ]*$/.test(value);
                break;
            case "PHONE_NUMBER":
                isValid = isValid && /^\d{10}$/.test(value);
                break;
            default:
                break;
        }

        if (validator.startsWith("MIN_LENGTH#")) isValid = isValid && value.length >= validator.split("#")[1];
        else if (validator.startsWith("MAX_LENGTH#")) isValid = isValid && value.length <= validator.split("#")[1];
        else if (validator.startsWith("GREATER_THAN#")) isValid = isValid && value >= +validator.split("#")[1];
        else if (validator.startsWith("SMALLER_THAN#")) isValid = isValid && value <= +validator.split("#")[1];
    }
    return isValid;
}

export default validate;
