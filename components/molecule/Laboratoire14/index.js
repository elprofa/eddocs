import React, { useState } from 'react';
import LaboratoireStc6 from './laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import LaboratoireStc1 from '../Laboratoire2/Laboratoire.stc';
import TitreParagrapheLabo from '../TitreParagrapheLabo';
import {Row,Col} from 'reactstrap'
import PCard from "../PresentationCard";
import HeaderLabo from '../HeaderLabo';

const Laboratoire14 = (props) => {
  
  return (
    <LaboratoireStc1 >

        <HeaderLabo img="/img/air/F4.png" title={{
            partOne:"Qualification Des ",
            partTwo:"Environnements Propres"
        }} />

        <div className="row my-2 my-md-5">
            <div className="col-lg-2 col-md-2 align-self-center text-center">
                <img src="/img/environnement/8.png" className="mw-100 rounded-3"  />
                <img src="/img/environnement/7.png" width="80px" className="mw-100 rounded-3" />
            </div>
            <div className="col-lg-10 col-md-10">
                <Texte texte="Les salles blanche et les environnements maîtrisés apparents constituent un moyen efficace pour maîtriser
                        la contamination particulaire de l'air. L'exploitation d'une salle propre nécessite la mise en place d'une
                        qualification initiale ainsi que d'un programme d'essai et de surveillance périodique pcermettant de justifier
                        des performances de l'installation.
                        La classification particulaire et/ou microbkologique ainsi que les exigences de surveillance sont définis par la
                        réglémentation en vigueur : ISO 14644, NFS 90-351, BPFs ou GMPs..." />
                <Texte texte="Accrédité par le COFRAC, le laboratoire L2MI vous propose les solutions adaptées pour le contrôle et 
                        la qualification de vos salles propres dans le respect des normes et des réglementations en vigueur
                        suivant les tests suivants :" />

                <div className="row my-2 my-md-4">
                    <div className="col-lg-6 col-md-8">
                        <ul> 
                            <li className="fw-bold">Comptage de particule</li>
                            <li className="fw-bold">Mesure de vitesse d'air</li>
                            <li className="fw-bold">Mesure de pression differentielle</li>
                            <li className="fw-bold">Test d'intégrité des filtres</li>
                            <li className="fw-bold">Mesure de température </li>
                            <li className="fw-bold">Mésure d'humidité relative</li>
                            <li className="fw-bold">Mésure de debit d'air</li>
                            <li className="fw-bold">Essai de fuite de confinement </li>
                        </ul>
                        <Button texte="Demandez un devis >" className="demande_devis " />
                    </div>
                    <div className="col-md-6">
                        <img src="/img/environnement/110.png" width="100%"/>
                    </div>
                </div>
            </div>
        </div>
            
        <div className="row my-2 my-md-5">
            <PCard type="4" url1="/img/environnement/301.png" title=""  />
            <PCard type="4" url1="/img/environnement/302.png" title=""  />
            <PCard type="4" url1="/img/environnement/303.png" title=""  />
        </div>
</LaboratoireStc1>
  );
}

export default Laboratoire14;