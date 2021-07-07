import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
}
export const SectionClientStc=Styled.div`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};

    .leftPart
    {
        @media screen and (min-width: 767px)
        {
            padding: 40px;
        }
    }

`;

export default SectionClientStc