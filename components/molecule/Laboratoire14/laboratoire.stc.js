import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
}
const LaboratoireStc14 = Styled.div`

    .ranger2 {
        flex-wrap: inherit;
        justify-content: start;
        margin-bottom: 3rem;
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

    h5{
        text-align: center;
        background: rgb(41, 176, 100) none repeat scroll 0% 0%;
        margin-bottom: 0px;
        color: rgb(255, 255, 255);
        font-size:14px;
        min-height:100px;
        min-height: 60px;
        align-self: center;
        padding: 15px;

    }
    ul
    {
        background: #58f49c !important
    }
`;
export default LaboratoireStc14;
