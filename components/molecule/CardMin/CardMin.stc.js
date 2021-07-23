import { Card } from "reactstrap";
import Styled from "styled-components";

 const CardMinStc=Styled(Card)`
    width: 170px;
    padding: 10px 20px;
    text-align: center;
    box-shadow: 6px 0 30px #ccc;
    border-radius: 15px;
    font-weight: 600;
    height:170px;
    img 
    {
        display: block;
        margin:auto;
        margin-bottom:10px;
    }
`;
export default CardMinStc;