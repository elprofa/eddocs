import React, { useState } from 'react';
import LaboratoireStc3 from './Laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';

const Laboratoire3 = (props) => {
  
  return (
    <LaboratoireStc3 >
        <div className="row py-2 py-md-5">
            <div className="col-lg-12"></div> 
            <div className="col-md-12">
            <img src="/img/Rectangle69.png" width="100%" className="my-2 my-md-3" />
                <div className="col-lg-6">
                    <Title partOne="Dimensionnel" number={1}  MyclassName="py-2 py-md-3 title" />
                
                    <Texte texte="Pour vos besoins en métrologie dimensionnelle, AIR METROLOGIE dispose
                                    d'un laboratoire de haute performance qui assure l'étalonnage de vos
                                    instruments de mesure en dimensionnel sous accréditation:"  
                                    MyclassName="paragraphe" />
                </div>

                </div>
            <div className="col-lg-12">
                <div className="rectangle1">
                    <div>
                        <img src="/img/7.png" />
                    </div>
                    <div>
                        <img src="/img/8.png" />
                    </div>
                    <div>
                        <img src="/img/Groupe -9.png" />
                    </div>
                    <div>
                        <img src="/img/8.png" />
                    </div>
                    <div>
                        <img src="/img/ilac-ment-1.png" />
                    </div>
                    <div>
                        <img src="/img/8.png" />
                    </div>
                    <div>
                        <img src="/img/Groupe -8.png" />
                    </div>
                    <div>
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
        
        <div className="row py-2 py-md-0">
           
            <div className="col-lg-12">
            <div className="rectangle">
                    <div>
                        <img src="/img/Groupe 210.png" />
                        <span>Présentation Mécanique</span>
                    </div>
                    <div>
                        <img src="/img/rect-e4.png" />
                        <span>Presentation Interferometrique</span>
                    </div>
                    <div>
                        <img src="/img/Rectangle 119.png" />
                        <span>Presentation Angulaire</span>
                    </div>
                    <div>
                        <img src="/img/Rectangle 120.png" />
                        <span>Presentation 2D</span>
                    </div>
                    <div>
                        <img src="/img/Groupe 211.png" />
                        <span>Presentation 3D</span>
                    </div>
                </div>
            </div> 
        </div>
    </LaboratoireStc3>
  );
}

export default Laboratoire3;