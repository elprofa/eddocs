import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
}
const LaboratoireStc1=Styled.div`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
`;

export default LaboratoireStc1