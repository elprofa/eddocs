import Styled from "styled-components";
import { theme } from "../../../theme";
const defaultStyle={
    
    
}
 const SectionContactStc=Styled.div`
      .paragraphe.one {
            width: 22rem;
            margin: auto;
            text-align: left !important;

            @media (max-width: 991px) {
                width: 100%;
                text-align:center !important;
            }
            
            span 
            {
                background: ${theme.colors.KingBleu};
                color:#fff !important;
                padding: 0px 5px;
                @media (max-width: 991px) {
                    max-width: 10rem;
                    margin: auto;
                    display: block;
                }
            }
        } 

    span.phone,span.email,span.reseaux {
        font-size: 1.5rem;

        @media (max-width: 991px) {
            font-size: 16px !important;
        }
        
    }
    span.email
    {
        color:${theme.colors.KingBleu}
    }
    span.reseaux
    {
        cursor: pointer;
    }
    img.logo_messenger {
        width: 50px !important;
        margin-right: 0;
        display: block;
        cursor:pointer;
        @media (min-width: 991px) {
            float: right;
        }
    }
    .metrologie
    {

        background: #ecf6fb;
        padding: 60px 100px;
        
        border-radius: 20px;
       
        @media (max-width: 471px)
        {
            padding: 20px;
            margin:20px 0px;
        }
        @media (min-width: 991px)
        {
            min-height: 830px;
        }

        img 
        {
            display: block;
            margin: auto;
            @media (max-width: 991px)
            {
                width: 110px;
                margin: auto;
                display: block;
            }
        }
    }
    .title {
        @media (min-width: 991px) {
            margin-left:0px !important
        }
    } 
    .paragraphe.title
    {
        font-weight:600;
        font-size: 1.5rem;
    }
    .paragraphe
    {
        @media (max-width: 991px) {
            text-align:center !important
        }
    }
   
`;
export default SectionContactStc;