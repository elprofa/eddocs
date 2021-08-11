import { Row } from "reactstrap";
import Styled from "styled-components";
import { theme } from "../../../theme";

 const SideBarLaboStc=Styled.div`
    display: inline-flex !important;
    background: ${theme.colors.kingGreen};  
    height:100%;  
    .nav-link.active
    {
        text-decoration:underline;
        text-decoration-color:red;
        line-height:1em;
    }
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
        color:#000;
        font-weight: 600;
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
        position: fixed;
        background: rgb(0,0,0,.4);
        left: 0px;
        right:0px;
        width: 100%;
        height: 100%;
        top: 0px;
        @media screen and (max-width: 767px){
            width: 100%;
            display: block !important;
        }

        .header
        {
            background: #0d77b6;
            padding: 15px;
            color: #fff;
        }

        svg
        {
            float:left;
        }

        li
        {
            list-style: none;
            text-align: left;
        }
    }

    @media screen and (max-width: 767px){
        width: 100% !important;
        display: block !important;
        top:0px;
        padding: 15px !important;
    }

    .title {
        
            color: #000;
            @media (min-width: 991px) {
                margin-left:0px !important
                
            }
        
        
    } 
    .paragraphe
    {
        @media (max-width: 991px) {
            text-align:center !important
        }
    }

    .menu
    {
        background: #fff;
        opacity: 1;
        z-index: 9999999;
        width: 75%;
        height: 100%
    }
    
`;
export default SideBarLaboStc;