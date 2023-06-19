import styled from "styled-components";

export const Layout = styled.div`
    min-height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainContent = styled.main`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    margin: 60px auto 26px;
    @media (max-width: 1919px) {
        margin-top: 40px;
        margin-bottom: 117.18px;
    }
    @media (max-width: 767px) {
        margin-top: 16px;
    }
    @media (max-width: 767px) and (height >= 630px) {
        margin-bottom: 39px;
    }
    @media (max-width: 767px) and (height < 630px) {
        margin-bottom: 19px;
    }
`;

export const LeavesWrapper = styled.div`
    min-width: 1920px;
    position: relative;
    height: 100%;
    @media (max-width: 1919px) {
        min-width: 768px;
    }
    @media (max-width: 767px) {
        min-width: 320px;
    }
`;
