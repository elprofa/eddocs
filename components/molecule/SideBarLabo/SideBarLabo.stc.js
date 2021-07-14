import { Row } from "reactstrap";
import Styled from "styled-components";
import { theme } from "../../../theme";

 const SideBarLaboStc=Styled.div`
    display: inline-flex !important;
    .nav-pills .nav-link.active, .nav-pills .nav-link:hover
    {
        transition:.6s;
        color: #fff;
        background-color: ${theme.colors.KingBleu};
        padding: 20px;
        border-radius: 0px;
    }
    .nav-pills .nav-link
    {
        padding: 20px;
        border-radius: 0px;
    }
    ${(props) => props.MonStyle || ""};

    .desktop
    {
        @media screen and (max-width: 767px){
            display: none !important;
        }
        
    }
    .phone
    {
        text-align:center;
        display: none;
        @media screen and (max-width: 767px){
            width: 100%;
            display: block !important;
        }

        span
        {
            background-color: #0d77b6!important;
            padding: 10px 20px;
            color: #fff;
            font-weight: 400;
            font-size: 16px;
            margin: 5px;
        }
    }

    @media screen and (max-width: 767px){
        width: 100% !important;
        display: block !important;
        top:0px;
        padding: 15px !important;
    }
    
`;
export default SideBarLaboStc;