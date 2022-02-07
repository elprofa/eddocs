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
      <HeaderLabo img="/img/machine/F4.png" title={{
            partOne:"Pésage ",
            partTwo:""
        }} />

        <div className="row my-2">
          <div className="col-lg-2 col-md-2 align-self-center text-center">
              <img src="/img/pesage/8.png" className="mw-100 rounded-3"  />
              <img src="/img/pesage/7.png" width="80px" className="mw-100 rounded-3" />
              <div className="row">
                <div className="col-lg-6 col-md-6 align-self-center text-center">
                    <img src="/img/pesage/9.png" className="mw-100 rounded-3"  />
                </div>
                <div className="col-lg-6 col-md-6">
                    <img src="/img/pesage/12.png" className="mw-100 rounded-3"  />
                    <img src="/img/pesage/8.png" width="50px" className="mw-100 rounded-3" />
                </div>
              </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <Texte texte="
              Accrédité par le SEMAC et le TUNAC-ILAC pour l'étalonnage 
              des instruments et systèmes de pesage, le laboratoire L2MI dispose 
              des meilleurs incertitudes dans ce domaine à l'échelle nationale
            " />
            <Texte texte="Dans le cadre de l'accréditation SEMAC" />
            <ul>
              <li>Etalonnage instrument de pesage à fonctionnement non automatique jusqu'à 6 tonnes</li>
              <li>Etalonnage des centrales à béton: ciment, agrégat, eau,...etc</li>
            </ul>
            <Texte texte="Dans le cadre de l'accréditation TUNAC-ILAC" />
            <ul>
              <li>Etalonnage Instruments de pesage à fonctionnement non automatique jusqu'à 1 tonne</li>
              <li>Système de mesure de force en Compression</li>
              <li>Pull Testers</li>
              <li>Presses à béton</li>
            </ul>

            <Button texte="Demandez un devis " className="demande_devis my-2 my-md-2" />
          </div>
          <div className="col-lg-4 col-md-4">
              <img src="/img/pesage/110.png" className="mw-100 rounded-3"  />
          </div>
        </div>

        <div className="row my-2 my-md-5">
            <PCard type="4" url1="/img/pesage/1.jpg" title=""  />
            <PCard type="4" url1="/img/pesage/2.png" title=""  />            
            <PCard type="4" url1="/img/pesage/3.jpg" title=""  />            
            <PCard type="4" url1="/img/pesage/4.jpg" title=""  />            
        </div>
      
        
    </LaboratoireStc1>
  );
};

export default Laboratoire9;
