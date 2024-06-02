import { useState } from "react";

const RoomGallery = ({ data }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [slideShowMode, setSlideShowMode] = useState(false);

    const changeSelectedIndex = (index) => {
        setSelectedIndex(index);
    }

    const decrementtSlideShow = () => {
        setSelectedIndex(state => {
            const newState = state - 1;
            return newState < 0 ? data.length - 1 : newState;
        })
    }

    const incrementSlideShow = () => {
        setSelectedIndex(state => {
            const newState = state + 1;
            return newState >= data.length ? 0 : newState;
        })
    }

    return <div className="">
        {
            slideShowMode && <>
                <button className="z-[2000] fixed inset-0 bg-black opacity-70" onClick={() => setSlideShowMode(state => !state)}></button>
                <button className="text-white z-[2000] fixed left-20 inset-y-0">
                    <i class="fa-solid fa-left-long px-4 py-2 bg-gray-800 bg-opacity-70" onClick={decrementtSlideShow}></i>
                </button>
                <button className="text-white z-[2000] fixed right-20 inset-y-0">
                    <i class="fa-solid fa-right-long px-4 py-2 bg-gray-800 bg-opacity-70" onClick={incrementSlideShow}></i>
                </button>
                <div className="text-white z-[2000] fixed right-10 top-10 text-2xl">
                    <button>
                        <i class="fa-solid fa-xmark text-2xl rounded-full hover:bg-gray-800 p-4 py-2 opacity-80" onClick={() => setSlideShowMode(state => !state)}></i>
                    </button>
                </div>
                <div className={`z-[2000] fixed m-auto text-center top-1/2 bg-white rounded-2xl -translate-y-1/2 shadow-modal inset-x-4 lg:inset-x-60 w-3/5  max-h-[70vh]`}>
                    <div className="text-center max-h-[90vh] m-auto text-black w-full relative">
                        <img src={data[selectedIndex]} className="w-full object-cover max-h-[70vh]" />
                    </div>
                </div>
            </>
        }
        <div className="mb-4">
            <img src={data[selectedIndex]} className="w-full max-h-[70vh] object-cover" onClick={() => setSlideShowMode(state => !state)} />
        </div>
        <div className="flex justify-start overflow-x-auto no-scrollbar">
            {
                data.map((item, index) => index != selectedIndex &&
                    <div className="mr-4 last:mr-4 ">
                        <img src={item} className="h-[70px] mr-4 last:mr-0 md:h-[100px] object-cover" onClick={() => changeSelectedIndex(index)} />
                    </div>
                )
            }
        </div>
    </div>
}

export default RoomGallery;