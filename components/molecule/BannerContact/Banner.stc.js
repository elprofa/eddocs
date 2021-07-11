import Styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const BannerStc = Styled.section`
  
  background-color: ${(props) => props.bg || "rgba(0, 93, 218, 0.66)"};
  background-image: url("DSC_0101.jpg");
  background-size: cover;
  width: ${(props) => props.largeur || "100%"};
  height: ${(props) => props.hauteur || "400px"};
  margin-left: 0!important;
  margin-right: 0!important;
  padding-left:0px!important;
  padding-right:0px!important;
  text-align: center;
  margin-bottom: ${(props) => props.largeurBottom || "2rem"};

 .banner{
    text-align: -webkit-center
 }

`;
export default BannerStc ;
