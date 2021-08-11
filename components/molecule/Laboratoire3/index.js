import React, { useState } from 'react';
import LaboratoireStc3 from './laboTrois.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import LaboratoireStc1 from '../Laboratoire2/Laboratoire.stc';

const Laboratoire3 = (props) => {
  
  return (
    <LaboratoireStc3 >
        <div className="row py-2 py-md-5">
            <div className="col-lg-12"></div> 
            <div className="col-md-12">
            <img src="/img/Rectangle -39.png" width="100%" className="my-2 my-md-3" />
                <div className="col-lg-6">
                    <Title partOne="Dimensionnel" number={1}  MyclassName="py-2 py-md-3 title" />
                
                    <Texte texte="Pour vos besoins en métrologie dimensionnelle, AIR METROLOGIE dispose
                                    d'un laboratoire de haute performance qui assure l'étalonnage de vos
                                    instruments de mesure en dimensionnel sous accréditation:"  
                                    MyclassName="paragraphe" />
                </div>

                </div>
            <div className="container">
                <div className="row lab3 mb-3 rectangle pb-3 pl-2">
                    <div className="col-lg-3">
                        <img src="/img/7.png" />
                        <img src="/img/8.png" />
                    </div>

                    <div className="col-lg-3 d-block">
                        <img src="/img/Groupe -9.png" />
                        <img src="/img/8.png" />
                    </div>

                    <div className="col-lg-3">
                        <img src="/img/ilac-ment-1.png" />
                        <img src="/img/8.png" />                        
                    </div>

                    <div className="col-lg-3">
                        <img src="/img/Groupe -8.png" />
                        <img src="/img/8.png" />
                    </div>
                </div>

                <div className="col-lg-6">                
                <Texte texte="ou sous étalonnage raccordé au système international d'unité SI, ceci au
                                    moyen d'étalons et machines de mesures de références étalonnés par des
                                    laboratoires accrédités par le COFRAC."  
                                    MyclassName="paragraphe" />
                </div>

                <Button texte="Demander un devis >" className="my-2 my-md-3"/>
                </div>
            </div>

        <div className="row">
            <div className="col-lg-4">
                <Title partOne="Nos" PartTwo="Presentations" number={1}  MyclassName="py-2 py-md-3 title" />
            </div>
        </div>
        
        <div className="container py-2 px-lg-0 mx-auto">
           
            <div className="row">
                    <div className="col text-center">
                        <img src="/img/Groupe 210.png" />
                        <h3>Présentation Mécanique</h3>
                    </div>

                    <div className="col text-center">
                        <img src="/img/rect-e4.png" />
                        <h3>Presentation Interferometrique</h3>
                    </div>

                    <div className="col text-center">
                        <img src="/img/Rectangle 119.png" />
                        <h3>Presentation Angulaire</h3>
                    </div>

                    <div className="col text-center">
                        <img src="/img/Rectangle 120.png" />
                        <h3>Presentation 2D</h3>
                    </div>

                    <div className="col text-center">
                        <img src="/img/Groupe 211.png" />
                        <h3>Presentation 3D</h3>
                    </div> 
    </div>
    </div>
</LaboratoireStc3>
  );
}

export default Laboratoire3;