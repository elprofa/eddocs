import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./laboratoire.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";
import RowAccreditationSociete from "../RowAccreditationSociete";

const Details = [
  { url: "/img/machine/2.png", title: "Système de mesures des forces en traction" },
  { url: "/img/machine/3.png", title: "Système de mesures des forces en compression" },
  { url: "/img/machine/4.png", title: "Pull testers" },
  { url: "/img/machine/5.png", title: "Presse à béton (SEMAC)" },
  
];

const Laboratoire13 = (props) => {
  return (
    <LaboratoireStc1>
      <div className="row py-2 py-md-5">
        <div className="col-md-12">
          <img
            src="/img/machine/1.png"
            width="100%"
            className="my-2 my-md-3"
          />
        </div>
      </div>
        <Row>
            <Col lg={6} md={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Machine ",partTwo:"de force"}
                    }
                    paragraphe={
                        {
                        texte:<>Conformément aux normes en vigueur, nous garantissons des prestations
                        d'étalonnage indépendantes, efficaces et précises de vos machines d'éssaie
                        de force que ca soit en Traction ou en Compression. Les accréditations SEMAC
                        et TUNAC du Laboratoire L2MI vous permettent de réaliser de l'étalonnage des Machines suivantes avec le 
                        meilleur niveau d'incertitude sur le territoire national:</>}
                } />
            </Col>
            <Col lg={3} md={3} className="">
                <img src="/img/machine/9.png" height="100" className="mx-2" />
                <img src="/img/machine/8.png" className="mx-2"  />
            </Col>
            <Col lg={3} md={3} className="">
                <img src="/img/machine/7.png" height="100" className="mx-2" />
                <img src="/img/machine/8.png" className="mx-2"  />
            </Col>
        </Row>
        
        <Row className="my-2 my-md-2">
            {
                Details.map((detail,index)=>(<PCard url={detail.url} title={detail.title} key={index}  />))
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

export default Laboratoire13;
