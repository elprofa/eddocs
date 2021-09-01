import React, { useState } from 'react';
import LaboratoireStc3 from './laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import {Row,Col} from 'reactstrap';
import TitreParagrapheLabo from '../TitreParagrapheLabo';
import PCard from "../PresentationCard";
import HeaderLabo from '../HeaderLabo';

const Laboratoire17 = (props) => {
    const Details = [
        { url1: "/img/7.png", url2: "/img/8.png" },
      ];

      const Details1 = [
        { url: "/img/climatique/217.png", title: "" },
        { url: "/img/climatique/208.png", title: "" },
        { url: "/img/climatique/215.png", title: "" },
        { url: "/img/climatique/207.png", title: "" },
      ];

   
  return (
    <LaboratoireStc3 >
        <HeaderLabo img="/img/climatique/F4.png" title={
            {
                partOne:"Caracterisation Des",
                partTwo:"Enceintes Climatiques"
            }
        } />
        
        <div className="row">
            <div className="col-lg-2 align-self-center text-center">
                <img src="/img/8.png" className="mw-100 rounded-3"  />
                <img src="/img/7.png" className="mw-100 rounded-3" />
            </div>
            <div className="col-md-10">
            <Texte texte="Le laboratoire AIR METROLOGIE assure des Prestationsd'essais telles que cartographie, caractérisation,
                        vérificationou qualification de moyens en températureou hygrométrie selon la norme FD X15-140 ou autres
                        normes ou spécifications clients."/>
            
            <Texte texte="Sous accréditation de COFRAC, le laboratoire vous propose la caracterisation des moyens suivants: "/>
            <ul>
                <li>Etuves</li>
                <li>Enceintes climatiques</li>
                <li>Bain thermostatique</li>
                <li>Four...</li>
            </ul>

            <Row className="my-2 my-md-3">
                <Col>
                    <Button texte="Demandez un devis" className="demande_devis " />
                </Col>
            </Row>
        </div>
      </div>
       
        <Row className="py-2 py-md-3">
            {
                Details1.map((detail1,index)=>(<PCard type="4" url1={detail1.url} title={detail1.title} key={index+detail1.url}  />))
            }
        </Row>
        
    </LaboratoireStc3>
  );
}

export default Laboratoire17;