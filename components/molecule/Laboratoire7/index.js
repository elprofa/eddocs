import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import LaboratoireStc1 from "./laboratoire.stc";
import { theme } from "../../../theme";

import Button from "../../shared/Button";
import PCard from "../PresentationCard";
import TitreParagrapheLabo from "../TitreParagrapheLabo";
import HeaderLabo from "../HeaderLabo";
import Texte from "../../shared/Texte";

const Laboratoire7 = (props) => {
  return (
    <LaboratoireStc1>
      <HeaderLabo img="/img/pression/F4.png" title={{
            partOne:"Pression ",
            partTwo:""
        }} />

        <div className="row my-2">
          <div className="col-lg-2 col-md-2 pt-md-3">
              <img src="/img/pression/8.png" className="mw-100 rounded-3"  />
              <img src="/img/pression/7.png" width="80px" className="mw-100 rounded-3" />
              <div className="row">
                <div className="col-lg-12 col-md-12 align-self-center text-center">
                  <img src="/img/pression/8.png" className="mw-100 rounded-3"  />
                  <img src="/img/pression/10.png" width="80px" className="mw-100 rounded-3" />
                </div>
              </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <Texte texte="Le laboratoire L2MI vous propose désormais un etalonnage Accredité 
                        COFRAC et SEMAC sur site et sur labo pour l'étalonnage des instruments de mesure
                          de pression suivants:" />
            <ul>
              <li>Manomètre</li>
              <li>Capteur de pression</li>
              <li>Mano-vacuomètre</li>
            </ul>
            <Texte texte="Le laboratoire dispose des meilleurs incertitudes à l'echelle nationale avec une equipe de 6 métrologues pour ce domaine " />
            
            <Button texte="Demandez un devis " className="demande_devis my-2 my-md-2" />
          </div>
          <div className="col-lg-3 col-md-3">
              <img src="/img/pression/293.png" className="mw-100 rounded-3"  />
          </div>
        </div>

        <div className="row my-2 my-md-5">
            <PCard  url1="/img/pression/15.png" title=""  />
            <PCard  url1="/img/pression/16.png" title=""  />            
            <PCard  url1="/img/pression/17.png" title=""  />            
            <PCard  url1="/img/pression/18.png" title=""  />            
            <PCard  url1="/img/pression/19.png" title=""  />            
            <PCard  url1="/img/pression/20.png" title=""  />            
        </div>
      
    </LaboratoireStc1>
  );
};

export default Laboratoire7;
