import React, { useState } from 'react';
import LaboratoireStc5 from './laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import LaboratoireStc1 from '../Laboratoire2/Laboratoire.stc';
import { Row,Col } from 'reactstrap';
import TitreParagrapheLabo from '../TitreParagrapheLabo';
import PCard from "../PresentationCard";
import RowAccreditationSociete from '../RowAccreditationSociete';
import HeaderLabo from '../HeaderLabo';

const Laboratoire20 = (props) => {
    const Details = [
        { url: "/img/force_couple/Image2.png", title: "" },
        { url: "/img/force_couple/Image3.png", title: "" },
        { url: "/img/force_couple/Image4.png", title: "" },
        { url: "/img/force_couple/Image5.png", title: "" },
        { url: "/img/force_couple/Image6.png", title: "" },
       
      ];

  return (
    <LaboratoireStc5 >

        <HeaderLabo img="/img/force1.png" logo="/img/logol2mi.png" title={{
            partOne:"FORCE &  ",
            partTwo:"COUPLE"
        }} />
       
        
        <Row className="py-2 py-md-3">
            <Col lg={3} className="align-self-center">
                <img src="/img/force_couple/log2.PNG" className="mw-100 rounded-3" />
            </Col>
            <Col lg={6} className="align-self-center">
                <TitreParagrapheLabo 
                    title={
                        {"":""}
                    }
                    paragraphe={
                        {
                        texte:<>Conformément aux normes en vigueur, nous garantissons des prestations d’étalonnage indépendantes,
                         efficaces et précises de vos Machines d’essais de force que ça soit en Traction ou en Compression. 
                         Les accréditations SEMAC et TUNAC du Laboratoire L2MI vous permettent de réaliser l’étalonnage des Machines suivantes :  
                        </>}
                } />
               

                <ul>
                    <li>
                        Système de mesure de force en Traction (SEMAC & TUNAC)
                    </li>
                    <li>
                        Système de mesure de force en Compression (SEMAC & TUNAC)
                    </li>
                    <li>
                        Pull testers (TUNAC)
                    </li>
                    <li>
                        Presses à béton (SEMAC)
                    </li>
                </ul>
                <TitreParagrapheLabo 
                    title={
                        {"":""}
                    }
                    paragraphe={
                        {
                        texte:<>Afin de vous garantir une solution globale, le laboratoire L2MI vous propose désormais 
                        son accréditation TUNAC pour l’étalonnage sur site des outils rotatifs pour éléments de fixation 
                        filetés en sens horaire :
                        </>}
                } />
                <ul>
                    <li>
                        Visseuses 
                    </li>
                    <li>
                        Tournevis…
                    </li>
                </ul>
            </Col>
            <Col lg={3} className="align-self-center">
                <img src="/img/force_couple/Image1.png" className="mw-100 rounded-3" />
            </Col>
           
        </Row>
        <Row className="py-2 py-md-3">
            {
                Details.map((detail,index)=>(<PCard url1={detail.url} title={detail.title} key={index+"force"}  />))
            }
        </Row>
</LaboratoireStc5>
  );
}

export default Laboratoire20;