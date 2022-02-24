import React, { useState } from 'react';
import LaboratoireStc4 from './laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import LaboratoireStc1 from '../Laboratoire2/Laboratoire.stc';
import {Row,Col} from 'reactstrap'
import TitreParagrapheLabo from '../TitreParagrapheLabo';
import PCard from "../PresentationCard";
import HeaderLabo from '../HeaderLabo';

const Laboratoire4 = (props) => {
    const Details = [
        { url: "/img/Groupe 206.png", title: "Thermolygromètre" },
        { url: "/img/Groupe 205.png", title: "Hygromètre à condensation" },
        { url: "/img/Groupe 207.png", title: "Afficheur et enregistreur" },
        { url: "/img/Groupe 208.png", title: "Hygromètre à variation d'impédance" },
        { url: "/img/Groupe 209.png", title: "Thermo hygrographe" },
      ];

  return (
    <LaboratoireStc4 >
        <HeaderLabo img="/img/hygrometrie1.png" title={{
            partOne:"Hygrometrie ",
            partTwo:""
        }} logo="/img/logo.png" />
        <div className="row my-2">
          <div className="col-lg-3 col-md-3 align-self-center">
              <img src="/img/hygrometrie/7.png" width="100%" className="mw-100 rounded-3" />
          </div>
          <div className="col-lg-6 col-md-6">
            <Texte 
            texte="Accrédité par le COFRAC, le laboratoire d’hygrométrie est équipé d’équipements de mesure 
            présentant un très haut niveau de qualité et de précision. Nous sommes ainsi en mesure d’étalonner 
            les instruments de mesure suivants selon les exigences de plus haut niveau." />
            <ul>
                <li>Thermolygromètre</li>
                <li>Hygromètre à condensation</li>
                <li>Afficheur et enregistreur d'humidité</li>
                <li>Hygromètre à variation d'impédance</li>
                <li>Thermo Hygrographe</li>
            </ul>
            
          </div>
          <div className="col-lg-3 col-md-3">
            <img src="/img/hygrometrie/9.png" className="mw-100 rounded-3"  />
          </div>
        </div>
        <div className="row my-2 my-md-5">
            <PCard  url1="/img/hygrometrie/206.png" title=""  />
            <PCard  url1="/img/hygrometrie/2061.png" title=""  />            
            <PCard  url1="/img/hygrometrie/208.png" title=""  />            
            <PCard  url1="/img/hygrometrie/207.png" title=""  />            
            <PCard  url1="/img/hygrometrie/205.png" title=""  />            
            <PCard  url1="/img/hygrometrie/286.png" title=""  />            
            <PCard  url1="/img/hygrometrie/287.png" title=""  />            
              
        </div>
        
</LaboratoireStc4>
  );
}

export default Laboratoire4;