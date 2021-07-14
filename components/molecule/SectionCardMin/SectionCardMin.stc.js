import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
}
const CardMinSectionStc=Styled.section`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};

    h1 span 
    {
        border-bottom:2px solid #c43a4b;
    }
`;

export default CardMinSectionStc