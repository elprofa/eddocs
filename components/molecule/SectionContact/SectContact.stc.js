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

  .txt__blue{
    background: #007bff;
    color: aliceblue;
    margin-left: .3rem;
  }

  .icnTxt__ctnt{
    color: #f8f8f8!important; 
  }


`;
export default SectContactStc;

