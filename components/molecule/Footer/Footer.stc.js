import Styled from 'styled-components';
import {theme} from '../../../theme';
const FooterStc=Styled.footer`
    padding:${theme.margins.KingSection};
    padding-left:0px;
    padding-right:0px ;

    background:${theme.colors.KingBleu};



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
    
    }

    .rowLogo,.rowLastFooter
    {
        /* margin:${theme.margins.KingParagraphe} 0px; */
    }
`;
export default FooterStc;