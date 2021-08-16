import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    color:"#000",
    fontSize:theme.font.p,
    letterSpacing: "0px;",
}

 const TexteStc=Styled.p`
    
    
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
    @media (max-width: 471px)
    {
        font-size:16px !important;
        text-align:center;
    }
    &.label
    {
        font-weight:600;
        color:${theme.colors.KingBleu};
    }
    &.h2
    {
        font-size:3rem !important;
        color:#333;
        @media (max-width: 471px)
        {
            font-size:2rem !important;
        }
    }

    .plus
    {
        color: #ff0000;
        font-size: 25px;
        position: relative;
        top: -20px;
    }
    .ans
    {
        font-size: 25px;
    }
    ul.ulchiffres li {
        display: inline-block;
        margin: 0px 20px;
    }


    
`;
export default TexteStc;