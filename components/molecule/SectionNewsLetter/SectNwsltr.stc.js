import Styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const SectionNwsLtrtStc = Styled.section`
  
  background-color: ${(props) => props.bg || "#0d77b6"};
  width: ${(props) => props.largeur || "100vw"};
  height: ${(props) => props.hauteur || "300px"};
  margin-left: 0!important;
  margin-right: 0!important;
  padding-left:0px!important;
  padding-right:0px!important;

  .lettre{
    text-align: center;
    align-content:center; 

  }

.content__btnnewsletter{
  display: inline-flex;
  //width: 4rem;
}

.col-md-10{
    display: inline-flex;
    align-items: center;
}

.inpt{
    margin-right: .8rem;
    margin-left: .8rem;
}

`;
export default SectionNwsLtrtStc;

