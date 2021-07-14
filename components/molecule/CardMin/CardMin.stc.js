import { Card } from "reactstrap";
import Styled from "styled-components";
const defaultStyle={
    
}
 const CardMinStc=Styled(Card)`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};

    @media screen and (max-width: 476px)
    {
        margin: 15px auto !important;
        display: block;
    }
`;
export default CardMinStc;