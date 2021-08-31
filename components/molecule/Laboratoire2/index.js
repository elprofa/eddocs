import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./Laboratoire.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";
import Texte from "../../shared/Texte";

const Details = [
  { url: "/img/g-e6.png", title: "Multimètre" },
  { url: "/img/g-e3.png", title: "Générateur de courant" },
  { url: "/img/g-e7.png", title: "Générateur de tension" },
  { url: "/img/g-e8.png", title: "Boite de resistance" },
  { url: "/img/g-e5.png", title: "Mesureur de résistance " },
  { url: "/img/rect-e1.png ", title: "Calibreur multifonctions" },
  { url: "/img/rect-e5.png", title: "Générateur de Tension/Courant" },
];
const Details1 = [
    { url: "/img/g-e2.png", title: "Ponts RLC" },
    { url: "/img/rect-e4.png", title: "Power meter" },
    { url: "/img/rect-e3.png", title: "Analyseur de Réseau" },
    { url: "/img/rect-e2.png", title: "Wattmèttres" },
    { url: "/img/g-e4.png", title: "Générateur de Fonctions" },
    { url: "/img/g-e1.png ", title: "Testeur ESD" },
  ];

const Laboratoire2 = (props) => {
  return (
    <LaboratoireStc1>
      <div className="row py-2 py-md-5">
        <div className="col-lg-4">
            <TitreParagrapheLabo 
                    title={
                        {partOne:"Laboratoire",partTwo:"Electricité & magnetisme"}
                    }
                    paragraphe={
                        {
                        texte:<></>}
                } anim="lab2" />
        </div>
        <div className="col-md-12">
        
          <img
            src="/img/electricite/F4.png"
            width="100%"
            className="my-2 my-md-3"
          />

         
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 align-self-center">
            <img src="/img/8.png" className="mw-100 rounded-3"  />
            <img src="/img/7.png" className="mw-100 rounded-3" />
        </div>
        <div className="col-md-6">
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
        <div className="col-lg-4">
            <PCard url1="/img/g-e2.png" style={{width:"100%"}}  />
        </div>
      </div>
      
        <Row className="py-2 py-md-3">
            {
                Details1.map((detail1,index)=>(<PCard url1={detail1.url} title={detail1.title} key={index+detail1.url}  />))
            }
        </Row>
        
    </LaboratoireStc1>
  );
};

export default Laboratoire2;
