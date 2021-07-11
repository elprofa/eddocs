import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const CardCtznStc = styled(Container)`
    
  background-color: ${(props) => props.bg || "#c5c8c7"};
  width: ${(props) => props.largeur || "100%"};
  height: ${(props) => props.hauteur || "540px"};
  border-radius: ${(props) => props.border__raduis|| "4px"};
  

  @media screen and (max-width: 923px){
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }

`;

export default CardCtznStc;