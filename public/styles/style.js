import { createGlobalStyle } from "styled-components";
import { theme } from "../../theme";

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

    
    }

    .sectionHeader
    {
        margin-top:${theme.margins.KingSection};
        margin-bottom:0;
        margin-left:0;
        margin-right:0;
        padding:${theme.margins.KingSection};
        padding-left:0;
        padding-right:0;
    }

    .sectionLab{
        margin-top:${theme.margins.KingSection};
       
    }
    
    img
    {
        max-width:100%;
    }
`;