import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const SectionAccUnStc = styled(Container)`
    
  background-color: ${(props) => props.bg || "#fff"};
  width: ${(props) => props.largeur || "100%"};
  height: ${(props) => props.hauteur || "80%"};
  margin-left: ${(props) => props.margin__left || "4rem"};
  margin-right: ${(props) => props.margin__right || "4rem"};

  .ranger__text{
    display: inline-block;
    text-align: justify;
  }

`;
export default SectionAccUnStc;

