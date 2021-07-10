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
`;
export default TexteStc;