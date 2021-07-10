import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
     * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    body {
        font-family: source-sans-pro, sans-serif;
        font-weight: 400;
        font-style: normal;
        width:100%;
        overflow-x:hidden
    }
    .kingSection{
        @media (max-width: 471px)
        {
            margin: 30px 0px !important;
            padding: 30px 0px !important;
        }
    }

    .row
    {
        @media (max-width: 471px)
        {
            margin: 0px !important;
        }
    }

    
    
`;