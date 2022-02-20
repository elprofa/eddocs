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
        text-underline-offset: 8px;
        text-decoration-thickness: 2px !important;
        line-height:2em;
    }

    .nav-item span 
    {
        float: right;
        margin-top: -45px;
        margin-right: 15px;
        color: #fff;
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

    .submenu a.nav-link
    {
        padding: 10px;
        font-weight: 500 !important;
        
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
        width: 0;
        height: 100%;
        top: 0px;
        z-index:99;
        

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
        height: 100%;
        overflow-y:scroll;
    }

    .openLabo
    {
        @media (min-width: 471px) {
            display:none;
        }
        background: #eb1b2a;
        width: 100vw;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0px;
        border: 0;
        border-radius: 0px;
        height: 50px;
        z-index: 0;
    }
    
    @media (max-width: 471px) {
        padding:0px !important;
    }
    
    li.active.nav-item.submenu a {
        color: #ff0000;
        font-weight: 600 !important;
    }
`;
export default SideBarLaboStc;