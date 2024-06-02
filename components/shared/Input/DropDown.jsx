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
                        placeholder={placeholder} className="w-full md:w-14rem form-control" />
                    {/* {
                        options.map(option =>
                            <div className="flex justify-start mr-6" key={option.id}>
                                <RadioButton inputId={option.id} name={name} value={option.value} onChange={handleOnChange} 
                                    pt={{
                                        icon: { className: "bg-primary border border-white"},
                                        box: { className: `border-4 border-[#cbd5e1] bg-white` },
                                    }}
                                    className="mr-2"
                                    checked={currentValue === option.value} />
                                <div className="my-auto">{option.title}</div>
                            </div>
                        )
                    } */}
                </span>
            </div>
            {isError && errorMessage && <div className="text-orange-600 text-left text-sm my-2">{errorMessage}</div>}
        </div>
    );
};

export default DropDownInput;
