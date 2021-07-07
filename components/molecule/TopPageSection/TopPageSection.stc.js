import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
    
}
 const TopPageSectionStc=Styled.section`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
    
    h1 
    {
        @media screen and (min-width: 341px) and (max-width: 571px)
        {
            top: 20%;
            font-size: ${theme.font.headingFontSizes.h3};
        }
        @media screen and (max-width: 341px)
        {
            top: 15%;
            font-size: ${theme.font.headingFontSizes.h3};
        }
    }
`;
export default TopPageSectionStc;