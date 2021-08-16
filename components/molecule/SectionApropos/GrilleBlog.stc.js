import { Row } from "reactstrap";
import Styled from "styled-components";
import { theme } from "../../../theme";

 const GrilleBlogStc=Styled.section`
    background-color:${theme.colors.kingGreen};

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

    .img-container {
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          // position: absolute;
          opacity: 1;
        }
        
      
      }

`;
export default GrilleBlogStc;