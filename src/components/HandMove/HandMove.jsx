import React from "react";
import { ReactComponent as HandSvg } from "../../assets/hand.svg";
import { HandMoveWrapper } from "./HandMove.styles";

export const HandMove = () => {
    return (
        <HandMoveWrapper>
            <div>
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
};
