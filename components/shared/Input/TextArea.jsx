import validate from "../../../utilities/validate";

const TextArea = ({
    id,
    name,
    placeholder,
    value,
    label,
    onChange = () => null,
    className,
    type = "text",
    onEnter = () => null,
    onFocus = () => null,
    isError,
    errorMessage,
    validator = [],
    isReadOnly = false,
    autofocus = false,
    variant = "primary"
}) => {
    const handleOnChange = (e) => {
        const value = e.target.value;
        const isValid = validate(value, validator);
        onChange(id, value, isValid);
    };
    const keyPressHandler = (e) => {
        if (e.keyCode === 13) {
            // "Enter" key pressed
            onEnter();
        }
    };

    let variantClassName = "form-control ";

    switch(variant) {
        case "primary": variantClassName = "form-control overflow-auto bg-white rounded-none border border-[#adadad] h-[250px]"
            break;
        case "secondary": variantClassName = "form-control overflow-auto h-[250px]";
            break;
        case "third": variantClassName = "form-control overflow-auto bg-white h-[200px]";
            break;
    }

    return (
        <div className={`w-full text-start mb-4 ${className}`}>
            {label && <div className="font-medium mb-2 text-base">{label}</div>}
            <div>
                <span className="w-full p-input-icon-left">
                    <textarea
                        className={`${variantClassName}`}
                        style={{width: "100%"}}
                        id={id}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        onChange={handleOnChange}
                        value={value}
                        onKeyUp={keyPressHandler}
                        onFocus={onFocus}
                        readOnly={isReadOnly}
                    />
                </span>
            </div>
            {isError && errorMessage && <div className="text-orange-600 text-left text-sm my-2">{errorMessage}</div>}
        </div>
    );
};

export default TextArea;
