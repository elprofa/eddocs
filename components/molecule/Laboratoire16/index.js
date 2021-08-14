import React, { useState } from 'react';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import LaboratoireStc1 from '../Laboratoire2/Laboratoire.stc';
import TitreParagrapheLabo from '../TitreParagrapheLabo';
import {Row,Col} from 'reactstrap'
import PCard from "../PresentationCard";

const Laboratoire16 = (props) => {
  
  return (
    <LaboratoireStc1 >
        <div className="row py-2 py-md-5">
            <div className="col-md-12">
            <img
                src="/img/Rectangle 99.png"
                width="100%"
                className="my-2 my-md-3"
            />
            </div>
        </div>

        <Row className="py-2 py-md-3">
            <Col lg={8} md={10}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Qualification De",partTwo:"L'air Comprime"}
                    }
                    paragraphe={
                        {
                        texte:<>Le laboratoire L2MI possède l'expertise et le matériel nécessaire pour la qualification votre réseau d'aire
                        comprimé, votre réseau d'air médécinal, votre réseau d'air respirable et les gaz à usage pharmaceutique
                        suivant les tests suivants : 
                        </>}
                } />
            </Col>            
        </Row>
        
        <Row className="my-2 my-md-3">
            <Col lg={4} md={4} className="align-self-center">
                <div className="px-4">
                    <ul> 
                        <li className="fw-bold"> Comptage de particule</li>
                        <li className="fw-bold"> Température de rosée;</li>
                        <li className="fw-bold"> Le débit</li>
                        <li className="fw-bold"> La pression</li>
                        <li className="fw-bold"> La teneur en huile</li>
                        <li className="fw-bold">  Teneur d'humidité</li>
                        <li className="fw-bold"> Contrôle CO, CO2, NO, ...</li>
                    </ul>
                </div>
            </Col>
            <Col lg={8} md={8} >
                <img src="/img/Groupe 232.png" />
            </Col>
        </Row>
        <Row className="my-2 my-md-3">
            <Col>
                <Button texte="Demandez un devis >" className="demande_devis " />
            </Col>
        </Row>
                   
        
</LaboratoireStc1>
  );
}

export default Laboratoire16;