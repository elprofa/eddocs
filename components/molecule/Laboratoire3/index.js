import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./laboTrois.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";

const Details = [
  { url: "/img/temperature/2.png", title: "Chaine de mésure témperature à résistance de platine" },
  { url: "/img/temperature/3.png", title: "Chaîne de mesure de temperature à couple thermoélectrique" },
  { url: "/img/temperature/4.png", title: "Thermomètre en verre à dilatation liquide" },
  { url: "/img/temperature/5.png", title: "Thermohygromètre" },
  { url: "/img/temperature/9.png", title: "Therme hydrographe " },
  { url: "/img/temperature/11.png ", title: "Afficheur de température" },
  { url: "/img/temperature/10.png", title: "Thermo-bouton" },
  { url: "/img/temperature/12.png", title: "Enregistreur de temperature" },

];


const Laboratoire3 = (props) => {
  return (
    <LaboratoireStc1>
      <div className="row py-2 py-md-5">
        <div className="col-md-12">
          <img
            src="/img/temperature/1.png"
            width="100%"
            className="my-2 my-md-3"
          />
        </div>
      </div>
        <Row>
            <Col lg={6} md={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Temperature",partTwo:""}
                    }
                    paragraphe={
                        {
                        texte:<>Disposant des meilleurs incertitudes à l'échelle national,
                        le laboratoire de Température d'AIR METROLOGIE est accredité par le COFRAC pour
                        l'étalonnage de différents instruments de mesure:
                        </>}
                } />
            </Col>
            <Col lg={6} md={6} className="text-center">
                <img src="/img/e-d3.png" className="mx-2" />
                <img src="/img/e-d2.png" className="mx-2"  />
            </Col>
        </Row>
        <Row className="my-2 my-md-5">
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

export default Laboratoire3;
