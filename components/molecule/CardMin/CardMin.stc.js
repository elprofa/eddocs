import { Card } from "reactstrap";
import Styled from "styled-components";
const defaultStyle={
    
}
 const CardMinStc=Styled(Card)`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
`;
export default CardMinStc;