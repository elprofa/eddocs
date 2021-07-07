import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const SectContactStc = styled(Container)`
    
  background-color: ${(props) => props.bg || "#fff"};
  width: ${(props) => props.largeur || "100%"};
  height: ${(props) => props.hauteur || "80%"};
  border-radius: ${(props) => props.border__raduis|| "4px"};

  .content__one{
      width: 70%!important;
  }


`;
export default SectContactStc;

