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
  { url: "/img/anemometrie/3.png", title: "Anémomètre à helices" },
  { url: "/img/anemometrie/2.png", title: "Anémomètre à fil chaud" },
  
];

const Laboratoire10 = (props) => {
  return (
    <LaboratoireStc1>
      <HeaderLabo img="/img/ananometrie1.png" title={{
            partOne:"Anemometrie ",
            partTwo:""
        }} logo="/img/logol2mi.png" />
        <div className="row">
            <div className="col-lg-2 pt-2 pt-md-5 text-center">
                
            </div>
            <div className="col-lg-7 col-md-7">
                <Texte texte="La méthode d'etalonnage des anémomètres à fil chaud /à helice est fondée
                          sur une methode mesurage par comparaison entre l'indication de l'appareil à étalonner et la vitesse
                          d'air de référence mesurée par l'étalon du laboratoire" />
                <Texte texte="Le laboratoire L2MI est accredité SEMAC pour l'étalonnage de deux types d'Anemomètres:" />
                <ul>
                  <li>Anémometrie à helice</li>
                  <li>Anémometrie à Fil chaud</li>
                </ul>
            </div>
            <div className="col-lg-3">
              <img src="/img/anemometrie/F3.png" width="100%" />
            </div>
        </div>
      <div className="row">
        <PCard  url1="/img/anemometrie/205.png" title=""  />
        <PCard  url1="/img/anemometrie/206.png" title=""  />
        <PCard  url1="/img/anemometrie/297.png" title=""  />
        <PCard  url1="/img/anemometrie/298.png" title=""  />
      </div>
    </LaboratoireStc1>
  );
};

export default Laboratoire10;
