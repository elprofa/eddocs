import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./laboratoire.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";

const Details = [
  { url: "/img/pesage/2.png", title: "Etalonnage instrument de pesage à fonctionnement non automatique jusqu'à 6 tonnes " },
  { url: "/img/pesage/3.png", title: "Etalonnage des centrales à beton:ciment, agregat, eaux,etc..." },
  
];
const Details1 = [
  { url: "/img/pesage/4.png", title: "Etalonnage, instrument de pesage à fonctionnement non automatique jusqu'à 1 tonne" },
  
];

const Laboratoire9 = (props) => {
  return (
    <LaboratoireStc1>
      <div className="row py-2 py-md-5">
        <div className="col-md-12">
          <img
            src="/img/pesage/1.png"
            width="100%"
            className="my-2 my-md-3"
          />
        </div>
      </div>
        <Row>
            <Col lg={6} md={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Pésage",partTwo:""}
                    }
                    paragraphe={
                        {
                        texte:<>Accrédité par le SEMAC et le TUNAC-ILAC pour l'étalonnage 
                        des instruments et systèmes de pesage, le laboratoire L2MI dispose 
                        des meilleurs incertitudes dans ce domaine à l'échelle nationale</>}
                } />
            </Col>
            <Col lg={6} md={6} className="text-center">
                <img src="/img/pesage/7.png" className="mx-2" />
                <img src="/img/pesage/8.png" className="mx-2"  />
            </Col>
        </Row>
        <Row className="my-2 my-md-3">
            <Col lg={6} md={6} className="align-self-center">
                <h6 className="fw-bold">Dans le cadre de l'accréditation SEMAC</h6>
            </Col>
            <Col lg={6} md={6} className="">
                <img src="/img/pesage/10.png" height="100" className="mx-2" />
                <img src="/img/pesage/11.png" className="mx-2"  />
            </Col>
        </Row>
        <Row className="my-2 my-md-2">
            {
                Details.map((detail,index)=>(<PCard url={detail.url} title={detail.title} key={index}  />))
            }
        </Row>
        <Row className="my-2 my-md-3">
            <Col lg={6} md={6} className="align-self-center">
                <h6 className="fw-bold">Dans le cadre de l'accréditation TUNAC-ILAC</h6>
            </Col>
            <Col lg={6} md={6} className="">
                <img src="/img/pesage/9.png" height="100" className="mx-2" />
                <img src="/img/pesage/11.png" className="mx-2"  />
            </Col>
        </Row>
        <Row className="my-2 my-md-2">
            {
                Details1.map((detail1,index)=>(<PCard url={detail1.url} title={detail1.title} key={index}  />))
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
