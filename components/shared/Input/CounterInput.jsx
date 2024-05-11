import validate from "../../../utilities/validate";

const CounterInput = ({
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
    min = 0
}) => {
    const handleOnChange = (e) => {
        const value = e.target.value;
        // const isValid = validate(value, validator);
        onChange(id, value, true);
    };
    const keyPressHandler = (e) => {
        if (e.keyCode === 13) {
            // "Enter" key pressed
            onEnter();
        }
    };

    const handleIncrement = () => {
        // const value = e.target.value;
        onChange(id, (+value || 0) + 1, true);
    }

    const handleDecrement = () => {
        // const value = e.target.value;
        let newValue = (+value - 1) < 0 ? 0 : (+value - 1);
        onChange(id, newValue, true);
    }

    return (
        <div className={`w-full text-start mb-4 ${className}`}>
            {label && <div className="font-medium mb-2 text-base">{label}</div>}
            <div>
                <span className="w-full p-input-icon-left flex justify-start">
                    <input
                        className={`form-control bg-white rounded-none border border-[#adadad]`}
                        style={{ width: "100%" }}
                        id={id}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        onChange={handleOnChange}
                        value={value}
                        onKeyUp={keyPressHandler}
                        onFocus={onFocus}
                        readOnly={isReadOnly}
                        min="1"
                    />
                    <div className="flex justify-start my-auto ml-8">
                        <div className="bg-primaryButtonColor py-1 px-4 rounded text-white mr-4" onClick={handleIncrement}>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                        <div className="bg-primaryButtonColor py-1 px-4 rounded text-white" onClick={handleDecrement}>
                            <i class="fa-solid fa-minus"></i>
                        </div>
                    </div>
                </span>
            </div>
            {isError && errorMessage && <div className="text-orange-600 text-left text-sm my-2">{errorMessage}</div>}
        </div>
    );
};

export default CounterInput;
