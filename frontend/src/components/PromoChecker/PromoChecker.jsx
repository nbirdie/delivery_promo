import { observer } from 'mobx-react-lite';
import { useEffect, useContext } from 'react';

import settings from '../../common/settings';
import { MultiContext } from '../../contexts';

export const PromoChecker = observer(({ children }) => {
    const globalContext = useContext(MultiContext);

    const isPromocodeInLocalStorage = () => {
        const promoCode = localStorage.getItem(settings.LOCAL_STORAGE.promocode);
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
            const promoCodeServerData = await fetch(settings.API_ROUTES.fetchPromocode, {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    utm_source: utmSource,
                    utm_campaign: utmCampaign,
                }),
            });
            if (promoCodeServerData.status === 200) {
                const promoCode = await promoCodeServerData.json();
                globalContext.store.setPromoCode(promoCode.promocode);
                localStorage.setItem(settings.LOCAL_STORAGE.promocode, promoCode.promocode);
                return true;
            }
            if (promoCodeServerData.status === 404) {
                globalContext.store.setPromoCodeSpan('Акция закончилась');
                globalContext.store.setPromoCode('----');
                return false;
            }
            globalContext.store.setPromoCodeSpan('Ошибка на сервере');
            globalContext.store.setPromoCode('----');
            return false;
        } catch (error) {
            console.log('Failed to connect to backend: ', error);
            globalContext.store.setPromoCodeSpan('Ошибка на сервере');
            globalContext.store.setPromoCode('----');
            return false;
        }
    };

    useEffect(() => {
        if (isPromocodeInLocalStorage()) {
            return;
        }
        fetchPromoCode(globalContext.store.utmSource, globalContext.store.utmCampaign);
    }, []);

    return <>{children}</>;
});
