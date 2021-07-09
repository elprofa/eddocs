import Styled from "styled-components";
const defaultStyle={
    
}
 const AccreditationSectionStc=Styled.div`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
`;
export default AccreditationSectionStc;