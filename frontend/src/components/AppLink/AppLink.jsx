import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

import { ReactComponent as LogoRectSvg } from '../../assets/logo5-rect.svg';
import { ReactComponent as QRCodeSvg } from '../../assets/qr.svg';
import { MultiContext } from '../../contexts';
import { AppLinkWrapper } from './AppLink.styles';

export const AppLink = observer(() => {
    const globalContext = useContext(MultiContext);

    return (
        <AppLinkWrapper isvisible={globalContext.store.visiblePromoAndLink ? 1 : 0}>
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
                <br />
                приложение
            </span>
        </AppLinkWrapper>
    );
});
