import React, { useState } from 'react';
import LaboratoireStc6 from './laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import LaboratoireStc1 from '../Laboratoire2/Laboratoire.stc';
import TitreParagrapheLabo from '../TitreParagrapheLabo';
import {Row,Col} from 'reactstrap'
import PCard from "../PresentationCard";

const Laboratoire14 = (props) => {
  
  return (
    <LaboratoireStc1 >
        <div className="row py-2 py-md-5">
        <div className="col-md-12">
          <img
            src="/img/Rectangle 79.png"
            width="100%"
            className="my-2 my-md-3"
          />
        </div>
      </div>

        <Row className="py-2 py-md-3">
            <Col lg={8} md={10}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Qualification Des",partTwo:"Environnements Propres"}
                    }
                    paragraphe={
                        {
                        texte:<>Les salles blanche et les environnements maîtrisés apparents constituent un moyen efficace pour maîtriser
                        la contamination particulaire de l'air. L'exploitation d'une salle propre nécessite la mise en place d'une
                        qualification initiale ainsi que d'un programme d'essai et de surveillance périodique pcermettant de justifier
                        des performances de l'installation.
                        La classification particulaire et/ou microbkologique ainsi que les exigences de surveillance sont définis par la
                        réglémentation en vigueur : ISO 14644, NFS 90-351, BPFs ou GMPs...
                        </>}
                } />
            </Col>            
        </Row>
        <Row className="py-2 py-md-3">
            <Col lg={8} md={8}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Expertise",partTwo:"Internationale"}
                    }
                    paragraphe={
                        {
                        texte:<>Accrédité par le COFRAC, le laboratoire L2MI vous propose les solutions adaptées pour le contrôle et 
                        la qualification de vos salles propres dans le respect des normes et des réglementations en vigueur
                        suivant les tests suivants :
                        </>}
                } />
            </Col> 
            <Col lg={4} md={4}>
                <img src="/img/7.png" />
                <img src="/img/8.png" />
            </Col>           
        </Row>
        <Row className="my-2 my-md-3">
            <Col lg={6} md={6} className="align-self-center">
                <div className="px-4">
                    <ul> 
                        <li>RADWAG de portée 500 g et de résolution 0,01 mg</li>
                        <li>RADWAG de portée 10,2 kg et de résolution 0,1 mg</li>
                        <li>Mettler Toledo de portée 24 g et de résolution 1 µg</li>
                        <li>Mettler Toledo de portée 210 g et de resolution 0,1 mg</li>
                        <li>Précisa de portée 6 kg et de résolution 0,01 g</li>
                        <li>Précisa de portée 6 kg et de résolution 0,01 g</li>
                    </ul>
                </div>
                <Col>
                    <Button texte="Demandez un devis >" className="demande_devis " />
                </Col>
            </Col>
            <Col lg={6} md={6} >
                <img src="/img/Groupe 1427.png" />
            </Col>
        </Row>
    
                   
        
</LaboratoireStc1>
  );
}

export default Laboratoire14;