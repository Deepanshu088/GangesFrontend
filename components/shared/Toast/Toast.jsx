import { useEffect } from "react";

const Toast = ({ show = false, type, title = "Success", message = "Success", setToastDetails }) => {
    let typeClass = "";

    switch (type) {
        case "error": typeClass = "text-white bg-errorColor text-errorColor border-l-errorColor"
            break;
        case "success": typeClass = "text-white bg-successColor text-successColor border-l-successColor"
            break;
    }

    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                setToastDetails(state => ({...state, show: false})); // Use setShow from props to hide after 4 seconds
            }, 4000);

            return () => clearTimeout(timer); // Cleanup the timer
        }
    }, [show, setToastDetails]);

    if (!show) {
        return <></>;
    }

    return <div className="fixed top-40 w-full text-center animate-bounce-in-top z-[1000]">
        <div className={`py-4 mx-8 px-8 md:mx-auto md:max-w-[70%] font-barlow text-white whitespace-nowrap ${typeClass} font-serif rounded-2xl border-l-4 flex justify-start`}>
            <h4 className="text-white font-semibold mr-8 my-auto font-barlow">{title}</h4>
            <p className="text-white my-auto font-medium">{message}</p>
        </div>
    </div>
}

export default Toast;