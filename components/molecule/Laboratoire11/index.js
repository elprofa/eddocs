import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./laboratoire.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";
import RowAccreditationSociete from "../RowAccreditationSociete";

const Details = [
  { url: "/img/volume/3.png", title: "" },
  { url: "/img/volume/4.png", title: "" },
  { url: "/img/volume/5.png", title: "" },
  
];

const Laboratoire11 = (props) => {
  return (
    <LaboratoireStc1>
      <div className="row py-2 py-md-5">
        <div className="col-md-12">
          <img
            src="/img/volume/1.png"
            width="100%"
            className="my-2 my-md-3"
          />
        </div>
      </div>
        <Row className="py-2 py-md-3">
            <Col lg={6} md={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Volume &  ",partTwo:"Masse volumique"}
                    }
                    paragraphe={
                        {
                        texte:<>Notre laboratoire SEMAC pour réaliser l'étalonnage de la verrerie du laboratoire et des densimetres.</>}
                } />
            </Col>
            <PCard url1="/img/pression/9.png" url2="/img/volume/8.png" type={1}  />
        </Row>
        
        <Row className="my-2 my-md-3">
            <Col lg={6} md={6} className="align-self-center">
                <h4 className="fw-bold">Balance</h4>
                <div className="px-4">
                    <ul> 
                        <li>Pipettes à 1 ou 2 traits</li>
                        <li>Pipettes graduées</li>
                        <li>Pipettes à piston à volume fixe ou variable mono ou multi canal</li>
                        <li>Mettler Toledo de portée 210 g et de resolution 0,1 mg</li>
                        <li>Eprouvettes graduées</li>
                        <li>Fioles à un trait</li>
                        <li>Burettes graduées</li>
                        <li>Distributeurs de liquide à volume variables et fixe ou seringue</li>
                        <li>Pycnometres</li>
                        <li>des aréomètres et des densimètres</li>
                    </ul>
                </div>
            </Col>
            <Col lg={6} md={6} >
                <img src="/img/volume/2.png" />
            </Col>
        </Row>
        <Row className="py-2 py-md-3">
            <Col lg={6} md={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Expertise",partTwo:"Internationale"}
                    }
                    paragraphe={
                        {
                        texte:<>Le laboratoire est raccordé à la chaine internationale à travers un laboratoire 
                        DKD pour l'étalonnage de ph mètre-conductimètre-viscosimètre etc...</>}
                } />
            </Col>
        </Row>
        <Row className="my-2 my-md-2">
            {
                Details.map((detail,index)=>(<PCard url1={detail.url} title={detail.title} key={index}  />))
            }
        </Row>
        <Row className="my-2 my-md-3">
            <Col>
                <Button texte="Demandez un devis >" className="demande_devis " />
            </Col>
        </Row>
       
    </LaboratoireStc1>
  );
};

export default Laboratoire11;
