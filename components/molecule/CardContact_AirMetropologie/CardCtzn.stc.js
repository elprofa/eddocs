import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const CardCtznStc = styled(Container)`
    
  background-color: ${(props) => props.bg || "#c5c8c7"};
  width: ${(props) => props.largeur || "100%"};
  height: ${(props) => props.hauteur || "540px"};
  border-radius: ${(props) => props.border__raduis|| "4px"};
  

  @media screen and (max-width: 1033px){
    overflow: hidden;
  }

  @media screen and (max-width: 986px){
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    overflow: hidden;
  }

  @media screen and (max-width: 786px){
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    overflow: hidden;
  }

`;

export default CardCtznStc;