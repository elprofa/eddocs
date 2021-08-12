import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./Laboratoire.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";

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
        <div className="col-md-12">
          <img
            src="/img/rectangle-e.png"
            width="100%"
            className="my-2 my-md-3"
          />
        </div>
      </div>
        <Row>
            <Col lg={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Laboratoire",partTwo:"Electricité & magnetisme"}
                    }
                    paragraphe={
                        {
                        texte:<>Doté des étalons les plus performants et accrédité par le COFRAC, 
                        AIR METROLOGIE dispose d'un laboratoire en Électricité et Magnétisme 
                        couvrant l'étalonnage en laboratoire de plusieurs instruments de mesure à savoir</>}
                } />
            </Col>
        </Row>
        <Row>
            {
                Details.map((detail,index)=>(<PCard url={detail.url} title={detail.title} key={index}  />))
            }
        </Row>
        <Row className="my-2 my-md-3">
            <Col>
                <Button texte="Demandez un devis >" className="demande_devis " />
            </Col>
        </Row>
        <Row className="my2 my-md-5">
            <Col lg={6} md={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Expertise",partTwo:"Internationale"}
                    }
                    paragraphe={
                        {
                        texte:<>Notre laboratoire est Raccordé à la chaine internationale à
                        travers un laboratoire accredité par le COFRAC pour l'etalonnage des instruments suivants:</>}
                } />
            </Col>
            <Col className="text-center">
                <img src="/img/e-d3.png" className="mx-2" />
                <img src="/img/e-d2.png" className="mx-2"  />
                
            </Col>
        </Row>
        <Row className="my-2">
            {
                Details1.map((detail1,index)=>(<PCard url={detail1.url} title={detail1.title} key={index+detail1.url}  />))
            }
        </Row>
    </LaboratoireStc1>
  );
};

export default Laboratoire2;
