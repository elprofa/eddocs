import React, { useState } from 'react';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import LaboratoireStc1 from '../Laboratoire2/Laboratoire.stc';
import TitreParagrapheLabo from '../TitreParagrapheLabo';
import {Row,Col} from 'reactstrap'
import PCard from "../PresentationCard";
import HeaderLabo from '../HeaderLabo';

const Laboratoire16 = (props) => {
  
  return (
    <LaboratoireStc1 >
        <HeaderLabo img="/img/air/F4.png" title={{
            partOne:"Qualification De ",
            partTwo:"l'air comprime"
        }} logo="/img/logol2mi.png" />
        <div className="row my-2 my-md-5">
           
            <div className="col-lg-12 col-md-10">
                <Texte texte="Le laboratoire L2MI possède l'expertise et le materiel nécessaire pour la 
                qualification votre réseau d'air comprimé, votre réseau d'air medecinal, votre réseau d'air 
                respirable et les gaz à usage pharmaceutique suivant les tests suivants:"/>

                <div className="row my-2 my-md-3">
                    <div className="col-lg-8 col-md-8">
                        <ul>
                            <li>Comptage de particule</li>
                            <li>Temperature de rosée</li>
                            <li>Le debit</li>
                            <li>La pression</li>
                            <li>Teneur en huile</li>
                            <li>Teneur d'humidité</li>
                            <li>Contrôle CO,CO2,NO,...</li>

                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 align-self-center">
                        <img src="/img/air/F3.png" />
                    </div>
                </div>
            </div>
        </div>
       <div className="col-lg-12 my-2 my-md-5">
           <img src="/img/air/239.png" width="100%"/>
       </div>
                   
        
</LaboratoireStc1>
  );
}

export default Laboratoire16;