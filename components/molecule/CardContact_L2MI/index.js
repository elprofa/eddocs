import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardConractLMStc from "./ContactL2mi.stc";
import Image from "../../shared/Image";
import Texte from "../../shared/Texte";

const CardConractLM = (props) => {
  const { bg } = props;
  return (
    <CardConractLMStc md={6} className="text-center">
      <div className="background-card py-4 w-75 mx-auto mt-3 mt-md-0">
        <div>
          <Image letGo={{ src: "/img/go.png" }} />
        </div>
        <div>texte</div>
      </div>
    </CardConractLMStc>
  );
};
export default CardConractLM;
