import React from "react";
import { LogoWrapper } from "./Logo.styles";
import {ReactComponent as LogoSvg} from "../../assets/logo.svg";

export const Logo = () => {
    return (
        <LogoWrapper>
            <LogoSvg />
        </LogoWrapper>
    );
};
