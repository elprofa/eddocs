import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle = {
  minWidth: "124px;",
  height: "45px;",
  fontSize: "13px;",
  letterSpacing: "0.26px;",
  lineHeight: 0,
  color: "#fff;",
  borderColor: "#00b074;",
  textAlign: "center;",
  verticalAlign: "middle;",
  transition: " 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);",
};
const ButtonStc = Styled.button`
    ${defaultStyle};
    font-size: 16px;
    color:#fff !important;
    border:0;
    background: rgb(16,72,158);
    background: linear-gradient(90deg, rgba(16,72,158,1) 0%, rgba(16,72,158,1) 35%, rgba(236,40,45,1) 100%);
`;
export default ButtonStc;
