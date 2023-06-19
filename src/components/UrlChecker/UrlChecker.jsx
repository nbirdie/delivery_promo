import React from "react";

export const UrlChecker = ({ children }) => {
    const checkUrlParams = () => {
        console.log(navigator.userAgent)
        const queryParameters = new URLSearchParams(window.location.search)
        return queryParameters.get("utm_source") && queryParameters.get("utm_campaign");
    };

    return (
        <>
            {checkUrlParams() ? children : <span>Неправильная ссылка</span>}
        </>
    );
};
