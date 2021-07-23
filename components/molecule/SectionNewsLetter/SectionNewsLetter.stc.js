import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
}
export const SectionNewsLetterStc=Styled.div`
   *
   {
       color:#fff;
       text-align:center;
   }
   background: ${theme.colors.KingBleu};
   
   .div_news
   {
    max-width: 500px;
    display: block;
    margin: auto;
   }
   button 
   {
    height: 3rem;
    border-radius: 0px;
    margin-top: 1.2rem !important;
   }
    
`;

export default SectionNewsLetterStc