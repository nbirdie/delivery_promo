import styled, { keyframes } from "styled-components";

const changePosition = (props) => keyframes`
  0% {
    top: ${props.item.top}px;
    left: ${props.item.left}px;
    opacity: 1;
  }
  90% {
    top: ${props.item.topFinal ? props.item.topFinal : props.item.top}px;
    left: ${
        props.item.leftFinal
            ? `${props.item.leftFinal}px`
            : props.item.left > props.width / 2
            ? `${props.width + (props.widthscreen - props.width) / 2}px`
            : `${(props.width - props.widthscreen) / 2}px`
    };
    transform: ${
        !props.item.leftFinal
            ? props.item.left > props.width / 2
                ? `translate(100%, 0) rotate(${props.item.rotate}deg)`
                : `translate(-100%, 0) rotate(${props.item.rotate}deg)`
            : `rotate(${props.item.rotateFinal}deg)`
    };
    opacity: 1;
  }
  100% {
    top: ${props.item.topFinal ? props.item.topFinal : props.item.top}px;
    left: ${
        props.item.leftFinal
            ? `${props.item.leftFinal}px`
            : props.item.left > props.width / 2
            ? `${props.width + (props.widthscreen - props.width) / 2}px`
            : `${(props.width - props.widthscreen) / 2}px`
    };
     transform: ${
         !props.item.leftFinal
             ? props.item.left > props.width / 2
                 ? `translate(100%, 0) rotate(${props.item.rotate}deg)`
                 : `translate(-100%, 0) rotate(${props.item.rotate}deg)`
             : `rotate(${props.item.rotateFinal}deg)`
     };
    opacity: ${props.item.leftFinal ? 1 : 0};
  }
`;

export const LeavesWrapper = styled.div`
    position: absolute;
    top: ${(props) => props.item.top}px;
    left: ${(props) => props.item.left}px;
    animation: ${(props) => props.shouldanimate && changePosition(props)};
    animation-duration: 2s;
    animation-delay: 0s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    width: ${(props) => props.item.width}px;
    height: ${(props) => props.item.height}px;
    transform-origin: 0px 0px;
    transform: rotate(${(props) => props.item.rotate}deg);
    z-index: ${(props) => props.indexfigure};
    opacity: 1;

    svg {
        /* position: absolute;
        top: ${(props) => props.item.top}px;
        left: ${(props) => props.item.left}px; */
        /* width: ${(props) => props.item.width}px;
        height: ${(props) => props.item.height}px;
        transform-origin: 0px 0px;
        transform: rotate(${(props) => props.item.rotate}deg);
        z-index: ${(props) => props.indexfigure}; */
        width: 100%;
        height: 100%;
    }
`;
