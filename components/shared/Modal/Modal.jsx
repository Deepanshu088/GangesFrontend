// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useEffect } from "react";

const Modal = ({
    show,
    children,
    setShowModal,
    onCloseModal = () => null,
    title = "",
    className = "",
    firstButton,
    onClickFirstButton = () => null,
}) => {
    useEffect(() => {
        setShowModal(show);
    }, [show]);

    function closeModal() {
        setShowModal(false);
        onCloseModal();
    }

    if (!show) {
        return <div></div>;
    }

    const firstButtonClickHandler = async () => {
        closeModal();
        onClickFirstButton();
    };

    return (
        <Fragment>
            <button className="z-[2000] fixed inset-0 bg-black opacity-30" onClick={closeModal} data-testid="backdrop"></button>
            <div className={`z-[2000] fixed m-auto text-center top-1/2 bg-white rounded-2xl -translate-y-1/2 shadow-modal inset-x-0 w-[45%] max-h-[95vh] ${className}`}>
                <div className="text-center max-h-[90vh] py-6 overflow-auto m-auto text-black w-full relative">
                    <button onClick={closeModal} className="absolute right-0 top-0 mt-4 mr-4 text-gray-500">
                        {/* <FontAwesomeIcon icon={faXmark} /> */}
                    </button>
                    {/* <div className="flex justify-between mr-10 items-center">
                        <div className="2xl:text-4xl text-secondaryTextColor font-extrabold w-full text-2xl">{title}</div>
                    </div> */}
                    <div>{children}</div>
                    {firstButton && (
                        <div className="flex justify-center mt-4">
                            <button className="bg-buttonBgColor p-5 rounded-full px-20 text-white font-medium" onClick={firstButtonClickHandler}>
                                {firstButton}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default Modal;
