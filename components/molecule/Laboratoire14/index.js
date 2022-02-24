import React, { useState } from 'react';
import LaboratoireStc6 from './laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import LaboratoireStc14 from './laboratoire.stc';
import TitreParagrapheLabo from '../TitreParagrapheLabo';
import {Row,Col} from 'reactstrap'
import PCard from "../PresentationCard";
import HeaderLabo from '../HeaderLabo';

const Laboratoire14 = (props) => {
  
  return (
    <LaboratoireStc14 >

        <HeaderLabo img="/img/air/F4.png" logo="/img/logol2mi.png" title={{
            partOne:"Qualification Des ",
            partTwo:"Environnements Propres"
        }} />

        <div className="row my-2 my-md-5">
            <div className="col-lg-2 col-md-2 align-self-center text-center">
                <img src="/img/news/log6.png" className="mw-100 rounded-3"  />
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
                    <div className="col-lg-4 col-md-6">
                        <div>
                            <h5>
                                SALLES PROPRES & ENVIRONNEMENTS MAITRISÉS ET APPARENTÉS :
                            </h5>
                            <ul > 
                                <li className="">Comptage de particule</li>
                                <li className="">Temps de Récupération / D’épuration</li>
                                <li className="">Mesure de vitesse d'air</li>
                                <li className="">Mesure de pression differentielle</li>
                                <li className="">Test d'intégrité des filtres</li>
                                <li className="">Mesure de température </li>
                                <li className="">Mésure d'humidité relative</li>
                                <li className="">Mésure de debit d'air</li>
                                <li className="">Fuite de confinement (Hors accréditation)</li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div>
                            <h5>
                                ETABLISSEMENT DE SANTÉ – ZONES ENVIRENEMENT MAITRISÉS : 
                            </h5>
                            <ul > 
                                <li className="">Comptage de particule</li>
                                <li className="">Cinétique de décontamination</li>
                                <li className="">Mesure de vitesse d'air</li>
                                <li className="">Mesure de pression differentielle</li>
                                <li className="">Test d'intégrité des filtres</li>
                                <li className="">Mesure de température </li>
                                <li className="">Mésure d'humidité relative</li>
                                <li className="">Mésure de debit d'air</li>
                                <li className="">Fuite de confinement (Hors accréditation) </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div>
                            <h5>
                                POSTE DE SECURITÉ MICROBIOLOGIQUE PSM type 2 :
                            </h5>
                            <ul >
                                <li className="">Comptage de particule</li>
                                <li className="">Vitesse descendante</li>
                                <li className="">Mesure de pression differentielle</li>
                                <li className="">Test d'intégrité des filtres</li>
                                <li className="">Mesure de température </li>
                                <li className="">Mésure d'humidité relative</li>
                                <li className="">Mésure de debit volumique</li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
            
        <div className="row my-2 my-md-5">
            <PCard type="4" url1="/img/environnement/301.png" title=""  />
            <PCard type="4" url1="/img/environnement/302.png" title=""  />
            <PCard type="4" url1="/img/environnement/303.png" title=""  />
        </div>
</LaboratoireStc14>
  );
}

export default Laboratoire14;