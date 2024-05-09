import { Calendar } from "primereact/calendar";
import { useEffect, useState } from "react";

const DatePicker = ({
    id,
    name,
    placeholder,
    value,
    label,
    onChange = () => null,
    minDate,
    maxDate,
    className,
    isError,
    errorMessage,
}) => {
    const [date, setDate] = useState(value);
    const handleOnChange = (e) => {
        onChange(id, e.value);
    };

    useEffect(() => {
        setDate(value);
    }, [value])

    return (
        <div className={`w-full text-start mb-4 ${className}`}>
            {label && <div className="font-medium mb-2 text-base">{label}</div>}
            <Calendar name={name} id={id} value={date} onChange={handleOnChange} minDate={minDate} maxDate={maxDate} placeholder={placeholder} dateFormat="dd/mm/yy"
                className='w-full text-base font-normal p-4 py-3 rounded-md bg-gray-100 border border-primaryBorderColor focus:border-primaryBorderColor'
                pt={{ input: { root: { className: "bg-gray-100" } } }}
            />
            {isError && errorMessage && <div className="text-orange-600 text-left text-sm my-2">{errorMessage}</div>}
        </div>
    );
};

export default DatePicker;
