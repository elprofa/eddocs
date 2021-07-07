import { Card } from "reactstrap";
import Styled from "styled-components";
const defaultStyle={
    padding: "20px 30px",
    borderRadius: "22px !important"
}
 const CardClientStc=Styled(Card)`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};

    @media screen and (min-width: 767px)
    {
        width:450px;
    }
    
`;
export default CardClientStc;