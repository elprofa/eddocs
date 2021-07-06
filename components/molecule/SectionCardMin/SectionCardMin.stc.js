import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
}
export const CardMinSectionStc=Styled.section`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
`;

export default CardMinSectionStc