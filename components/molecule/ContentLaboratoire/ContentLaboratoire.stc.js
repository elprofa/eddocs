import { Card } from "reactstrap";
import Styled from "styled-components";
const defaultStyle={
    
}
 const CardMinStc=Styled.div`
    display: inline-flew;
    
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
    @media screen and (max-width: 767px){
        width:100% !important;
    }
`;
export default CardMinStc;