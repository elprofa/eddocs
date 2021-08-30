import Styled from 'styled-components';
import {theme} from '../../../theme';
const FooterStc=Styled.footer`
    
    *
    {
        color:#fff !important;
    }
    .title h2
    {
        border:0px !important;
    }

    // background: rgb(106,178,69);
    // background: linear-gradient(90deg, rgba(106,178,69,1) 0%, rgba(106,178,69,1) 28%, rgba(13,119,182,1) 61%);



    .ulSocialNet
    {
        padding: 0px;
    }

    .ulSocialNet li 
    {
        margin-right:15px;
        display: inline;
        @media screen and (max-width: 767px){
            display: block;
        }
        @media screen and (max-width: 471px){
            text-align:center;
        }
        font-weight: 600;
        svg {
           
            margin-top: -3px;
        }
    }

    ul.ulMenuFooter li {
        list-style: none;
        padding-bottom: 18px;
    }
    ul.ulMenuFooter
    {
        @media screen and (max-width: 767px){
            padding-left: 0px;
        }
        
        li
        {
            @media screen and (max-width: 471px){
                text-align:center;
            }
        }
    }

    .rowLogo,.rowLastFooter
    {
        /* margin:${theme.margins.KingParagraphe} 0px; */
    }
    .logo1,.logo2
    {
        @media screen and (max-width: 476px){
           display:block;
           margin:auto
        }
    }
    button
    {
        background:#e71e23;
    }
    
`;
export default FooterStc;