import React, { useState, useRef } from 'react';

const SlideButton = ({ onComplete }) => {
    const [sliding, setSliding] = useState(false);
    const [position, setPosition] = useState(0);
    const sliderRef = useRef(null);

    const handleStart = (clientX) => {
        setSliding(true);
    };

    const handleMove = (clientX) => {
        if (!sliding) return;
        const sliderWidth = sliderRef.current.offsetWidth;
        const newPosition = Math.min(Math.max(0, clientX - sliderRef.current.offsetLeft), sliderWidth);
        setPosition(newPosition);
    };

    const handleEnd = () => {
        setSliding(false);
        const sliderWidth = sliderRef.current.offsetWidth;
        if (position > sliderWidth * 0.8) {
            setPosition(sliderWidth);
            if (onComplete) {
                onComplete()
                setPosition(0);// reset the position
            };
        } else {
            setPosition(0);
        }
    };

    const handleMouseDown = (e) => {
        handleStart(e.clientX);
    };

    const handleMouseMove = (e) => {
        handleMove(e.clientX);
    };

    const handleMouseUp = handleEnd;

    const handleTouchStart = (e) => {
        handleStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        handleMove(e.touches[0].clientX);
    };

    const handleTouchEnd = handleEnd;

    return (
        <div
            className="slider-container bg-[#ddd] relative h-[50px] w-full rounded-2xl overflow-hidden shadow"
            ref={sliderRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className="slider absolute rounded-2xl bg-[#FF8A00] text-white h-full w-[150px] flex items-center justify-center cursor-pointer"
                style={{ left: `${position}px` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                Mark Complete
            </div>
        </div>
    );
};

export default SlideButton;
