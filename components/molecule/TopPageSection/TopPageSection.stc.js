import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
    
}
 const TopPageSectionStc=Styled.section`
    max-height: 350px;
    .div_image
    {
        height: 350px;
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
`;
export default TopPageSectionStc;