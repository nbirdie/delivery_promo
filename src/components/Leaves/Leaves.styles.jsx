import styled from "styled-components";

export const LeavesWrapper = styled.div`
    @keyframes slide {
        from {}
    }
    position: absolute;
        top: ${(props) => props.item.top}px;
        left: ${(props) => props.item.left}px;
    svg {
        width: ${(props) => props.item.width}px;
        height: ${(props) => props.item.height}px;
        
        transform-origin: 0px 0px;
        transform: rotate(${props => props.item.rotate}deg);
        z-index: ${(props) => props.indexfigure};
    }
`;
