import Styled from "styled-components";
const defaultStyle={
    color:"#000",
    fontSize: "2.5rem;",
    lineHeight: 1.375,
    letterSpacing: "-0.4px;",
    fontWeight: 700,
}
 const SubTitleStc=Styled.h2`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
`;
export default SubTitleStc;