import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./laboratoire.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";

const Details = [
  { url: "/img/pression/2.png", title: "Chaine de mésure témperature à résistance de platine" },
  { url: "/img/pression/3.png", title: "Chaîne de mesure de pression à couple thermoélectrique" },
  { url: "/img/pression/4.png", title: "Thermomètre en verre à dilatation liquide" },
  { url: "/img/pression/5.png", title: "Thermohygromètre" },
  { url: "/img/pression/9.png", title: "Therme hydrographe " },
  { url: "/img/pression/11.png ", title: "Afficheur de température" },
  { url: "/img/pression/10.png", title: "Thermo-bouton" },
  { url: "/img/pression/12.png", title: "Enregistreur de pression" },

];


const Laboratoire7 = (props) => {
  return (
    <LaboratoireStc1>
      <div className="row py-2 py-md-5">
        <div className="col-md-12">
          <img
            src="/img/pression/1.png"
            width="100%"
            className="my-2 my-md-3"
          />
        </div>
      </div>
        <Row>
            <Col lg={6} md={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Préssion",partTwo:""}
                    }
                    paragraphe={
                        {
                        texte:<>Le laboratoire L2MI vous propose désormais un etalonnage Accredité 
                        COFRAC et SEMAC sur site et sur labo pour l'étalonnage des instruments de mesure
                          de pression suivants: </>}
                } />
            </Col>
            <Col lg={3} md={3} className="text-center">
                <img src="/img/pression/7.png" className="mx-2" />
                <img src="/img/pression/8.png" className="mx-2"  />
            </Col>
            <Col lg={3} md={3} className="text-center">
                <img src="/img/pression/9.png" className="mx-2" height="120"/>
                <img src="/img/pression/10.png" className="mx-2"  />
            </Col>
        </Row>
        <Row className="my-2 my-md-3">
            <Col>
                <Button texte="Demandez un devis >" className="demande_devis " />
            </Col>
        </Row>
        <Row className="my-2 my-md-5">
            {
                Details.map((detail,index)=>(<PCard url={detail.url} title={detail.title} key={index}  />))
            }
        </Row>
       
        
    </LaboratoireStc1>
  );
};

export default Laboratoire7;
