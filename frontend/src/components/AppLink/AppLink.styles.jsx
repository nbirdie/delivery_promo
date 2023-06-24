import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
`;
const wiggle = keyframes`
        5%,
        50% {
            transform: scale(1);
        }
        10% {
            transform: scale(0.9);
        }
        15% {
            transform: scale(1.15);
        }
        20% {
            transform: scale(1.15) rotate(-5deg);
        }
        25% {
            transform: scale(1.15) rotate(5deg);
        }
        30% {
            transform: scale(1.15) rotate(-3deg);
        }
        35% {
            transform: scale(1.15) rotate(2deg);
        }
        40% {
            transform: scale(1.15) rotate(0);
        }
`;
export const AppLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 57px;
    visibility: ${(props) => (props.isvisible ? 'visible' : 'hidden')};
    opacity: 0;
    animation: ${(props) => (props.isvisible ? fadeIn : '')};
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    .logo5-rect {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 12px;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
        padding: 5.13px 5.99px 5.99px 5.13px;
        width: 59.86px;
        height: 59.86px;
        z-index: -999;
        svg {
            width: 100%;
            height: 100%;
        }
    }
    .button-wiggle {
        animation: ${wiggle} 4s 4s infinite;
    }
    .qr-code {
        z-index: -1000;
        margin-top: -21.32px;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 12px;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
        width: 164px;
        height: 164px;
        padding: 32.8px 25.42px 18.04px 25.42px;
        svg {
            width: 100%;
            height: 100%;
        }
    }
    span {
        display: inline-block;
        height: 51.23px;
        margin-top: 14.46px;
        text-align: center;
        color: ${({ theme }) => theme.colors.brown};
        font-size: ${({ theme }) => theme.text.fontSize.fs1}px;
        font-weight: ${({ theme }) => theme.text.fontWeight.bold};
        line-height: ${({ theme }) => theme.text.lineHeight.big2Medium}px;
    }
    @media (max-width: 1919px) {
        margin-top: 36px;
        .logo5-rect {
            width: 138.51px;
            height: 138.51px;
            padding: 11.87px 13.85px 13.85px 11.87px;
        }
        .qr-code {
            display: none;
        }
        span {
            margin-top: 17.08px;
        }
    }
    @media (max-width: 767px) {
        .logo5-rect {
            width: 73px;
            height: 73px;
            padding: 6.26px 7.3px 7.3px 6.26px;
        }
        span {
            height: 27px;
            margin-top: 9px;
            font-size: ${({ theme }) => theme.text.fontSize.fs3}px;
            line-height: ${({ theme }) => theme.text.lineHeight.mediumSmall}px;
        }
    }
    @media (max-width: 767px) and (height >= 630px) {
        margin-top: 33px;
    }
    @media (max-width: 767px) and (height < 630px) {
        margin-top: 16px;
    }
`;
