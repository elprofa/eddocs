import { Row } from "reactstrap";
import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
}

 const GrilleAproposStc=Styled.div`
    .leftPart
    {
        @media screen and (min-width: 767px)
        {
            padding: 40px;
        }
    }

    .textApropos
    {
        @media screen and (min-width: 767px)
        {
            padding-top:15%
        }
    }
`;
export default GrilleAproposStc;