import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
}
export const SectionClientStc=Styled.section`
    background: ${theme.colors.kingGreen};
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

export default SectionClientStc