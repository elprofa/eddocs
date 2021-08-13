import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./laboratoire.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";
import RowAccreditationSociete from "../RowAccreditationSociete";

const Details = [
  { url: "/img/temps/3.png", title: "Chronomètre à declenchement manuel" },
  { url: "/img/temps/2.png", title: "Chronomètre à declenchement électrique" },
  
];
const Details1 = [
  { url: "/img/temps/4.png", title: "Centrifugeuses à jet unique" },
  { url: "/img/temps/5.png", title: "Centrifugeuse industrielle" },

];

const Laboratoire9 = (props) => {
  return (
    <LaboratoireStc1>
      <div className="row py-2 py-md-5">
        <div className="col-md-12">
          <img
            src="/img/temps/1.png"
            width="100%"
            className="my-2 my-md-3"
          />
        </div>
      </div>
        <Row className="py-2 py-md-3">
            <Col lg={6} md={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Temps & ",partTwo:"Fréquence"}
                    }
                    paragraphe={
                        {
                        texte:<>Dans le cadre de son Accréditations SEMAC, le Laboratoire L2MI est
                        accredité pour l'etalonnage et verification des instruments de mesure de Temps
                        & Fréquence, à savoir:</>}
                } />
            </Col>
            <PCard url1="/img/temps/7.png" url2="/img/temps/8.png" type={1}  />
            
        </Row>
        <RowAccreditationSociete texte="Chronomètre (Sur labo)" url2="" url1="" type="1" />
        
        <Row className="my-2 my-md-2">
            {
                Details.map((detail,index)=>(<PCard url1={detail.url} title={detail.title} key={index}  />))
            }
        </Row>
        <RowAccreditationSociete texte="Centrifugeuse (Sur site)" type="0" />
        <Row className="my-2 my-md-2">
            {
                Details1.map((detail1,index)=>(<PCard url1={detail1.url} title={detail1.title} key={index}  />))
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

export default Laboratoire9;
