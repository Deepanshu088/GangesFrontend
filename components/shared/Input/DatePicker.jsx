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
    timeOnly = false
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
                className='w-full border border-[#adadad] bg-white'
                pt={{
                    input: { root: { className: "form-control rounded-none bg-white border-none" } },
                    panel: { className: "w-min min-w-0 p-4 rounded" },
                    container: { className: "font-gilda" },
                    monthTitle: { className: "mr-2 font-extrabold" },
                    header: { className: "text-black" },
                    weekHeader : { className: "text-black" },
                    tableHeaderCell: { className: "text-center" },
                    showIcon: { className: "bg-blue-400 " }
                }}
                // icon={() => <i className="pi pi-clock" />}
                showIcon
                timeOnly={timeOnly}
            />
            {isError && errorMessage && <div className="text-orange-600 text-left text-sm my-2">{errorMessage}</div>}
        </div>
    );
};

export default DatePicker;
