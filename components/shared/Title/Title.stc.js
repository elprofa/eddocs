import Styled from "styled-components";

const TitleStc = Styled.div`
    @media (max-width: 471px)
    {
        display:block;
        margin-left:auto;
        margin-right:auto;
    }
    @media (max-width: 471px)
    {
        text-align:center;
    }

    width: fit-content;

    &.title
    {
        margin:auto;
    }
    h2
    {
        border-bottom:2px solid red;
    }
    h1:after {
        border-bottom: 3px solid red;
        height: 50px;
        
        width: 250px;
        @media (max-width: 768px)
        {
            height: 30px;
        
            width: 150px;
        }
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        margin-top: 10px;
    }
    &.chiffre h1:after {
        border-bottom: 3px solid red;
        height: 50px;
        width: 10% !important;
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        margin-top: 10px;
    }
   span 
   {
       font-weight:bold;
   }
`;
export default TitleStc;
