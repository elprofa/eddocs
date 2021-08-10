import Styled from "styled-components";
const defaultStyle={
    
}
 const AccreditationElementStc=Styled.div`
    border-bottom:1px solid #ccc;
    padding:20px;
    ${(props) => props.MonStyle || ""};

    .paragraphe
    {
        font-size: 20px;
        font-weight: 600;
        text-decoration: none;
        color: #0d6efd;
    }
`;
export default AccreditationElementStc;