import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./Laboratoire.stc";
import { theme } from "../../../theme";
import Title from "../../shared/Title";
import Trait from "../../shared/Trait";
import Texte from "../../shared/Texte";
import Button from "../../shared/Button";
import PCard from "../PresentationCard";

const Details = [
  { url: "img/g-e6.png", title: "Multimètre" },
  { url: "/img/g-e3.png", title: "Générateur de courant" },
  { url: "/img/g-e7.png", title: "Générateur de tension" },
  { url: "/img/g-e8.pn", title: "Boite de resistance" },
  { url: "/img/g-e5.png", title: "Mesureur de résistance " },
  { url: "/img/rect-e1.png ", title: "Calibreur multifonctions" },
  { url: "/img/rect-e5.png", title: "Générateur de Tension/Courant" },
];

const Laboratoire2 = (props) => {
  return (
    <LaboratoireStc1>
      
    </LaboratoireStc1>
  );
};

export default Laboratoire2;
