import React, { useEffect, useRef, useState } from 'react';

const Carousel = ({ items }) => {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const scroll = (scrollOffset) => {
        if (scrollRef.current) {
            const isAtEnd = scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >= scrollRef.current.scrollWidth;
            if (isAtEnd) {
                scrollRef.current.scrollLeft = 0;
            } else {
                scrollRef.current.scrollLeft += scrollOffset;
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                scroll(scrollRef.current.offsetWidth);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <div
            className="custom-carousel relative flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                onClick={() => scroll(-scrollRef.current.offsetWidth)}
                className={`text-xl absolute left-0 ml-2 z-10 px-4 py-2 bg-black bg-opacity-30 rounded-full text-white transition-opacity duration-300 ease-in-out focus:outline-none ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
            >
                <i class="fa-solid fa-chevron-left"></i>
            </button>

            <div ref={scrollRef} className="flex overflow-x-scroll scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
                {items.map((item, index) => (
                    <div className="w-full flex-none">
                        <img key={index} src={item.imagePath} alt={`Slide ${index}`} className="w-full object-cover h-[400px]" />
                    </div>
                ))}
            </div>

            <button
                onClick={() => scroll(scrollRef.current.offsetWidth)}
                className={`text-xl absolute right-0 mr-2 z-10 px-4 py-2 bg-black bg-opacity-30 rounded-full text-white transition-opacity duration-300 ease-in-out focus:outline-none ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
            >
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default Carousel;
