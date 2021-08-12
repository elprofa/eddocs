import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./laboratoire.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";
import RowAccreditationSociete from "../RowAccreditationSociete";

const Details = [
  { url: "/img/anemometrie/3.png", title: "Anémomètre à helices" },
  { url: "/img/anemometrie/2.png", title: "Anémomètre à fil chaud" },
  
];

const Laboratoire10 = (props) => {
  return (
    <LaboratoireStc1>
      <div className="row py-2 py-md-5">
        <div className="col-md-12">
          <img
            src="/img/anemometrie/1.png"
            width="100%"
            className="my-2 my-md-3"
          />
        </div>
      </div>
        <Row>
            <Col lg={6} md={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Anemometrie ",partTwo:""}
                    }
                    paragraphe={
                        {
                        texte:<>La méthode d'etalonnage des anémomètres à fil chaud /à helice est fondée
                        sur une methode mesurage par comparaison entre l'indication de l'appareil à étalonner et la vitesse
                        d'air de référence mesurée par l'étalon du laboratoire </>}
                } />
            </Col>
            <Col lg={6} md={6} className="text-center">
               
            </Col>
        </Row>

        <RowAccreditationSociete texte="Le laboratoire L2MI est accredité SEMAC pour l'étalonnage de deux types d'Anemomètres:" url2="/img/anemometrie/8.png" url1="/img/anemometrie/7.png" type="1" />
        
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

export default Laboratoire10;
