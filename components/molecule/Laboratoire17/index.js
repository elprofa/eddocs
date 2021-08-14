import React, { useState } from 'react';
import LaboratoireStc3 from './laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import {Row,Col} from 'reactstrap';
import TitreParagrapheLabo from '../TitreParagrapheLabo';
import PCard from "../PresentationCard";

const Laboratoire17 = (props) => {
    const Details = [
        { url1: "/img/7.png", url2: "/img/8.png" },
      ];

      const Details1 = [
        { url: "/img/Composant 5611.png", title: "Etuves" },
        { url: "/img/Composant 5612.png", title: "Enceintes Climatiques" },
        { url: "/img/Composant 5613.png", title: "Bain thermostatique" },
        { url: "/img/Composant 5614.png", title: "Four" },
      ];

   
  return (
    <LaboratoireStc3 >
        <div className="row py-2 py-md-5">
            <div className="col-md-12">
            <img
                src="/img/Rectangle 109.png"
                width="100%"
                className="my-2 my-md-3"
            />
            </div>
        </div>
        <Row className="row py-2 py-md-3">
            <Col lg={8}>
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Caracterisation Des",partTwo:"Enceintes Climatiques"}
                    }
                    paragraphe={
                        {
                        texte:<>Le laboratoire AIR METROLOGIE assure des Prestationsd'essais telles que cartographie, caractérisation,
                        vérificationou qualification de moyens en températureou hygrométrie selon la norme FD X15-140 ou autres
                        normes ou spécifications clients.</>}
                } />
            </Col>
        </Row>
        
        <Row className="my-2 my-md-3">
            <Col>
                <Button texte="Demandez un devis >" className="demande_devis " />
            </Col>
        </Row>
        
        <Row className="row py-2 py-md-3">
            <Col className="col-sm-6">
                <TitreParagrapheLabo 
                    title={
                        {partOne:"Expertise",partTwo:"Internationale"}
                    }
                    paragraphe={
                        {
                        texte:<>Sous Accréditation COFRAC, le laboratoire vous propose la caractérisation
                        des moyens suivants : 
                        </>}
                } />
            </Col>
            {
                    Details.map((detail,index)=>(<PCard url1={detail.url1} url2={detail.url2} key={index} type={1}  />))
            }
            
        </Row>

        <Row className="py-2 py-md-3">
            {
                Details1.map((detail1,index)=>(<PCard url1={detail1.url} title={detail1.title} key={index+detail1.url}  />))
            }
        </Row>
    </LaboratoireStc3>
  );
}

export default Laboratoire17;