import Styled from "styled-components";
const defaultStyle={
    
}
 const SectionContactMapStc=Styled.div`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
`;
export default SectionContactMapStc;