import React, { useEffect, useRef } from "react";
import { AppLinkWrapper } from "./AppLink.styles";
import { ReactComponent as LogoRectSvg } from "../../assets/logo5-rect.svg";
import { ReactComponent as QRCodeSvg } from "../../assets/qr.svg";

export const AppLink = (isvisible) => {
    return (
        <AppLinkWrapper isvisible={isvisible}>
            <button className="logo5-rect button-wiggle">
                <a href="#">
                    <LogoRectSvg />
                </a>
            </button>
            <div className="qr-code">
                <QRCodeSvg />
            </div>
            <span>
                Скачать
                <br /> приложение
            </span>
        </AppLinkWrapper>
    );
};
