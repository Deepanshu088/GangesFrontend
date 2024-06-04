import React from "react";

const FixedTable42 = ({ items, note }) => {
    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden">
            {/* <div className="flex justify-start">
                {images && images.map(item => <div className="flex items-center justify-center w-1/2 border border-gray-300">
                    <img src={item} className="w-full h-full object-cover" />
                </div>)}
            </div> */}
            <div className="">
                {
                    items && items.map(nestedItems => <div className="flex justify-start  border-gray-300 first:font-bold">
                        {
                            nestedItems.map(item => <div className="w-1/2 border border-gray-300 p-3">{item}</div>)
                        }
                    </div>)
                }
            </div>
            <div className="p-3 border-gray-300">
                <i class="fa-solid fa-circle-info mr-2"></i>
                {note}
            </div>
        </div>
    );
};

export default FixedTable42;