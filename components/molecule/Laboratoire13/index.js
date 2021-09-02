import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./laboratoire.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";
import RowAccreditationSociete from "../RowAccreditationSociete";
import HeaderLabo from "../HeaderLabo";
import Texte from "../../shared/Texte";

const Details = [
  { url: "/img/machine/2.png", title: "Système de mesures des forces en traction" },
  { url: "/img/machine/3.png", title: "Système de mesures des forces en compression" },
  { url: "/img/machine/4.png", title: "Pull testers" },
  { url: "/img/machine/5.png", title: "Presse à béton (SEMAC)" },
  
];

const Laboratoire13 = (props) => {
  return (
    <LaboratoireStc1>
       <HeaderLabo img="/img/machine/F4.png" title={{
            partOne:"Machine ",
            partTwo:"de force"
        }} />

        <div className="row my-2">
          <div className="col-lg-2 col-md-2 align-self-center text-center">
              <img src="/img/machine/8.png" className="mw-100 rounded-3"  />
              <img src="/img/machine/7.png" width="80px" className="mw-100 rounded-3" />
              <div className="row">
                <div className="col-lg-6 col-md-6 align-self-center text-center">
                    <img src="/img/machine/9.png" className="mw-100 rounded-3"  />
                </div>
                <div className="col-lg-6 col-md-6">
                    <img src="/img/machine/10.png" className="mw-100 rounded-3"  />
                    <img src="/img/machine/8.png" width="50px" className="mw-100 rounded-3" />
                </div>
              </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <Texte texte="
              Conformément aux normes en vigueur, nous garantissons des prestations
              d'étalonnage indépendantes, efficaces et précises de vos machines d'éssaie
              de force que ca soit en Traction ou en Compression. Les accréditations SEMAC
              et TUNAC du Laboratoire L2MI vous permettent de réaliser de l'étalonnage des Machines suivantes avec le 
              meilleur niveau d'incertitude sur le territoire national:
            " />
            <ul>
              <li>Système de mesure de force en Traction</li>
              <li>Système de mesure de force en Compression</li>
              <li>Pull Testers</li>
              <li>Presses à béton</li>
            </ul>
            <Button texte="Demandez un devis " className="demande_devis " />
          </div>
        </div>

        <div className="row my-2 my-md-5">
            <PCard  url1="/img/machine/564.png" title=""  />
            <PCard  url1="/img/machine/568.png" title=""  />
            <PCard  url1="/img/machine/565.png" title=""  />
            <PCard   url1="/img/machine/566.png" title=""  />
            <PCard   url1="/img/machine/567.png" title=""  />
        </div>
    </LaboratoireStc1>
  );
};

export default Laboratoire13;
