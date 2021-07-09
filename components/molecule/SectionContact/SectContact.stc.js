import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const SectContactStc = styled(Container)`
    
  background-color: ${(props) => props.bg || "#fff"};
  width: ${(props) => props.largeur || "100%"};
  height: ${(props) => props.hauteur || "80%"};
  border-radius: ${(props) => props.border__raduis|| "4px"};

  .content__one{
      width: 80%;
  }

  .content__two{
    width: 80%;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .txt__blue{
    background: #007bff;
    color: aliceblue;
    margin-left: .3rem;
  }

  .icnTxt__ctnt{
    color: #f8f8f8!important; 
  }

.section__ctn{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

`;
export default SectContactStc;

