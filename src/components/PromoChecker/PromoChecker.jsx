import React, { useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import { MultiContext } from "../../contexts";
import settings from "../../common/settings";

export const PromoChecker = observer(({ children }) => {
    const globalContext = useContext(MultiContext);

    localStorage.removeItem("promocode-5devilery", "sdf666");

    const isPromocodeInLocalStorage = () => {
        const promoCode = localStorage.getItem("promocode-5devilery");
        if (promoCode) {
            globalContext.store.setPromoCode(promoCode);
            globalContext.store.setVisiblePromo(true);
            globalContext.store.setShouldAnimateLeaves(true);
            return true;
        }
        return false;
    };

    const fetchPromoCode = async (utmSource, utmCampaign) => {
        try {
            const promoCodeServerData = await fetch(
                settings.API_ROUTES["fetch-promocode"],
                {
                    method: "post",
                    headers: {
                        accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        utm_source: utmSource,
                        utm_campaign: utmCampaign,
                    }),
                }
            );
            if (promoCodeServerData.statusCode === 200) {
                const promoCode = await promoCodeServerData.json();
                globalContext.store.setPromoCode(promoCode.data);
                localStorage.setItem("promoCode", promoCode.data);
                return true;
            }
            if (promoCodeServerData.statusCode === 404) {
                globalContext.store.setPromoCodeSpan("Акция закончилась");
                globalContext.store.setPromoCode("----");
                return false;
            }
        } catch (error) {
            console.log("Failed to connect to backend: ", error);
            globalContext.store.setPromoCodeSpan("Ошибка на сервере");
            globalContext.store.setPromoCode("----");
            return false;
        }
    };

    useEffect(() => {
        if (isPromocodeInLocalStorage()) {
            return;
        }
        fetchPromoCode(
            globalContext.store.utmSource,
            globalContext.store.utmCampaign
        );
    }, []);

    return <>{children}</>;
});
