import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "reactstrap";

const FormContactStc = styled(Form)`
  background-color: ${(props) => props.bg || "#c5c8c7"};
  width:${(props)=>props.largeur || props.largeur} 100%!important;
  border: 1px solid ${(props) => props.couleur_bordure || "transparent"};
  border-radius: 3px;
  color: ${(props) => props.couleur || "#000"};
  min-width: ${(props) => props.largeur_min || "150px"} !important;
  min-height: 40px;
  position: relative;
  overflow: hidden;
  font-size: ${(props)=>props.taille || "12px"};
  margin-top:${(props)=>props.marge_haut || ""};
  text-align:${(props)=>props.alignement || "center"} !important;
  margin-left:${(props)=>props.marge_gauche || "auto"} !important;
  margin-right:${(props)=>props.marge_droite || "auto"} !important;

}

Form{
    margin:${(props)=> props.margin || "1rem"};
}


.btn-submit{
    display: -webkit-box;
}

  
`;

export default FormContactStc;
