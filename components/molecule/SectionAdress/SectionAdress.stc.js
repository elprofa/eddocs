import Styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const SectionAdressStc = Styled.section`
  
  background-color: ${(props) => props.bg || "#fff"};
  width: ${(props) => props.largeur || "100vw"};
  height: ${(props) => props.hauteur || "80%"};
  margin-left: 0!important;
  margin-right: 0!important;
  padding-left:0px!important;
  padding-right:0px!important;

  .content__adress{
    display: -webkit-inline-box;
    margin-left: 5rem;
    margin-top: 5rem;
  }



`;
export default SectionAdressStc;

