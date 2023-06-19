import React from "react";
import { CampaignInfoWrapper } from "./CampaignInfo.styles";
import { ReactComponent as SaleNumberSvg } from "../../assets/sale25.svg";

export const CampaignInfo = () => {
    return (
        <CampaignInfoWrapper>
            <SaleNumberSvg />
            <span className="campaign-info">
                На первый заказ от 1 000 рублей <br />в приложении «Пятёрочка
                Доставка»
            </span>
        </CampaignInfoWrapper>
    );
};
