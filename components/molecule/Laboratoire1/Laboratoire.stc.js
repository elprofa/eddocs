import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
}
const LaboratoireStc1=Styled.section`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
`;

export default LaboratoireStc1