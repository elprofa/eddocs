import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    textDecoration:"none !important",
    color:theme.colors.white,
    fontSize:theme.font.p,
    cursor:"pointer",
    letterSpacing:'0px !important'
}
export const LinkStcStyle1=Styled.a`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
`;