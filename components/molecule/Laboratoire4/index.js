import React, { useState } from 'react';
import LaboratoireStc4 from './laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import LaboratoireStc1 from '../Laboratoire2/Laboratoire.stc';
import {Row,Col} from 'reactstrap'
import TitreParagrapheLabo from '../TitreParagrapheLabo';
import PCard from "../PresentationCard";

const Laboratoire4 = (props) => {
    const Details = [
        { url: "/img/Groupe 206.png", title: "Thermolygromètre" },
        { url: "/img/Groupe 205.png", title: "Hygromètre à condensation" },
        { url: "/img/Groupe 207.png", title: "Afficheur et enregistreur" },
        { url: "/img/Groupe 208.png", title: "Hygromètre à variation d'impédance" },
        { url: "/img/Groupe 209.png", title: "Thermo hygrographe" },
      ];

  return (
    <LaboratoireStc4 >
        <div className="row py-2 py-md-5">
            <div className="col-md-12">
                <img
                    src="/img/Rectangle -16.png"
                    width="100%"
                    className="my-2 my-md-3"
                />
            </div>
        </div>
        <Row className="py-2 py-md-3">
            <Col lg={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Hygrometrie",partTwo:""}
                    }
                    paragraphe={
                        {
                        texte:<>Le laboratoire dispose des meilleurs incertitudes à échelle nationale avec
                        une équipe de 4 métrologues pour ce domaine.
                        De plus notre laboratoire est accrédité COFRAC pour l'étalonnage des:</>}
                } />
            </Col>
            <PCard url1="/img/e-d3.png" url2="/img/e-d2.png" type={1}  />
        </Row>
        
        <Row className="py-2 py-md-3">
            {
                Details.map((detail,index)=>(<PCard url1={detail.url} title={detail.title} key={index}  />))
            }
        </Row>
        <Row className="my-2 my-md-3">
            <Col>
                <Button texte="Demandez un devis >" className="demande_devis " />
            </Col>
        </Row>
        
</LaboratoireStc4>
  );
}

export default Laboratoire4;