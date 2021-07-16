import Styled from "styled-components";

 const TitleStc=Styled.h1`
    font-weight: ${(props) => props.weight || "bolder"};
    text-transform: ${(props) => props.text__transform || "uppercase"};
    color: ${(props) => props.coulor || "lightyellow"}!important;

    span {
        padding-bottom: 3px;
        border-bottom: 2.1px solid #C44545;
        width: fit-content;
    }
    
`;
export default TitleStc;