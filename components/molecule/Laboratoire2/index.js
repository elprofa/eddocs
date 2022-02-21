import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./Laboratoire.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";
import Texte from "../../shared/Texte";
import HeaderLabo from "../HeaderLabo";

const Details = [
  { url: "/img/g-e7.png", title: "Multimètre" },
  { url: "/img/g-e8.png", title: "Multimètre" },
  { url: "/img/g-e3.png", title: "Multimètre" },
  { url: "/img/ge-e.jpg", title: "Multimètre" },
  { url: "/img/g-e6.png", title: "Générateur de courant" },
  { url: "/img/ge-e.png", title: "Générateur de tension" },
];
const Details1 = [
    { url: "/img/electricite/1.jpg", title: "" },
    { url: "/img/electricite/2.jpg", title: "" },
    { url: "/img/electricite/3.jpg", title: "" },
    { url: "/img/electricite/4.jpg", title: "" },
    { url: "/img/electricite/5.jpg", title: "" },
  ];

const Laboratoire2 = (props) => {
  return (
    <LaboratoireStc1>
       <HeaderLabo img="/img/electricite.png" title={{
            partOne:"Electricité & ",
            partTwo:"magnetisme"
        }} />
        
      <div className="row">
        <div className="col-lg-2 align-self-center">
            <img src="/img/news/log4.PNG" className="mw-100 rounded-3"  />
        </div>
        <div className="col-md-10">
            <Texte texte="Doté des étalons les plus performants et accrédité par le COFRAC, 
                        AIR METROLOGIE dispose d'un laboratoire en Électricité et Magnétisme 
                        couvrant l'étalonnage en laboratoire de plusieurs instruments de mesure à savoir"/>
            
            <ul>
              <li>Multimètre</li>
              <li>Génerateur de courant</li>
              <li>Génerateur de tension</li>
              <li>Génerateur de tension</li>
              <li>Boite de resistance</li>
              <li>Mesureur de résistance</li>
              <li>Calibrateur multifonctions</li>
              <li>Generateir de Tension / Courant</li>
            </ul>

            <Texte style={{fontWeight:"bold"}} texte="Notre laboratoire est Raccordé à la chaine internationale à
                        travers un laboratoire accredité par le COFRAC pour l'etalonnage des instruments suivants"/>
            
            <ul>
              <li>Ponts RLC</li>
              <li>Power meter</li>
              <li>Analyseurs de réseau</li>
              <li>Wattmèttres</li>
              <li>Générateur de fonction</li>
              <li>Testeurs ESD</li>
            </ul>
            <div className="row my-2 my-md-3">
              <div className="col-lg-12">
                  <Button texte="Demandez un devis" className="demande_devis " />
              </div>
          </div>
        </div>
      </div>
      
        <Row className="py-2 py-md-3">
           -
        </Row>
        
    </LaboratoireStc1>
  );
};

export default Laboratoire2;
