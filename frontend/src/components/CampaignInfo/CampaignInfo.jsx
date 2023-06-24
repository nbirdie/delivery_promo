import { ReactComponent as SaleNumberSvg } from '../../assets/sale25.svg';
import { CampaignInfoWrapper } from './CampaignInfo.styles';

export const CampaignInfo = () => {
    return (
        <CampaignInfoWrapper>
            <SaleNumberSvg />
            <span className="campaign-info">
                На первый заказ от 1 000 рублей
                <br />в приложении «Пятёрочка Доставка»
            </span>
        </CampaignInfoWrapper>
    );
};
