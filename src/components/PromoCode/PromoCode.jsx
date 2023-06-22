import React, { useContext } from "react";
import { PromoCodeWrapper, Code } from "./PromoCode.styles";
import { ReactComponent as IconCopySvg } from "../../assets/icon-copy.svg";
import { observer } from "mobx-react-lite";
import { MultiContext } from "../../contexts";

export const PromoCode = observer(() => {
    const globalContext = useContext(MultiContext);
    return (
        <PromoCodeWrapper
            isvisible={globalContext.store.visiblePromoAndLink ? 1 : 0}
        >
            <span>{globalContext.store.promoCodeSpan}</span>
            <Code>
                <span>{globalContext.store.promoCode}</span>
                <IconCopySvg />
            </Code>
        </PromoCodeWrapper>
    );
});
