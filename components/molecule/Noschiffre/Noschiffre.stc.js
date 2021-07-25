import Styled from "styled-components";

 const NosChiffreStc=Styled.section`
     margin-top: -12% !important;
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