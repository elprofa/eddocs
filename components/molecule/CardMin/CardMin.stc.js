import { Card } from "reactstrap";
import Styled from "styled-components";
import { theme } from "../../../theme";

 const CardMinStc=Styled(Card)`
    width: 170px;
    text-align: center;
    font-weight: 600;
    height:170px;
    border:0px;
    background:${theme.colors.kingGreen} !important;
    img 
    {
        display: block;
        margin:auto;
    }
`;
export default CardMinStc;