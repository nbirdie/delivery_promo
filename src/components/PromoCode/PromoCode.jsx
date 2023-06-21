import React from "react";
import { PromoCodeWrapper, Code } from "./PromoCode.styles";
import { ReactComponent as IconCopySvg } from "../../assets/icon-copy.svg";

export const PromoCode = ({ isvisible }) => {

    return (
        <PromoCodeWrapper isvisible={isvisible}>
            <span>Ваш промокод</span>
            <Code>
                <span>AMW18891</span>
                <IconCopySvg />
            </Code>
        </PromoCodeWrapper>
    );
};
