import Styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

 const TitleStc=Styled.h1`
    font-weight: ${(props) => props.weight || "bolder"};
    text-transform: ${(props) => props.text__transform || "uppercase"};
    color: ${(props) => props.coulor || "lightyellow"}!important;
    font-size: ${(props) => props.font__size || "xx-large"};

    span {
        padding-bottom: 3px;
        border-bottom: 2.1px solid #C44545;
        width: fit-content;
    }
    
`;
export default TitleStc;