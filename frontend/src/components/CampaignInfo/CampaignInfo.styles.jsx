import styled from 'styled-components';

export const CampaignInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 984px;
    margin-top: 60.89px;
    gap: 30.61px;
    svg {
        width: 365.39px;
        height: 125.76px;
    }
    span {
        text-align: start;
        font-size: ${({ theme }) => theme.text.fontSize.fs1}px;
        font-weight: ${({ theme }) => theme.text.fontWeight.bold};
        line-height: ${({ theme }) => theme.text.lineHeight.big}px;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: ${({ theme }) => theme.colors.redGradient};
        max-width: 588px;
    }
    @media (max-width: 1919px) {
        flex-direction: column;
        margin-top: 39.18px;
        gap: 24.01px;
        svg {
            width: 435.82px;
            height: 150px;
        }
        span {
            max-width: 603px;
            text-align: center;
        }
    }
    @media (max-width: 767px) {
        margin-top: 32.53px;
        gap: 8.04px;
        svg {
            width: 192.46px;
            height: 66.24px;
        }
        span {
            max-width: 264px;
            font-size: ${({ theme }) => theme.text.fontSize.fs3}px;
            line-height: ${({ theme }) => theme.text.lineHeight.medium}px;
        }
    }
    @media (max-width: 767px) and (height >= 630px) {
        margin-top: 32.53px;
    }
    @media (max-width: 767px) and (height < 630px) {
        margin-top: 22.81px;
    }
`;
