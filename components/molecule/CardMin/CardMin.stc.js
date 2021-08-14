import { Col } from "reactstrap";
import Styled from "styled-components";
import { theme } from "../../../theme";

 const CardMinStc=Styled(Col)`
    width: 170px;
    text-align: center;
    font-weight: 600;
    height:170px;
    @media (max-width: 991px) {
        height:auto;
    }
    border:0px;
    background:${theme.colors.kingGreen} !important;
    img 
    {
        display: block;
        margin:auto;
        @media (max-width: 991px) {
            min-height:120px;
            min-width:120px;
        }
    }
`;
export default CardMinStc;