import Styled from "styled-components";
const defaultStyle={
    textDecoration:"none !important",
    color:"#000",
    fontSize:"14px",
}
 const IconStc=Styled.span`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
`;
export default IconStc;