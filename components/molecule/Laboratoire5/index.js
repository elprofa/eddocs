import React, { useState } from 'react';
import LaboratoireStc5 from './laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import LaboratoireStc1 from '../Laboratoire2/Laboratoire.stc';

const Laboratoire5 = (props) => {
  
  return (
    <LaboratoireStc5 >
        <div className="container"> 
            <div className="row py-2 py-md-5">
                <div className="col-lg-12 pb-2">
                    <img src="/img/Rectangle -26.png" width="100%" className="my-2 my-md-3" />
                </div>
            </div>

            <div className="row pb-3 mb-5">
                <div className="col-lg-6">
                    <Title partOne="Force &" PartTwo="Couple" number={1}  
                    MyclassName="py-2 py-md-3 title" />
                
                    <Texte texte="Pour vous offrir des presentations adaptées à vos besoins, le Laboratoire AIR
                                    METROLOGIE s'est doté de moyens de haute performance pour l'étalonnage
                                    et vérification de vos instruments de mesure de Fore / Couple."  
                                    MyclassName="paragraphe" />
                </div>

             </div>
                <div className="row ranger2 rectangle pb-3 pl-2 d-inline-flex">
                    <div className="col-lg-7 mr-5 mb-3">
                        <div className="mb-4">
                            <Button texte="Demander un devis >" className="my-2 my-md-3"/>
                        </div>
                        
                        <Texte texte="Le laboratoire est accrédité par le COFRAC pour l'étalonnage et
                                        vérification des instruments suivants:"  
                                    MyclassName="paragraphe" />
                    </div>
                    <div className="col">
                        <img src="/img/8.png" />
                    </div>
                </div>

                <div className="container-fluid">
                    
                    <div className="row">
                        <div className="col">
                            <h4>Instruments de mesure de Force</h4>
                        </div>
                    </div>
                    <div className="row w-75 pb-5">
                        <div className="col-lg-3 text-lg-center">     
                            <img src="/img/Groupe 306.png" />
                            <h4>Dynamomètres</h4>
                        </div>

                    <div className="col-lg-3 text-lg-center">
                        <img src="/img/Groupe 305.png" />
                        <h4>Chaine de mesure de force</h4>
                    </div>

                    <div className="col-lg-3 text-lg-center">
                        <img src="/img/Groupe 207.png" />
                        <h4>Anneau dynamométrique</h4>                      
                    </div>
                </div>

                <div className="row w-50 pt-5">
                        <div className="col">
                            <h4>Instruments de mesure de Masse transportable</h4>
                        </div>
                    </div>

                <div className="row w-75 pb-5">
                        <div className="col-lg-3 text-lg-center">     
                            <img src="/img/Groupe 308.png" />
                            <h4>Person</h4>
                        </div>

                    <div className="col-lg-3 text-lg-center">
                        <img src="/img/Groupe 309.png" />
                        <h4>Chaine de mesure</h4>
                    </div>
                </div>

                <div className="row">
                        <div className="col">
                            <h4>Instruments de mesure de Couple</h4>
                        </div>
                    </div>
                    <div className="row w-75 pb-5">
                        <div className="col-lg-3 text-lg-center">     
                            <img src="/img/Groupe 313.png" />
                            <h4>Couple mètre</h4>
                        </div>

                    <div className="col-lg-3 text-lg-center">
                        <img src="/img/Groupe 314.png" />
                        <h4>Chaine de mesure de couple</h4>
                    </div>

                    <div className="col-lg-3 text-lg-center">
                        <img src="/img/Groupe 317.png" />
                        <h4>Torsiomètre</h4>                      
                    </div>
                </div>

                <div className="row">
                        <div className="col">
                            <h4>Outils dynamométriques à commande manuelle</h4>
                        </div>
                </div>
                <div className="row w-75 pb-5">
                        <div className="col-lg-3 text-lg-center">     
                            <img src="/img/Groupe 315.png" />
                            <h4>Clé dynamométriques</h4>
                        </div>

                    <div className="col-lg-3 text-lg-center">
                        <img src="/img/Groupe 316.png" />
                        <h4>Tournevis dynamométriques</h4>
                    </div>
                </div>
            </div>
      
        </div>
        
</LaboratoireStc5>
  );
}

export default Laboratoire5;