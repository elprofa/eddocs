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
  { url: "/img/pesage/1.jpeg", title: "Etalonnage instrument de pesage à fonctionnement non automatique jusqu'à 6 tonnes " },
  { url: "/img/pesage/2.png", title: "Etalonnage instrument de pesage à fonctionnement non automatique jusqu'à 6 tonnes " },
  { url: "/img/pesage/3.jpeg", title: "Etalonnage des centrales à beton:ciment, agregat, eaux,etc..." },
  { url: "/img/pesage/4.jpeg", title: "Etalonnage des centrales à beton:ciment, agregat, eaux,etc..." },
  
];
const Details1 = [
  { url: "/img/pesage/4.png", title: "Etalonnage, instrument de pesage à fonctionnement non automatique jusqu'à 1 tonne" },
  
];

const Laboratoire9 = (props) => {
  return (
    <LaboratoireStc1>
      <HeaderLabo img="/img/pesage/F4.png" title={{
            partOne:"Pésage ",
            partTwo:""
        }} />

        <div className="row my-2">
          <div className="col-lg-3 col-md-3 align-self-center text-center">
              <img src="/img/pesage/log.PNG" className="mw-100 rounded-3"  />
              
          </div>
          <div className="col-lg-5 col-md-5">
            <Texte texte="
              Accrédité par le SEMAC et le TUNAC-ILAC pour l'étalonnage 
              des instruments et systèmes de pesage.
            " />
            <Texte texte="Dans le cadre de l'accréditation SEMAC" />
            <ul>
              <li>Etalonnage instrument de pesage à fonctionnement non automatique jusqu'à 6 tonnes</li>
            </ul>
            <Texte texte="Dans le cadre de l'accréditation TUNAC-ILAC" />
            <ul>
              <li>Etalonnage Instruments de pesage à fonctionnement non automatique jusqu'à 1 tonne</li>
            </ul>
            <Texte texte="Le laboratoire propose aussi des prestations Raccordées SI pour :" />
            <ul>
              <li>Etalonnage des centrales à béton : ciment, agrégat, eau,…etc</li>
            </ul>

            <Button texte="Demandez un devis " className="demande_devis my-2 my-md-2" />
          </div>
          <div className="col-lg-4 col-md-4">
              <img src="/img/pesage/110.png" className="mw-100 rounded-3" style={{maxWidth:"100%"}}  />
          </div>
        </div>

        <div className="row my-2 my-md-5">
            <PCard type="4" url1="/img/pesage/p1.png" title=""  />
            <PCard type="4" url1="/img/pesage/p2.png" title=""  />            
            <PCard type="4" url1="/img/pesage/p3.png" title=""  />            
        </div>
      
        
    </LaboratoireStc1>
  );
};

export default Laboratoire9;
