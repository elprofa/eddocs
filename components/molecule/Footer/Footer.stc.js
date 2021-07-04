import Styled from 'styled-components';
import {theme} from '../../../theme';
const FooterStc=Styled.footer`
    padding:${theme.margins.KingSection} 0px;
    background:${theme.colors.KingBleu};

    .ulSocialNet
    {
        padding: 0px;
    }

    .ulSocialNet li 
    {
        margin-right:15px;
        display: inline;
        font-weight: 600;
        svg {
           
            margin-top: -3px;
        }
    }

    ul.ulMenuFooter li {
        list-style: none;
        padding-bottom: 18px;
    }

    .rowLogo,.rowLastFooter
    {
        margin:${theme.margins.KingParagraphe} 0px;
    }
`;
export default FooterStc;