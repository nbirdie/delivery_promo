import styled from "styled-components";

export const FooterWrapper = styled.footer`
    z-index: 100;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.yellowLight};
    height: 43px;
    padding-top: 10px;
    padding-bottom: 12px;
    p {
        max-width: 760px;
        font-size: ${({ theme }) => theme.text.fontSize.fs4}px;
        font-weight: ${({ theme }) => theme.text.fontWeight.normal};
        line-height: ${({ theme }) => theme.text.lineHeight.smallMedium}px;
        color: ${({ theme }) => theme.colors.black};
        letter-spacing: -0.04em;
    }
    @media (max-width: 1919px) {
        padding-top: 12px;
        padding-bottom: 10px;
        p {
            max-width: 670px;
            font-size: ${({ theme }) => theme.text.fontSize.fs5}px;
        }
    }
    @media (max-width: 767px) {
        height: 40px;
        padding-top: 6px;
        padding-bottom: 5.13px;
        p {
            max-width: 288px;
            font-size: ${({ theme }) => theme.text.fontSize.fs6}px;
            line-height: ${({ theme }) => theme.text.lineHeight.small}px;
        }
    }
`;
