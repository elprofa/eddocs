import Styled from "styled-components";
const defaultStyle={
    color:"#000",
    fontSize:" 3.75rem;",
    lineHeight: 1.2,
    letterSpacing: "-0.9px;",
    fontWeight: "700;"
}
 const TitleStc=Styled.h1`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};

    @media (max-width: 471px)
    {
        font-size:28px !important
    }
`;
export default TitleStc;