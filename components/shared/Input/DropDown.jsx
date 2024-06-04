import { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';

const DropDownInput = ({
    id,
    name,
    value,
    label,
    onChange = () => null,
    placeholder,
    className,
    isError,
    errorMessage,
    options = []
}) => {
    const [currentValue, setCurrentValue] = useState(value);
    const handleOnChange = (e) => {
        console.log(id, e.value )
        onChange(id, e.value, true);
    };

    useEffect(() => {
        console.log(value);
        
        setCurrentValue(value);
    }, [value])

    return (
        <div className={`w-full text-start mb-4 ${className}`}>
            {label && <div className="font-medium mb-2 text-base">{label}</div>}
            <div>
                <span className="w-full p-input-icon-left flex justify-start">
                    <Dropdown value={currentValue} onChange={handleOnChange} options={options} optionLabel="name"
                        placeholder={placeholder} className="w-full md:w-14rem form-control flex bg-white border border-[#adadad] rounded-none active:outline-none foucs:outline:none" 
                        pt={{
                          input: { className: "w-full my-auto"},  
                          itemLabel: { className: "px-4 py-2" },
                        }}
                    />
                </span>
            </div>
            {isError && errorMessage && <div className="text-orange-600 text-left text-sm my-2">{errorMessage}</div>}
        </div>
    );
};

export default DropDownInput;
