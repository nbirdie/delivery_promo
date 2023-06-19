import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, baseTheme } from "./styles";
import {
    AppLink,
    CampaignInfo,
    Footer,
    HandMove,
    Leaves,
    Logo,
    PromoCode,
} from "./components";
import { UrlChecker } from "./components";
import { Layout, LeavesWrapper, MainContent } from "./App.styles";
import { LeavesScreen1920X965 } from "./common/leaves";
import { LeavesScreen768X1024 } from "./common/leaves";
import { LeavesScreen320X630 } from "./common/leaves";
import { LeavesScreen320X568 } from "./common/leaves";

function App() {
    const [leaves, setLeaves] = useState([]);
    const elementRef = useRef(null);

    const handleWidthHeightChange = () => {
        const widthScreen = elementRef.current.offsetWidth;
        const heightScreen = elementRef.current.offsetHeight;
        widthScreen >= 1920 && setLeaves(LeavesScreen1920X965);
        widthScreen >= 768 &&
            widthScreen < 1920 &&
            setLeaves(LeavesScreen768X1024);
        widthScreen < 768 &&
            heightScreen >= 630 &&
            setLeaves(LeavesScreen320X630);
        widthScreen < 768 &&
            heightScreen < 630 &&
            setLeaves(LeavesScreen320X568);
    };

    useLayoutEffect(() => {
        handleWidthHeightChange();
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleWidthHeightChange);
        return () => {
            window.removeEventListener("resize", handleWidthHeightChange);
        };
    }, []);

    return (
        <ThemeProvider theme={baseTheme}>
            <GlobalStyle />
            <UrlChecker>
                <Layout ref={elementRef}>
                    <LeavesWrapper>
                        <Leaves leaves={leaves} />
                        <HandMove />
                    </LeavesWrapper>
                    <MainContent>
                        <Logo />
                        <CampaignInfo />
                        <PromoCode />
                        <AppLink />
                    </MainContent>
                    <Footer />
                </Layout>
            </UrlChecker>
        </ThemeProvider>
    );
}

export default App;

// import React, { useState, useEffect, useRef } from "react";
// // import { ReactComponent as CircleSvg } from './circle.svg';
// import { ReactComponent as CircleSvg } from "./assets/leaves/brown-leaf.svg";

// const SVGElement = ({ initialPos, finalPos }) => {
//     const [dragging, setDragging] = useState(false);
//     const [currentPos, setCurrentPos] = useState(initialPos);
//     const [distance, setDistance] = useState(100);
//     const animationRef = useRef(null);

//     // const handleMouseDown = () => {
//     //     // setDragging(true);
//     //     console.log("handleMouseDown after", dragging);
//     //     moveElement();
//     // };
//     const handleMouseUp = () => {
//         // setDragging(false);
//         console.log("handleMouseUp after", dragging);
//         cancelAnimationFrame(animationRef.current);
//     };

//     const moveElement = () => {
//         const deltaX = finalPos.x - currentPos.x;
//         const deltaY = finalPos.y - currentPos.y;
//         const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
//         const normalizedDeltaX = deltaX / distance;
//         const normalizedDeltaY = deltaY / distance;
//         setDistance(distance)
//         if (distance <= 2) {
//             cancelAnimationFrame(animationRef.current);
//             return;
//         }

//         setCurrentPos((prevPos) => ({
//             x: prevPos.x + normalizedDeltaX,
//             y: prevPos.y + normalizedDeltaY,
//         }));
//         animationRef.current = requestAnimationFrame(moveElement);
//     };

//     useEffect(() => {
//         console.log("useEffect");
//         // const leafElement = document.getElementById("leaf");
//         // leafElement.addEventListener("mousedown", moveElement);
//         window.addEventListener("mouseup", handleMouseUp);

//         return () => {
//             // leafElement.removeEventListener("mousedown", moveElement);
//             window.removeEventListener("mouseup", handleMouseUp);
//         };
//     }, []);

//     return (
//         <CircleSvg
//             onMouseDown={moveElement}
//             id="leaf"
//             style={{
//                 transition: "transform 0s",
//                 transform: `translate(${currentPos.x}px, ${currentPos.y}px)`,
//                 width: "50px",
//                 height: "50px",
//             }}
//             // cx={currentPos.x}
//             // cy={currentPos.y}
//         />
//     );
// };

// const App = () => {
//     const svgElements = [
//         { initialPos: { x: 100, y: 100 }, finalPos: { x: 200, y: 300 } },
//         { initialPos: { x: 300, y: 200 }, finalPos: { x: 100, y: 300 } },
//         // Add more SVG elements with their respective initial and final positions
//     ];

//     return (
//         <div style={{ transition: "all 0s" }}>
//             {svgElements.map((element, index) => (
//                 <SVGElement
//                     key={index}
//                     initialPos={element.initialPos}
//                     finalPos={element.finalPos}
//                 />
//             ))}
//             {/* <button onClick={() => {setCurrentPos({})}}>Change</button> */}
//         </div>
//     );
// };

// export default App;
