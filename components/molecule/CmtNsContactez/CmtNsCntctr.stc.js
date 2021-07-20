import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const SectionCmtNsContactezStc = styled(Container)`
    
  background-color: ${(props) => props.bg || "#fff"};
  width: ${(props) => props.largeur || "100%"};
  height: ${(props) => props.hauteur || "80%"};
  border-radius: ${(props) => props.border__raduis|| "4px"};

  .ranger{
    display: inline-block;
    text-align: -webkit-center;
  }
  .content__one{
      width: auto;
      text-align: center;
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
export default SectionCmtNsContactezStc;

