import React, { useContext } from "react";
import { ReactComponent as HandSvg } from "../../assets/hand.svg";
import { HandMoveWrapper } from "./HandMove.styles";
import { observer } from "mobx-react-lite";
import { MultiContext } from "../../contexts";

export const HandMove = observer(() => {
    const globalContext = useContext(MultiContext);
    console.log(globalContext.store.visiblePromoAndLink);
    return (
        <HandMoveWrapper
            isvisible={globalContext.store.visiblePromoAndLink ? 0 : 1}
        >
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
});
