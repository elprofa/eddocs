import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./laboratoire.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";
import RowAccreditationSociete from "../RowAccreditationSociete";
import HeaderLabo from "../HeaderLabo";
import Texte from "../../shared/Texte";

const Details = [
  { url: "/img/volume/3.png", title: "" },
  { url: "/img/volume/4.png", title: "" },
  { url: "/img/volume/5.png", title: "" },
  
];

const Laboratoire11 = (props) => {
  return (
    <LaboratoireStc1>
        <HeaderLabo img="/img/news/volume.jpeg" title={
            {
                partOne:"Volume &  ",
                partTwo:"Masse volumique"
            }
        } />
      
        <div className="row">
            <div className="col-lg-2 align-self-center text-center">
                <img src="/img/8.png" className="mw-100 rounded-3"  />
                <img src="/img/semac1.png" className="mw-100 rounded-3" width="80px" />
            </div>
            <div className="col-lg-10 col-md-10">
                <Texte texte="Notre laboratoire est accredité SEMAC 
                pour realiser l'etalonnage de la verrerie du laboratoire et des densimetres:" />

                <Texte texte="Des instrument volumétrique: " />
                    <div className="row my-2 my-md-3">
                        <div className="col-lg-7 col-md-5">
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
                            <Texte texte="Des laboratoire et des densimètre" className="fw-bold" />
                            <Texte texte="Le laboratoire est raccordé à la chaine internationale à travers un laboratoire 
                        DKD pour l'étalonnage de ph mètre-conductimètre-viscosimètre etc..." />

                            <Button texte="Demandez un devis >" className="demande_devis " />
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <img src="/img/volume/F3.png" width="100%" />
                        </div>
                    </div>
            </div>
        </div>
        
        
        <Row className="my-2 my-md-3">
            <Col lg={12}>
                <img src="/img/volume/239.png"  width="100%"/>
            </Col>
        </Row>
       
    </LaboratoireStc1>
  );
};

export default Laboratoire11;
