import { Row } from "reactstrap";
import Styled from "styled-components";
const defaultStyle={
    
}

 const GrilleBlogLeftStc=Styled.section`
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
    
    button{
        @media (max-width: 991px) {
           margin-left:auto !important;
           margin-right:auto !important;
           display: block !important;
        }
    }
`;
export default GrilleBlogLeftStc;