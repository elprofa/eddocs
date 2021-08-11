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
        </div>
        <div className="row laboImg my-3 my-md-3">
            <div className="col-lg-2">
                <img src="/img/g-e6.png" className="d-block m-auto"/>
                <h6 className="text-center fw-bold">Multimètre</h6>
            </div>
            <div className="col-lg-2">
                <img src="/img/g-e3.png" className="d-block m-auto"/>
                <h6 className="text-center fw-bold">Générateur de courant</h6>
            </div>
            <div className="col-lg-2">
                <img src="/img/g-e7.png" className="d-block m-auto"/>
                <h6 className="text-center fw-bold">Générateur de tension</h6>
            </div>
            <div className="col-lg-2">
                <img src="/img/g-e8.png" className="d-block m-auto"/>
                <h6 className="text-center fw-bold">Boite de resistance</h6>
            </div>
            <div className="col-lg-2">
                <img src="/img/g-e5.png" className="d-block m-auto" />
                <h6 className="text-center fw-bold">Mesureur de résistance </h6>
            </div>
            <div className="col-lg-2">
                <img src="/img/rect-e1.png " className="d-block m-auto"/>
                <h6 className="text-center fw-bold">Calibreur multifonctions</h6>
            </div>
            <div className="col-lg-2">
                <img src="/img/rect-e5.png" className="d-block m-auto" />
                <h6 className="text-center fw-bold">Générateur de Tension/Courant</h6>
            </div>
            
        </div>
        <div className="row my-5 my-md-3">
            <div className="col-lg-12">
                <Button texte="Demandez un devis >" className="demande_devis "/>
            </div>
        </div>
        <div className="row ">
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
        
        <div className="row laboImg py-2 py-md-0 mb-0 mb-md-5">
            <div className="col-lg-2">
                <img src="/img/g-e2.png " className="d-block m-auto"/>
                <h6 className="text-center fw-bold">Ponts RLC</h6>
            </div>
            <div className="col-lg-2">
                <img src="/img/rect-e4.png " className="d-block m-auto"/>
                <h6 className="text-center fw-bold">Power meter</h6>
            </div>
            <div className="col-lg-2">
                <img src="/img/rect-e3.png " className="d-block m-auto"/>
                <h6 className="text-center fw-bold">Analyseur de Réseau</h6>
            </div>
            <div className="col-lg-2">
                <img src="/img/rect-e2.png" className="d-block m-auto"/>
                <h6 className="text-center fw-bold">Wattmèttres</h6>
            </div>
            <div className="col-lg-2">
                <img src="/img/g-e4.png" className="d-block m-auto"/>
                <h6 className="text-center fw-bold">Générateur de Fonctions</h6>
            </div>
            <div className="col-lg-2">
                <img src="/img/g-e1.png" className="d-block m-auto"/>
                <h6 className="text-center fw-bold">Testeur ESD</h6>
            </div>
            
        </div>
    </LaboratoireStc1>
  );
}

export default Laboratoire2;