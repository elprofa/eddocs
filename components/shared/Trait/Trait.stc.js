import Styled from "styled-components";
const defaultStyle={
    borderBottom:"2px solid #c43a4b"
}
 const TraitStc=Styled.div`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
`;
export default TraitStc;