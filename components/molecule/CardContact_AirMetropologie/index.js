import React from "react";
import { Container, Row, Col } from "reactstrap";
import CardCtznStc from "./CardCtzn.stc";
import Image from "../../shared/Image";
import Texte from "../../shared/Texte";

const CardCtzn = (props) => {
  const { bg } = props;
  return (
    <CardCtznStc>
      <div className="background-card p-4 w-75 mx-auto">
        <div className="text-center">
          <Image letGo={{ src: "/img/lo.png" }} />
        </div>
        <div className="ml-5">texte</div>
      </div>
    </CardCtznStc>
  );
};
export default CardCtzn;
