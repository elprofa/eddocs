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

const Laboratoire5 = (props) => {
    const Details = [
        { url: "/img/force_couple/1.png", title: "Dynamomètres" },
        { url: "/img/force_couple/2.png", title: "Dynamomètres" },
        { url: "/img/force_couple/3.png", title: "Dynamomètres" },
        { url: "/img/force_couple/4.png", title: "Dynamomètres" },
        { url: "/img/force_couple/5.png", title: "Dynamomètres" },
        { url: "/img/force_couple/6.png", title: "Dynamomètres" },
        { url: "/img/force_couple/7.png", title: "Dynamomètres" },
       
      ];

      const Details1 = [
        { url: "/img/Groupe 308.png", title: "Person" },
        { url: "/img/Groupe 309.png", title: "Chaine de mesure" },        
      ];

      const Details2 = [
        { url: "/img/Groupe 313.png", title: "Couple mètre" },
        { url: "/img/Groupe 314.png", title: "Chaine de mesure de couple" },        
        { url: "/img/Groupe 317.png", title: "Torsiomètre" },        
      ];
      const Details3 = [
        { url: "/img/Groupe 315.png", title: "Clé dynamométriques" },
        { url: "/img/Groupe 316.png", title: "Tournevis dynamométriques" },        
      ];
  return (
    <LaboratoireStc5 >

        <HeaderLabo img="/img/force1.png" logo="/img/logo.png" title={{
            partOne:"FORCE &  ",
            partTwo:"COUPLE"
        }} />
       
        
        <Row className="py-2 py-md-3">
            <Col lg={3} className="align-self-center">
                <img src="/img/force_couple/log.PNG" className="mw-100 rounded-3" />
            </Col>
            <Col lg={6} className="align-self-center">
                <TitreParagrapheLabo 
                    title={
                        {"":""}
                    }
                    paragraphe={
                        {
                        texte:<>Pour vous offrir des presentations adaptées à vos besoins, le Laboratoire AIR
                        METROLOGIE s'est doté de moyens de haute performance pour l'étalonnage
                        et vérification de vos instruments de mesure de Force / Couple.</>}
                } />

                <TitreParagrapheLabo 
                    title={
                        {}
                    }
                    paragraphe={
                        {
                        texte:<b>Le laboratoire est accrédité par le COFRAC pour l'étalonnage et
                        vérification des instruments suivants:</b>}
                } />

                <ul>
                    <li>
                        Instruments de mesure de Force (Dynamomètres, Chaine de mesure de force, Anneau dynamométrique…)
                    </li>
                    <li>
                        Instruments de mesure de Masse transportable (Peson, Chaine de mesure de Masse…)
                    </li>
                    <li>
                        Instruments de mesure de Couple (Couple mètre, Chaine de mesure de couple, Torsiomètre…)
                    </li>
                    <li>
                        Outils dynamométriques à commande manuelle (Clé dynamométriques à lecture directe ou à déclenchement, Tournevis dynamométriques…)
                    </li>
                </ul>
            </Col>
            <Col lg={3} className="align-self-center">
                <img src="/img/force_couple/log1.PNG" className="mw-100 rounded-3" />
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

export default Laboratoire5;