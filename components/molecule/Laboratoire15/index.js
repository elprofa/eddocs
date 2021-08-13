import React, { useState } from 'react';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import LaboratoireStc1 from '../Laboratoire2/Laboratoire.stc';
import TitreParagrapheLabo from '../TitreParagrapheLabo';
import {Row,Col} from 'reactstrap'
import PCard from "../PresentationCard";

const Laboratoire15 = (props) => {
  
  return (
    <LaboratoireStc1 >
        <div className="row py-2 py-md-5">
        <div className="col-md-12">
          <img
            src="/img/Rectangle 89.png"
            width="100%"
            className="my-2 my-md-3"
          />
        </div>
      </div>

        <Row className="py-2 py-md-3">
            <Col lg={8} md={10}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Qualification Des",partTwo:"Autoclaves"}
                    }
                    paragraphe={
                        {
                        texte:<>Les autoclaves, bien que réglés en usine avant livraison, doivent obligatoirement subir une qualification 
                        opérationnelle sur site avant utilisation.
                        La qualification a comme objectif de s'assurer que l'équipement est conforme aux spécifications requises
                        pour soon utilisation. Elle établit la preuve que l'appareil répond, en condition d'exploitation, à toutes les
                        exigences normatives.
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
                        texte:<>Notre laboratoire L2MI est accrédité par le SEMAC et met à votre disposition une équipe qualifiée
                        pour vérifier l'aptitude des cycles de stérilisation dans les autoclaves afin de garantir le niveau
                        d'assurance de la stérilité requis par :
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
                        <li> Distribution de chaleur;</li>
                        <li> Pénétration de chaleur;</li>
                        <li> Calcul de la valeur stérilisatrice FO</li>
                    </ul>
                </div>
                <Col>
                    <Button texte="Demandez un devis >" className="demande_devis " />
                </Col>
            </Col>
            <Col lg={6} md={6} >
                <img src="/img/Groupe 1527.png" />
            </Col>
        </Row>
    
                   
        
</LaboratoireStc1>
  );
}

export default Laboratoire15;