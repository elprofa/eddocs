import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
}
const LaboratoireStc5 = Styled.div`

    h4{
        font-size: 1rem;
        font-weight: 600;
    }

    .ranger2 {
        flex-wrap: inherit;
        justify-content: start;
        margin-bottom: 3rem;
    }

    .spank{
        display: flex;
        width: 100%;
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
    button{
        @media (max-width: 991px) {
           margin-left:auto !important;
           margin-right:auto !important;
           display: block !important;
        }
    } 
`;
export default LaboratoireStc5;
