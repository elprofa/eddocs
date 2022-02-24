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
  { url: "/img/temps/3.png", title: "Chronomètre à declenchement manuel" },
  { url: "/img/temps/2.png", title: "Chronomètre à declenchement électrique" },
  
];
const Details1 = [
  { url: "/img/temps/4.png", title: "Centrifugeuses à jet unique" },
  { url: "/img/temps/5.png", title: "Centrifugeuse industrielle" },

];

const Laboratoire9 = (props) => {
  return (
    <LaboratoireStc1>
      <HeaderLabo img="/img/temps1.png" title={{
            partOne:"Temps &  ",
            partTwo:"Fréquences"
        }} logo="/img/logol2mi.png"/>
        <div className="row my-2 mb-md-5">
            <div className="col-lg-3 pt-2 pt-md-5 text-center">
                <img src="/img/temps/log.PNG" className="mw-100 rounded-3"  />
            </div>
            <div className="col-lg-6 col-md-6">
                <Texte texte="Dans le cadre de son Accréditations SEMAC, le Laboratoire L2MI est
                        accredité pour l'etalonnage et verification des instruments de mesure de Temps
                        & Fréquence, à savoir:" />
                <ul>
                  <li>Tachymètre optique et Mesureur de vitesse sans contact</li>
                  <li>Centrifugeuse (Vitesse de rotation & Intervalle de temps)</li>
                  <li>Instruments de mesure de temps (Temps)</li>
                  <li>Agitateurs et Générateurs de vitesse de rotation (Vitesse de rotation)</li>
                  <li>Appareil d’auscultation sonique (Temps)</li>
                </ul>
            </div>
            <div className="col-lg-3">
              <img src="/img/temps/205.png" width="100%" />
            </div>
        </div>
      <div className="row my-2 my-md-5">
        <PCard  url1="/img/temps/296.png" title=""  />
        <PCard  url1="/img/temps/295.png" title=""  />
        <PCard  url1="/img/temps/206.png" title=""  />
        <PCard  url1="/img/temps/209.png" title=""  />
        <PCard  url1="/img/temps/208.png" title=""  />
      </div>
      
    </LaboratoireStc1>
  );
};

export default Laboratoire9;
