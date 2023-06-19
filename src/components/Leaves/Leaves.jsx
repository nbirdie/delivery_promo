import React, { useEffect, useState } from "react";
import { LeavesWrapper } from "./Leaves.styles";

export const Leaves = ({ leaves }) => {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isMouseMove, setIsMouseMove] = useState(false);

    useEffect(() => {
        const handleMouseDown = () => setIsMouseDown(true);
        const handleMouseUp = () => setIsMouseDown(false);
        const handleMouseMove = () => setIsMouseMove(true);

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return (
        <>
            {leaves.map((item, index) => {
                return (
                    <LeavesWrapper key={index} item={item} indexfigure={index}>
                        <item.leaf className="leaf" />
                    </LeavesWrapper>
                );
            })}
        </>
    );
};
