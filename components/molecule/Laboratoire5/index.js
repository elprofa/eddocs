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
        { url: "/img/Groupe 306.png", title: "Dynamomètres" },
        { url: "/img/Groupe 305.png", title: "Chaine de mesure de force" },
        { url: "/img/Groupe 207.png", title: "Anneau dynamométrique" },
        
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

        <HeaderLabo img="/img/force1.png" title={{
            partOne:"FORCE &  ",
            partTwo:"COUPLE"
        }} />
       
        <Row className="py-2 py-md-3">
            <Col lg={6} >
                <TitreParagrapheLabo 
                    title={
                        {"":""}
                    }
                    paragraphe={
                        {
                        texte:<>Pour vous offrir des presentations adaptées à vos besoins, le Laboratoire AIR
                        METROLOGIE s'est doté de moyens de haute performance pour l'étalonnage
                        et vérification de vos instruments de mesure de Fore / Couple.</>}
                } />
            </Col>
        </Row>
        
        <Row className="py-2 py-md-3">
            <Col lg={6} className="align-self-center">
                <TitreParagrapheLabo 
                    title={
                        {}
                    }
                    paragraphe={
                        {
                        texte:<>Le laboratoire est accrédité par le COFRAC pour l'étalonnage et
                        vérification des instruments suivants:</>}
                } />
            </Col>
            <PCard url1="/img/e-d3.png" url2="/img/e-d2.png" type={1}  />
        </Row>
        <RowAccreditationSociete texte="Instruments de mesure de Force:" type="0" />
        <Row className="py-2 py-md-3">
            {
                Details.map((detail,index)=>(<PCard url1={detail.url} title={detail.title} key={index+"force"}  />))
            }
        </Row>
        <RowAccreditationSociete texte="Instruments de mesure de Masse transportable" type="1" />
        <Row className="py-2 py-md-3">
            {
                Details1.map((detail1,index)=>(<PCard url1={detail1.url} title={detail1.title} key={index+"masse"}  />))
            }
        </Row>
        <RowAccreditationSociete texte="Instruments de mesure de Couple" type="1" />
        <Row className="py-2 py-md-3">
            {
                Details2.map((detail2,index)=>(<PCard url1={detail2.url} title={detail2.title} key={index+"couple"}  />))
            }
        </Row>
        <RowAccreditationSociete texte="Outils dynamométriques à commande manuelle" type="1" />
        <Row className="py-2 py-md-3">
            {
                Details3.map((detail3,index)=>(<PCard url1={detail3.url} title={detail3.title} key={index+"commande"}  />))
            }
        </Row>  
        <Row className="my-2 my-md-3">
            <Col>
                <Button texte="Demandez un devis >" className="demande_devis " />
            </Col>
        </Row>      
</LaboratoireStc5>
  );
}

export default Laboratoire5;