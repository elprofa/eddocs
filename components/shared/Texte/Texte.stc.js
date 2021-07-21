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
        margin:15px 0px !important;
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
            font-size:3rem !important;
            margin:15px 0px !important;
        }
    }
`;
export default TexteStc;