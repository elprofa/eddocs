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
        }} />
        <div className="row my-2">
          <div className="col-lg-3 col-md-3 align-self-center">
              <img src="/img/hygrometrie/7.PNG" width="100%" className="mw-100 rounded-3" />
          </div>
          <div className="col-lg-6 col-md-6">
            <Texte texte="Notre laboratoire est accrédité COFRAC pour l'étalonnage des :" />
            <ul>
                <li>Thermolygromètre</li>
                <li>Hygrometrie à condensation</li>
                <li>Afficheur et enregistreur</li>
                <li>Hygromètre à variation d'impédance</li>
                <li>Thermo Hygrographe</li>
            </ul>
            <Texte texte="Le laboratoire dispose des meilleurs incertitudes à échelle nationale avec
                        une équipe de 4 métrologues pour ce domaine." />
            <Button texte="Demandez un devis"  MyclassName="demande_devis my-md-3" />
          </div>
          <div className="col-lg-3 col-md-3">
            <img src="/img/hygrometrie/9.PNG" className="mw-100 rounded-3"  />
          </div>
        </div>
        <div className="row my-2 my-md-5">
            <PCard  url1="/img/hygrometrie/206.PNG" title=""  />
            <PCard  url1="/img/hygrometrie/2061.PNG" title=""  />            
            <PCard  url1="/img/hygrometrie/208.PNG" title=""  />            
            <PCard  url1="/img/hygrometrie/207.PNG" title=""  />            
            <PCard  url1="/img/hygrometrie/205.PNG" title=""  />            
            <PCard  url1="/img/hygrometrie/286.PNG" title=""  />            
            <PCard  url1="/img/hygrometrie/287.PNG" title=""  />            
              
        </div>
        
</LaboratoireStc4>
  );
}

export default Laboratoire4;