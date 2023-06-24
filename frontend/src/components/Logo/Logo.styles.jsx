import styled from "styled-components";

export const LogoWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    svg {
        width: 350px;
        height: 90.11px;
    }
    @media (max-width: 1919px) {
        svg {
            width: 298.35px;
            height: 76.81px;
        }
    }
    @media (max-width: 767px) {
        svg {
            width: 160px;
            height: 41.19px;
        }
    }
`;
