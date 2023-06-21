import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }

`;

export const PromoCodeWrapper = styled.div`
    visibility: ${(props) => (props.isvisible ? "visible" : "hidden")};
    opacity: 0;
    animation: ${(props) => (props.isvisible ? fadeIn : "")};
    animation-duration: 1.5s;
    animation-timing-function: ease-out;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 89.24px;
    width: 434px;
    height: 145px;
    padding: 16px 64px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.green};
    font-weight: ${({ theme }) => theme.text.fontWeight.bold};
    color: ${({ theme }) => theme.colors.white};
    span {
        white-space: nowrap;
        font-size: ${({ theme }) => theme.text.fontSize.fs1}px;
        line-height: ${({ theme }) => theme.text.lineHeight.huge}px;
    }
    @media (max-width: 1919px) {
        margin-top: 70px;
    }
    @media (max-width: 767px) {
        width: 200.43px;
        height: 93px;
        span {
            font-size: ${({ theme }) => theme.text.fontSize.fs3}px;
            line-height: ${({ theme }) => theme.text.lineHeight.mediumBig}px;
        }
    }
    @media (max-width: 767px) and (height >= 630px) {
        margin-top: 116px;
    }
    @media (max-width: 767px) and (height < 630px) {
        margin-top: 100.72px;
    }
`;

export const Code = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
    span {
        font-size: ${({ theme }) => theme.text.fontSize.fs0}px;
        line-height: ${({ theme }) => theme.text.lineHeight.huge}px;
    }
    svg {
        width: 19px;
        height: 27px;
    }
    @media (max-width: 1919px) {
        gap: 20px;
        svg {
            width: 22.32px;
            height: 32.78px;
        }
    }
    @media (max-width: 767px) {
        gap: 5.76px;
        span {
            font-size: ${({ theme }) => theme.text.fontSize.fs2}px;
            line-height: ${({ theme }) => theme.text.lineHeight.bigMedium}px;
        }
        svg {
            width: 20.43px;
            height: 30px;
        }
    }
`;
