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
    }
   
`;
export default SectionContactStc;