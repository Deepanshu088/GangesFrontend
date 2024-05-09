import validate from "../../../utilities/validate";

const Input = ({
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
    autofocus = false
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

    return (
        <div className={`w-full text-start mb-4 ${className}`}>
            {label && <div className="font-medium mb-2 text-base">{label}</div>}
            <div>
                <span className="w-full p-input-icon-left">
                    <input
                        className={`w-full text-base font-normal p-4 py-3 rounded-md bg-gray-100 border border-primaryBorderColor focus:border-primaryBorderColor ${
                            isReadOnly && "bg-[#F3F4F6] text-[#333333]"
                        }`}
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

export default Input;
