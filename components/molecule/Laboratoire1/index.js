import React, { useState } from 'react';
import LaboratoireStc3 from './Laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import {Row,Col} from 'reactstrap';
import TitreParagrapheLabo from '../TitreParagrapheLabo';
import PCard from "../PresentationCard";

const Laboratoire1 = (props) => {
    const Details = [
        { url1: "/img/7.png", url2: "/img/8.png" },
        { url1: "/img/tunac.png",url2: "/img/8.png",},
        { url1: "/img/ilac-ment-1.png", url2: "/img/8.png"},
        { url1: "/img/semac1.png ",url2: "/img/8.png"},
      ];

      const Details1 = [
        { url: "/img/Groupe 210.png", title: "Présentation Mécanique" },
        { url: "/img/rect-e4.png", title: "Presentation Interferometrique" },
        { url: "/img/Rectangle 119.png", title: "Presentation Angulaire" },
        { url: "/img/Rectangle 120.png", title: "Presentation 2D" },
        { url: "/img/Groupe 211.png", title: "Presentation 3D" },
      ];

   
  return (
    <LaboratoireStc3 >
        <div className="row py-2 py-md-5">
            <div className="col-md-12">
            <img
                src="/img/Rectangle -39.png"
                width="100%"
                className="my-2 my-md-3"
            />
            </div>
        </div>
        <Row className="row py-2 py-md-3">
            <Col lg={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Dimensionnel",partTwo:""}
                    }
                    paragraphe={
                        {
                        texte:<>Pour vos besoins en métrologie dimensionnelle, AIR METROLOGIE dispose
                        d'un laboratoire de haute performance qui assure l'étalonnage de vos
                        instruments de mesure en dimensionnel sous accréditation:</>}
                } />
            </Col>
        </Row>
        <Row className="py-2 py-md-3">
            {
                Details.map((detail,index)=>(<PCard url1={detail.url1} url2={detail.url2} key={index} type={1}  />))
            }
        </Row>
        <Row className="py-2 py-md-3">
            <Col lg={6}>
                <TitreParagrapheLabo 
                    title={{}}
                    paragraphe={
                        {
                            texte:<>
                                ou sous étalonnage raccordé au système international d'unité SI, ceci au
                                moyen d'étalons et machines de mesures de références étalonnés par des
                                laboratoires accrédités par le COFRAC.
                            </>,
                        }
                    } />
            </Col>
        </Row>
        <Row className="py-2 py-md-3">
            <Col lg={6}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Nos ",partTwo:"Prestations"}
                    }
                    paragraphe={{ } } />
            </Col>
        </Row>

        <Row className="py-2 py-md-3">
            {
                Details1.map((detail1,index)=>(<PCard url1={detail1.url} title={detail1.title} key={index+detail1.url}  />))
            }
        </Row>
        <Row className="my-2 my-md-3">
            <Col>
                <Button texte="Demandez un devis >" className="demande_devis " />
            </Col>
        </Row>
        
    </LaboratoireStc3>
  );
}

export default Laboratoire1;