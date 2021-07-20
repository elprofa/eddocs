import Styled from "styled-components";
const defaultStyle = {
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
  transition: " 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);",
};
const ButtonStc = Styled.button`
    ${defaultStyle};
    background-image: linear-gradient(to right, rgb(101 143 222) , rgb(195 65 95)) ;
    border:0px;
`;
export default ButtonStc;
