import { Card } from "reactstrap";
import Styled from "styled-components";
const defaultStyle={
    
}
 const CardMinStc=Styled.div`
    display: inline-flew;
    
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
`;
export default CardMinStc;