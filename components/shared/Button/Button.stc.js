import Styled from "styled-components";
const defaultStyle={
    minWidth: "124px;",
    height: "45px;",
    fontSize: "13px;",
    letterSpacing: "0.26px;",
    lineHeight: 0,
    color: "#fff;",
    backgroundColor: "#00b074;",
    borderColor: "#00b074;",
    textAlign: "center;",
    verticalAlign: "middle;",
    transition:" 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);"
    
}
const ButtonStc=Styled.button`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
`;
export default ButtonStc;