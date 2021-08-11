import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
}
const LaboratoireStc1=Styled.div`
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

    .rectangle
    {
        margin-bottom:40px;
    }

    .rectangle div
    {
        width:170px;
        display:inline-block;
        text-align:center;
        margin:10px;
        @media (max-width: 471px) {
           margin:15px auto;
           display:block;
        }

        img 
        {
            width:100%;
        }
        span
        {
            display:block;
            font-weight:600;
        }
    }

    .laboImg img
    {
        max-width:100%;
    }

    .iconRight img 
    {
        display:inline-block;
        margin:10px;
        @media (max-width: 471px) {
           display:none;
        }
    }
`;

export default LaboratoireStc1