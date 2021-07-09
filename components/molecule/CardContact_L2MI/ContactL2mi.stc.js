import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const CardConractLMStc = styled(Container)`
    
  background-color: ${(props) => props.bg || "#c5c8c7"};
  width: ${(props) => props.largeur || "80%"};
  height: ${(props) => props.hauteur || "90%"};
  border-radius: ${(props) => props.border__raduis|| "4px"};


`;

export default CardConractLMStc;