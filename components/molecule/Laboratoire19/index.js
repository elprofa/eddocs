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

const Laboratoire19 = (props) => {
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
        }} logo="/img/logol2mi.png" />
        <div className="row my-2">
          <div className="col-lg-3 col-md-3 align-self-center">
              <img src="/img/hygrometrie/log.png" width="100%" className="mw-100 rounded-3" />
          </div>
          <div className="col-lg-6 col-md-6">
            <Texte 
            texte="Disposant d’une enceinte CTS de haute performance, le Laboratoire L2MI vous 
            propose des prestations Accréditées par le SEMAC pour l’étalonnage des instruments suivants :
            " />
            <ul>
                <li>Thermolygromètre</li>
                <li>Hygromètre à condensation</li>
                <li>Afficheur et enregistreur d'humidité</li>
                <li>Hygromètre à variation d'impédance</li>
                <li>Thermo Hygrographe</li>
            </ul>
            
          </div>
          <div className="col-lg-3 col-md-3">
            <img src="/img/hygrometrie/1.jpg" className="mw-100 rounded-3"  />
          </div>
        </div>
        <div className="row my-2 my-md-5">
            <PCard  url1="/img/hygrometrie/2061.png" title=""  />            
            <PCard  url1="/img/hygrometrie/207.png" title=""  />            
            <PCard  url1="/img/hygrometrie/205.png" title=""  />            
            <PCard  url1="/img/hygrometrie/286.png" title=""  />            
            <PCard  url1="/img/hygrometrie/287.png" title=""  />            
              
        </div>
        
</LaboratoireStc4>
  );
}

export default Laboratoire19;