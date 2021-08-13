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
            <Col lg={6} md={6} className="align-self-center">
                <div className="px-4">
                    <ul> 
                        <li> Comptage de particule</li>
                        <li> Température de rosée;</li>
                        <li> Le débit</li>
                        <li> La pression</li>
                        <li> La teneur en huile</li>
                        <li> Teneur d'humidité</li>
                        <li> Contrôle CO, CO2, NO, ...</li>
                    </ul>
                </div>
                <Col>
                    <Button texte="Demandez un devis >" className="demande_devis " />
                </Col>
            </Col>
            <Col lg={6} md={6} >
                <img src="/img/Groupe 232.png" />
            </Col>
        </Row>
    
                   
        
</LaboratoireStc1>
  );
}

export default Laboratoire16;