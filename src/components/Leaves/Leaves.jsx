import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { LeavesWrapper } from "./Leaves.styles";

export const Leaves = ({ leaves, widthScreen, width }) => {
    const leavesRef = useRef([]);
    const [dragging, setDragging] = useState(false);
    const [moving, setMoving] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [moveAndDown, setMoveAndDown] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState({});

    const handleMouseDown = () => {
        setDragging(true);
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleMouseMove = (event, index) => {
        event.stopPropagation();
        if (dragging) {
            // const target = event.target;
            // if (shouldAnimate.hasOwnProperty(index)) {
            //     return;
            // }
            // if (target && target.tagName === "svg") {
            //     setShouldAnimate((prevState) => ({
            //         ...prevState,
            //         [index]: 1,
            //     }));
            //     console.log(shouldAnimate);
            // }
            setMoving(true);
        }
    };

    const handleTouchStart = () => {
        setDragging(true);
    };

    const handleTouchEnd = () => {
        setDragging(false);
    };

    const handleTouchMove = (event, index) => {
        event.stopPropagation();
        console.log("index: ", index);

        if (dragging) {
            // const x = event.touches[0].clientX;
            // const y = event.touches[0].clientY;
            // console.log(x, y);
            // const actualTarget = document.elementFromPoint(x, y);
            // if (actualTarget && actualTarget.tagName === "svg") {
            //     const index = leavesRef.current.findIndex(
            //         (ref) => ref === actualTarget
            //     );
            //     const target = event.touches[0].target;
            //     if (shouldAnimate.hasOwnProperty(index)) {
            //         return;
            //     }
            //     if (target && target.tagName === "svg") {
            //         console.log(target.parentNode);
            //         console.log(1);
            //         setShouldAnimate((prevState) => ({
            //             ...prevState,
            //             [index]: 1,
            //         }));
            //     }
            // }
            setMoving(true);
        }
    };

    useEffect(() => {
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchstart", handleMouseDown);
        window.addEventListener("touchend", handleMouseUp);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchstart", handleMouseDown);
            window.removeEventListener("touchend", handleMouseUp);
        };
    }, []);

    return (
        <>
            {leaves.map((item, index) => {
                return (
                    <LeavesWrapper
                        key={index}
                        item={item}
                        indexfigure={index}
                        widthscreen={widthScreen}
                        width={width}
                        shouldanimate={moving ? 1 : 0}
                        // shouldanimate={shouldAnimate[index] || 0}
                        onMouseMove={(event) => handleMouseMove(event, index)}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onTouchMove={(event) => handleTouchMove(event, index)}
                    >
                        <item.leaf
                            className="leaf"
                            ref={(ref) => (leavesRef.current[index] = ref)}
                        />
                    </LeavesWrapper>
                );
            })}
        </>
    );
};
