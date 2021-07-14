import Styled from "styled-components";
const defaultStyle={
    
}
 const AccreditationElementStc=Styled.div`
    border-bottom:1px solid #ccc;
    padding:20px;
    ${(props) => props.MonStyle || ""};
`;
export default AccreditationElementStc;