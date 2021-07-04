import Styled from "styled-components";
const defaultStyle={
    textDecoration:"none !important",
    color:"#000",
    fontSize:"14px",
    border:"1px solid #ccc;"
}

const defaultStyleSelect={
    border: 0,
    height: "40px;",
    color: "#6b6e6f;",
    display: "block;",
    width: "100%;",
    height: "3rem;",
    padding: "0.75rem 0.9375rem;",
    fontSize: "1rem;",
    fontWeight: 400,
    lineHeight: 1.88,
    color: "#6b6e6f;",
    backgroundColor:" #fff;",
    backgroundClip:" padding-box;",
    border: "1px solid #e5e5e5;",
    borderRadius: "0.3125rem;",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;",
    border: "0px",
    borderRadius:"0px"
}
const defaultStyleIcon={
    fontSize: "1.3125rem;",
    lineHeight: 1.62,
    letterSpacing: "-0.21px;",
    width: "50px",
    justifyContent: "center",
    color: "#00b074",
    fontWeight: "700 !important;",
    border:"0px",
    borderRadius:"0px"
}

 const SelectStc=Styled.div`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
    select 
    {
        ${defaultStyleSelect};
        ${(props) => props.MonStyle.selectStyle || ""};
    }
    span 
    {
        ${defaultStyleIcon};
        ${(props) => props.MonStyle.iconStyle || ""};
    }
`;
export default SelectStc;