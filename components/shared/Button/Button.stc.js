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
    border:0px;
    background-color:${theme.colors.KingBleu};


    &:hover
    {
      background-color:#ed3b43 !important;
      color:#fff !important;
    }
`;
export default ButtonStc;
