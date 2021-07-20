import Styled from "styled-components";
const defaultStyle={
    
    
}
 const SectionContactStc=Styled.div`
    ${defaultStyle};
    
    ${(props) => props.MonStyle || ""};  
    
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
            height: 720px;
        }

        img 
        {
            @media (max-width: 991px)
            {
                width: 200px;
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
    .paragraphe
    {
        @media (max-width: 991px) {
            text-align:center !important
        }
    }
   
`;
export default SectionContactStc;