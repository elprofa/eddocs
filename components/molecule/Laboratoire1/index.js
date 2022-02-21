import React, { useState } from 'react';
import LaboratoireStc3 from './Laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import {Row,Col} from 'reactstrap';
import TitreParagrapheLabo from '../TitreParagrapheLabo';
import PCard from "../PresentationCard";
import CardPrestation from '../CardPrestation';
import HeaderLabo from '../HeaderLabo';

const Laboratoire1 = (props) => {
    const Details = [
        { url1: "/img/7.png", url2: "/img/8.png" },
        { url1: "/img/tunac.png",url2: "/img/8.png",},
        { url1: "/img/ilac-ment-1.png", url2: "/img/8.png"},
        { url1: "/img/semac1.png ",url2: "/img/8.png"},
      ];

      const Details1 = [
        { url: "/img/Groupe 210.png", title: "" },
        { url: "/img/dimensionel/147.png", title: "" },
        { url: "/img/Rectangle 119.png", title: "" },
        { url: "/img/dimensionel/120.png", title: "" },
        { url: "/img/Groupe 211.png", title: "" },
      ];

   
  return (
    <LaboratoireStc3 >
        <HeaderLabo img="/img/dimensionel.png" title={{
            partOne:"Dimensionel ",
            partTwo:""
        }} />
        <Row>
        <Col lg={4} md={4} className="">
                <CardPrestation texte="Prestation Mécanique" url="/dimensionel/prestation-mecanique" />
                <CardPrestation texte="Prestation Interférométrique"  url="/dimensionel/prestation-interferometrique" />
                <CardPrestation texte="Prestation Angulaire"  url="/dimensionel/prestation-angulaire" />
                <CardPrestation texte="Prestation 2D"  url="/dimensionel/prestation-2d"/>
                <CardPrestation texte="Prestation 3D"  url="/dimensionel/prestation-3d" />
            </Col>
           
            <Col lg={4} md={5} className="">
                <TitreParagrapheLabo 
                        title={
                            {partOne:"",partTwo:""}
                        }
                        paragraphe={
                            {
                            texte:<>Pour vos besoins en métrologie dimensionnelle, AIR METROLOGIE dispose
                            d'un laboratoire de haute performance qui assure l'étalonnage de vos
                            instruments de mesure en dimensionnel sous accréditation:</>}
                    } anim="animation1" className="" />

                        <Texte texte="> COFRAC (2-1920)" className="fs-18" style={{fontWeight:"bold",color:"#5a5d63"}} />
                        <Texte texte="> TUNAC-ILAC (2-0124)" className="fs-18" style={{fontWeight:"bold",color:"#5a5d63"}} />
                        <Texte texte="> SEMAC (MCI/CA AL 29/2008)" className="fs-18" style={{fontWeight:"bold",color:"#5a5d63"}} />
                        <TitreParagrapheLabo 
                        title={
                            {partOne:"",partTwo:""}
                        }
                        paragraphe={
                            {
                            texte:<> ou sous étalonnage raccordé au système international d'unité SI, ceci au
                            moyen d'étalons et machines de mesures de références étalonnés par des
                            laboratoires accrédités reconnus à l’international.</>}
                    } anim="animation1" className="" />

                <Row className="my-2 my-md-3">
                    <Col>
                        <Button texte="Demandez un devis" className="demande_devis " />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} md={3} className="align-self-center">
                <div className="text-center my-2 ">
                    <img src="/img/news/log1.PNG" className="mw-100 rounded-3" style={{width:"80%"}} />
                </div>
                <div className="text-center my-2 my-md-4">
                    <img src="/img/news/log2.PNG" className="mw-100 rounded-3" style={{width:"80%"}} />
                </div>
                <div className="text-center my-2 my-md-4">
                    <img src="/img/news/log3.PNG" className="mw-100 rounded-3" style={{width:"80%"}} />
                </div>
            </Col>
        </Row>
        
        <Row className="py-2 py-md-5">
            
            {
                Details1.map((detail1,index)=>(<PCard url1={detail1.url} title={detail1.title} key={index+detail1.url}  />))
            }
        </Row>
        
    </LaboratoireStc3>
  );
}

export default Laboratoire1;