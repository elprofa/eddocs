import { Row } from "reactstrap";
import Styled from "styled-components";
import { theme } from "../../../theme";

 const GrilleAproposStc=Styled.section`
    button{
        @media (max-width: 991px) {
           margin-left:auto !important;
           margin-right:auto !important;
           display: block !important;
        }
    } 
    .title {
        @media (min-width: 991px) {
            margin-left:0px !important
        }
    } 
    .paragraphe
    {
        @media (max-width: 991px) {
            text-align:center !important
        }
    }
`;
export default GrilleAproposStc;