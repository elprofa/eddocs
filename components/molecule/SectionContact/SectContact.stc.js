import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const SectContactStc = styled(Container)`
    
  background-color: ${(props) => props.bg || "#fff"};
  width: ${(props) => props.largeur || "100%"};
  height: ${(props) => props.hauteur || "80%"};
  border-radius: ${(props) => props.border__raduis|| "4px"};

  .section__ctn {
        @media screen and (max-width: 767px){
            display: block;
            display: inline;
            flex-wrap: wrap;
            margin-right:15px;
            .col-lg-6{
              margin-bottom: 2.5rem;
            }

          .ranger__Deux{
            margin-bottom: 2.5rem;
          }
            
        }
     }

`;
export default SectContactStc;

