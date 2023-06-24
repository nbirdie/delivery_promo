import styled from "styled-components";

export const WrongPageWrapper = styled.div`
    margin: 50px auto 50px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
    width: 700px;
    border-radius: 12px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    p, a {
        color: ${({ theme }) => theme.colors.brown};
        font-size: ${({ theme }) => theme.text.fontSize.fs3}px;
        line-height: ${({ theme }) => theme.text.lineHeight.mediumSmall}px;
        font-weight: ${({ theme }) => theme.text.fontWeight.bold};
        line-height: ${({ theme }) => theme.text.lineHeight.big2Medium}px;
    }
    svg{
        align-self: flex-end;
        width: 60px;
        height: 60px;

    }
    @media (max-width: 767px) and (height >= 630px) {
        width: 300px;
    }
    @media (max-width: 767px) and (height < 630px) {
        width: 300px;
    }
`;
