import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
    
}
 const TopPageSectionStc=Styled.section`
    max-height: 350px;
    .div_image
    {
        max-height: 350px;
        overflow:hidden;
    }
    .title 
    {
        top: -190px;
        position: relative;
        color:#fff;
        
        @media screen and (min-width: 341px) and (max-width: 571px)
        {
            top: -150px;
            position: relative;
        }
        @media screen and (max-width: 341px)
        {
            top: -100px;
            position: relative;
        }
    }

    .iconGrille 
    {
        position: relative;
        top: -140px;
    }
    .iconGrille.right 
    {
        position: absolute;
        top: 45vh;
        float:right;
        right: 0;
    }
`;
export default TopPageSectionStc;