import React, { useState, useEffect, useContext } from "react";
import { ReactComponent as HandSvg } from "../../assets/hand.svg";
import { HandMoveWrapper } from "./HandMove.styles";
import { observer } from "mobx-react-lite";
import { MultiContext } from "../../contexts";

export const HandMove = observer(() => {
    const globalContext = useContext(MultiContext);
    const [dragging, setDragging] = useState(false);

    const handleMouseDown = () => {
        setDragging(true);
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleMouseMove = () => {
        if (dragging) {
            globalContext.store.setShouldAnimateLeaves(true);
            globalContext.store.setVisiblePromo(true);
        }
    };

    const handleTouchStart = () => {
        setDragging(true);
    };

    const handleTouchEnd = () => {
        setDragging(false);
    };

    const handleTouchMove = () => {
        console.log("touch move");
        if (dragging) {
            globalContext.store.setShouldAnimateLeaves(true);
            globalContext.store.setVisiblePromo(true);
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
    console.log(globalContext.store.visiblePromoAndLink);
    return (
        <HandMoveWrapper
            isvisible={globalContext.store.visiblePromoAndLink ? 0 : 1}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            <div className="hand-icon">
                <hr />
                <HandSvg />
            </div>
            <span>
                Пошуршите листьями,
                <br />
                заберите промокод
            </span>
        </HandMoveWrapper>
    );
});
