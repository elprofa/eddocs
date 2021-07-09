import Styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const CardAdressStc = Styled.section`
  
  background-color: ${(props) => props.bg || "#fff"};
  width: ${(props) => props.largeur || "70%"};
  height: ${(props) => props.hauteur || "100%"};
  margin-left: 0!important;
  margin-right: 0!important;
  padding-left:0px!important;
  padding-right:0px!important;

 

`;
export default CardAdressStc ;

