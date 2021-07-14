import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
}
export const SectionNewsLetterStc=Styled.div`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
    max-width: 500px;
    display: block;
    margin: auto;
`;

export default SectionNewsLetterStc