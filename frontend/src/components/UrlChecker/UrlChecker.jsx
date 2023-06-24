import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';

import { ReactComponent as RedLeaf1Svg } from '../../assets/leaves/red-leaf-1.svg';
import { MultiContext } from '../../contexts';
import { WrongPageWrapper } from './UrlChecker.styles';

export const UrlChecker = observer(({ children }) => {
    const globalContext = useContext(MultiContext);

    const checkUrlParams = React.useMemo(() => {
        const queryParameters = new URLSearchParams(window.location.search);
        const utmSource = queryParameters.get('utm_source');
        const utmCampaign = queryParameters.get('utm_campaign');
        if (utmSource && utmCampaign) {
            globalContext.store.setUtmSource(utmSource);
            globalContext.store.setUtmCampaign(utmCampaign);
            return true;
        }
        return false;
    }, []);

    return (
        <>
            {checkUrlParams ? (
                children
            ) : (
                <WrongPageWrapper>
                    <p>К сожалению, вы зашли с неправильной ссылки без utm меток.</p>
                    <p>
                        Для проверки задания перейдите, пожалуйста, по ссылке ниже, либо по ссылке из набора ссылок в{' '}
                        <a href="https://github.com/nbirdie/delivery_promo">документации</a>.
                    </p>
                    <p>
                        <a
                            href={`${window.location}?utm_source=qwerty-123&utm_campaign=qwerty`}
                        >{`${window.location}?utm_source=qwerty-123&utm_campaign=qwerty`}</a>
                    </p>
                    <p>Приятной проверки!</p>
                    <RedLeaf1Svg />
                </WrongPageWrapper>
            )}
        </>
    );
});
