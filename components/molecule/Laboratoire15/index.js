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

const Laboratoire15 = (props) => {
  
  return (
    <LaboratoireStc1 >
        <HeaderLabo img="/img/autoclave/F4.png" logo="/img/logol2mi.png" title={
            {
                partOne:"Qualification Des ",
                partTwo:"Autoclaves"
            }
        } />
        
       <div className="row my-2 my-md-5">
            <div className="col-lg-3 col-md-3 align-self-center text-center">
                <img src="/img/autoclave/log.PNG" className="mw-100 rounded-3"  />
            </div>
            <div className="col-lg-9 col-md-9">
                <Texte texte="
                    Les autoclaves, bien que règlés en usine avant livraison, doivent obligatoirement subir une qualification 
                    opérationnelle sur site avant utilisation.
                " />
                <Texte texte="
                    La qualification a comme objectif de s'assurer que l'équipement est conforme aux spécifications requises pour son utilisation. 
                    Elle établit la preuve que l'appareil répond, en condition d'exploitation, à toutes les exigences normatives. 
                " />
                <Texte texte="
                   Notre laboratoire L2MI est accrédité par le SEMAC et met à votre disposition une équipe qualifiée
                   pour vérifier l'aptitude des cycles de stérilisation dans les autoclaves afin de garantir le niveau
                   d'assurance de la stérilité requis par :" />
                   <div className="row">
                       <div className="col-lg-8 align-self-center">
                            <ul>
                                <li>Distribution de chaleur;</li>
                                <li>Pénetration de chaleur;</li>
                                <li>Calcul de la valeur stérilisatrice F0</li>
                            </ul>
                       </div>
                       <div className="col-lg-3">
                           <img src="/img/autoclave/F3.png" width="100%" />
                       </div>
                   </div>
                   
            </div>
       </div>
        <div className="row my-2 my-md-5">
            <PCard type="5" url1="/img/autoclave/217.png" title=""  />
            <PCard type="5" url1="/img/autoclave/123.png" title=""  />
        </div>
        
</LaboratoireStc1>
  );
}

export default Laboratoire15;