import { createGlobalStyle } from "styled-components";
import { baseTheme } from "./theme";
import "../fonts/font.css";

export default createGlobalStyle`
    *{
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-rendering: optimizeLegibility;
        font-family: "5ka Sans Design", sans-serif;
        list-style: none;
    };
    #root{
        margin:0 auto;
    };

    html{
        margin: 0 auto;
    };
    body{ 
        background-color: ${baseTheme.colors.yellow};
    }
    span {
        letter-spacing: -0.04em;
    }
`;
