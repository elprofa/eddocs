import Styled from "styled-components";
import { theme } from "../../../theme";
const NavbarStc=Styled.div`
    .siteLogo
    {
        margin-right: 0% !important;
    }

    *{
        color: ${theme.colors.blackG};
    }

    .altT
    {
        display: none;
        @media screen and (min-width: 767px)and (max-width: 996px){
            display: block;
        }
    }
    .texte
    {
        @media screen and (min-width: 767px)and (max-width: 996px){
            display: none;
        }
    }

    .ulMenu
    {
        display: inline-flex;
    }
    .collapse.navbar-collapse
    {
        width: 100% !important;
        margin: auto;
        display: block !important;
        text-align: center;
    }
    .navbar-light .navbar-nav .nav-link
    {
        color: ${theme.colors.blackG};
        font-weight:600;
    }
    img 
    {
        @media screen and (max-width: 1199px){
            height:40px !important;
        }
    }

    .navbar-nav ul li a
    {
        cursor:pointer;
    }
    
`;

export default NavbarStc;