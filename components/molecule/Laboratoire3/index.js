import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./laboTrois.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";
import HeaderLabo from "../HeaderLabo";
import Texte from "../../shared/Texte";

const Details1 = [
  { url: "/img/temperature/i1.png", title: "" },
  { url: "/img/temperature/i2.png", title: "" },
  { url: "/img/temperature/i3.png", title: "" },
];


const Laboratoire3 = (props) => {
  return (
    <LaboratoireStc1>
       <HeaderLabo img="/img/temperature1.png" title={{
            partOne:"Température ",
            partTwo:""
        }} />
        
      <div className="row">
        <div className="col-lg-2 align-self-center">
            <img src="/img/news/log5.png" className="mw-100 rounded-3"  />
        </div>
        <div className="col-md-7">
            <Texte texte="Disposant des meilleurs incertitudes à l'échelle national,
                        le laboratoire de Température d'AIR METROLOGIE est accredité par le COFRAC pour
                        l'étalonnage de différents instruments de mesure:"/>
            
            <ul>
              <li>Chaine de mésure témperature à résistance de platine</li>
              <li>Chaîne de mesure de temperature à couple thermoélectrique</li>
              <li>Thermomètre en verre à dilatation liquide</li>
              <li>Afficheur de température</li>
              <li>Enregistreur de temperature</li>
              <li>Étuves</li>
              <li>Enceintes climatiques </li>
              <li>four à moufle </li>
              <li>Bains thermostatique </li>
              <li>Four </li>
            </ul>
            <div className="row my-2 my-md-5">
              <div className="col-lg-12">
                  <Button texte="Demandez un devis" className="demande_devis " />
              </div>
          </div>
        </div>
        <div className="col-lg-3 align-self-center d-none d-md-none d-lg-block">
            <img src="/img/temperature/i4.PNG" className="my-3" style={{position: "absolute",right: 0, maxWidth: "400px !important"}} />
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

export default Laboratoire3;
