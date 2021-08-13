import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./laboratoire.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";

const Details = [
  { url: "/img/pression/2.png", title: "Nanomètre " },
  { url: "/img/pression/3.png", title: "Capteur de pression" },
  { url: "/img/pression/4.png", title: "Mano-vacuomèttre" },
  
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
            <PCard url1="/img/pression/7.png" url2="/img/pression/8.png" type={1} className="text-center"  />
            <PCard url1="/img/pression/9.png" url2="/img/pression/10.png" type={1} className="text-center" />
           
        </Row>
       
        <Row className="my-2 my-md-5">
            {
                Details.map((detail,index)=>(<PCard url1={detail.url} title={detail.title} key={index}  />))
            }
        </Row>
        <Row>
            <Col lg={6} md={6}>
                <TitreParagrapheLabo 
                    title={
                        {}
                    }
                    paragraphe={
                        {
                        texte:<>Le laboratoire dispose des meilleurs incertitudes à l'echelle nationale avec une equipe de 6 métrologues pour ce domaine: </>}
                } />
            </Col>
            
        </Row>

        <Row className="my-2 my-md-3">
            <Col>
                <Button texte="Demandez un devis >" className="demande_devis " />
            </Col>
        </Row>
        
    </LaboratoireStc1>
  );
};

export default Laboratoire7;
