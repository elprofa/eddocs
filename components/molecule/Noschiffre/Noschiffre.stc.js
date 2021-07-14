import Styled from "styled-components";
const defaultStyle={
    textDecoration:"none !important",
    color:"#000",
    fontSize:"14px",
    
}
 const NosChiffreStc=Styled.section`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
    @media screen and (max-width: 767px)
    {
        margin-top: 0px !important;
    }
    a.ownIconAction {
        background: transparent;
        position: relative;
        z-index: 9999999;
        font-size: 28px;
        bottom: 0px;
        color: #ccc;
        font-weight: 600;
        border: 1px solid #ccc;
        width: 50px;
        height: 50px;
        margin:auto;
        display: block;
        text-align: center;
        border-radius: 100%;
        cursor: pointer;

        @media screen and (max-width: 767px)
        {
            display: none;
        }
        
    }
    a.ownIconAction:hover
    {
        background: #ccc;
        color:#fff;
    }
   
`;
export default NosChiffreStc;