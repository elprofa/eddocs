import Styled from "styled-components";

 const ParagrapheStc=Styled.p`
    font-weight: ${(props) => props.weight || "normal"};
    text-transform: ${(props) => props.text__transform || "None"};
    color: ${(props) => props.coulor || "black"}!important;
    font-family: ${(props) => props.font__family || "system-ui"}; 
    margin-left: ${(props) => props.margin__left || "auto"};
    margin-right: ${(props) => props.margin__right || "auto"};
    width: ${(props) => props.largeur || "30rem"};
    text-align: ${(props) => props.align__text || "justify"};

    /*span {
        padding-bottom: 3px;
        border-bottom: 2.1px solid #C44545;
        width: fit-content;
    }*/
    
`;
export default ParagrapheStc;