import React, { useState } from 'react';
import LaboratoireStc1 from './Laboratoire.stc'
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Trait from '../../shared/Trait';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';

const Laboratoire2 = (props) => {
  
  return (
    <LaboratoireStc1 >
        <div className="row py-2 py-md-5">
            <div className="col-lg-12"></div> 
            <div className="col-md-12">
            <img src="/img/rectangle-e.png" width="100%" className="my-2 my-md-3" />
                <div className="col-lg-6">
                    <Title partOne="Laboratoire" PartTwo="Electricité & magnetisme" number={1}  MyclassName="py-2 py-md-3 title" />
                
                    <Texte texte="Doté des étalons les plus performants et accrédité par le COFRAC,  
                    AIR METROLOGIE dispose d'un laboratoire en Électricité et Magnétisme  
                    couvrant l'étalonnage en laboratoire de plusieurs instruments de mesure à savoir"  MyclassName="paragraphe" />
                
                </div>
            </div>
            <div className="col-lg-12">
                <div className="rectangle">
                    <div>
                        <img src="/img/g-e6.png" />
                        <span>Multimètre</span>
                    </div>
                    <div>
                        <img src="/img/g-e3.png" />
                        <span>Générateur de courant</span>
                    </div>
                    <div>
                        <img src="/img/g-e7.png" />
                        <span>Générateur de tension</span>
                    </div>
                    <div>
                        <img src="/img/g-e8.png" />
                        <span>Boite de resistance</span>
                    </div>
                    <div>
                        <img src="/img/g-e5.png" />
                        <span>Mesureur de résistance </span>
                    </div>
                    <div>
                        <img src="/img/rect-e1.png" />
                        <span>Calibreur multifonctions</span>
                    </div>
                    <div>
                        <img src="/img/rect-e5.png" />
                        <span>Générateur de Tension/Courant</span>
                    </div>
                </div>
                <Button texte="Demandez un devis >" className="demande_devis my-2 mt-md-3"/>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-8">
                <Title partOne="Expertise " PartTwo="internationale" number={1}  MyclassName="py-2 py-md-3 title" />
                <Texte texte="Notre laboratoire est Raccordé à la chaine internationale à
                travers un laboratoire accredité par le COFRAC pour l'etalonnage des instruments suivants: "  MyclassName="paragraphe" />
                
            </div>
            <div className="col-lg-4 iconRight">
                <img src="/img/e-d2.png" width="80" />
                <img src="/img/e-d3.png" width="80" />
            </div>
        </div>
        
        <div className="row py-2 py-md-0">
           
            <div className="col-lg-12">
            <div className="rectangle">
                    <div>
                        <img src="/img/g-e2.png" />
                        <span>Ponts RLC</span>
                    </div>
                    <div>
                        <img src="/img/rect-e4.png" />
                        <span>Power meter</span>
                    </div>
                    <div>
                        <img src="/img/rect-e3.png" />
                        <span>Analyseur de Réseau</span>
                    </div>
                    <div>
                        <img src="/img/rect-e2.png" />
                        <span>Wattmèttres</span>
                    </div>
                    <div>
                        <img src="/img/g-e4.png" />
                        <span>Générateur de Fonctions </span>
                    </div>
                    <div>
                        <img src="/img/g-e1.png" />
                        <span>Testeur ESD</span>
                    </div>
                </div>
            </div> 
            
        </div>
    </LaboratoireStc1>
  );
}

export default Laboratoire2;