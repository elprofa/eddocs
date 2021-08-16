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

const Laboratoire6 = (props) => {
  
  return (
    <LaboratoireStc6 >
        <div className="row py-2 py-md-5">
        <div className="col-md-12">
          <img
            src="/img/Rectangle 69.png"
            width="100%"
            className="my-2 my-md-3"
          />
        </div>
      </div>

        <Row className="py-2 py-md-3">
            <Col lg={6} md={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Masse",partTwo:""}
                    }
                    paragraphe={
                        {
                        texte:<>Pour l'étalonnage et vérification de vos Masses étalon notre laboratoire
                        dispose des moyens suivants:
                        </>}
                } />
            </Col>            
        </Row>
        
        <Row className="my-2 my-md-3">
            <Col lg={6} md={6} className="align-self-center">
                <h4 className="fw-bold">Balance</h4>
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
            </Col>
            <Col lg={6} md={6} >
                <img src="/img/Groupe 227.png" />
            </Col>
        </Row>
        <Row className="my-2 my-md-3">
            <Col lg={6} md={6} >
                <img src="/img/Groupe 228.png" />
            </Col>
            <Col lg={6} md={6} className="align-self-center">
                <h4 className="fw-bold">Masse</h4>
                <div className="px-4">
                    <ul> 
                        <li> 2 Boîtes des masses classes E1</li>
                        <li> 2 Boîtes des masses classes E2</li>
                        <li> 2 Boîtes des masses classes F1</li>
                    </ul>
                </div>
            </Col>
        </Row>
        <Row>
            <Col lg={6} md={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Expertise",partTwo:" Internationale"}
                    }
                    paragraphe={
                        {
                        texte:<>Pour l'étalonnage et vérification de vos Masses étalon notre laboratoire
                        dispose des moyens suivants:
                        </>}
                }/>
            </Col>            
        </Row>

        <Row className="my-2 my-md-3">
            <PCard url1="/img/7.png" url2="/img/8.png" type={1}  />
            <Col lg={6} md={6} className="align-self-center">
                <div className="px-4">
                    <ul> 
                        <li> Classe E2 de 1g à 10 Kg</li>
                        <li> Classe F1 de 1mg à 20 Kg</li>
                        <li> Classe F2 de 1mg à 20 Kg</li>
                        <li> Classe M de 1mg à 20 Kg</li>
                    </ul>
                </div>
            </Col>
        </Row>
    
        <Row className="my-2 my-md-3">
            <Col>
                <Button texte="Demandez un devis >" className="demande_devis " />
            </Col>
        </Row>
                   
        
</LaboratoireStc6>
  );
}

export default Laboratoire6;