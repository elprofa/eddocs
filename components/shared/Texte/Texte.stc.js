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
`;
export default TexteStc;