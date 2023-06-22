import React, {
    useRef,
    useLayoutEffect,
    useState,
    useEffect,
    useContext,
} from "react";
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
    PromoChecker,
} from "./components";
import { UrlChecker } from "./components";
import { Layout, MainContent, LeavesWrapper } from "./App.styles";
import { LeavesScreen1920X965 } from "./common/leaves";
import { LeavesScreen768X1024 } from "./common/leaves";
import { LeavesScreen320X630 } from "./common/leaves";
import { LeavesScreen320X568 } from "./common/leaves";
import { MultiContextProvider } from "./components/MultiContextProvider/MultiContextProvider";
import { MultiContext } from "./contexts";

function App() {
    const [widthScreen, setWidthScreen] = useState(0);
    const [width, setWidth] = useState(0);
    const [leaves, setLeaves] = useState([]);
    const elementRef = useRef(null);

    const handleWidthHeightChange = () => {
        if (!elementRef.current) {
            return;
        }
        const widthScreen = elementRef.current.offsetWidth;
        const heightScreen = elementRef.current.offsetHeight;
        setWidthScreen(widthScreen);
        if (widthScreen >= 1920) {
            setLeaves(LeavesScreen1920X965);
            setWidth(1920);
        }
        if (widthScreen >= 768 && widthScreen < 1920) {
            setLeaves(LeavesScreen768X1024);
            setWidth(768);
        }
        if (widthScreen < 768 && heightScreen >= 630) {
            setLeaves(LeavesScreen320X630);
            setWidth(320);
        }
        if (widthScreen < 768 && heightScreen < 630) {
            setLeaves(LeavesScreen320X568);
            setWidth(320);
        }
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
        <MultiContextProvider>
            <ThemeProvider theme={baseTheme}>
                <GlobalStyle />
                <UrlChecker>
                    <PromoChecker>
                        <Layout ref={elementRef}>
                            <LeavesWrapper>
                                <Leaves
                                    leaves={leaves}
                                    widthScreen={widthScreen}
                                    width={width}
                                />
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
                    </PromoChecker>
                </UrlChecker>
            </ThemeProvider>
        </MultiContextProvider>
    );
}

export default App;
