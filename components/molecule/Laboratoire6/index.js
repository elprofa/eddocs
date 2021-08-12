import React, { useState } from 'react';
import LaboratoireStc6 from './laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import LaboratoireStc1 from '../Laboratoire2/Laboratoire.stc';

const Laboratoire6 = (props) => {
  
  return (
    <LaboratoireStc6 >
        <div className="container-fluid"> 
            <div className="row py-2 py-md-5">
                <div className="col-lg-12 pb-2">
                    <img src="/img/Rectangle 69.png" width="100%" className="my-2 my-md-3" />
                </div>
            </div>

            <div className="row pb-3 mb-5">
                <div className="col-lg-6">
                    <Title partOne="Masse" number={1}  
                    MyclassName="py-2 py-md-3 title" />
                
                    <Texte texte="Pour l'étalonnage et vérification de vos Masses étalon notre laboratoire
                                    dispose des moyens suivants:"  
                                    MyclassName="paragraphe" />
                    <div className="mt-5">
                        <Button texte="Demander un devis >" className="my-2 my-md-3"/>
                    </div>
                </div>
             </div>
             <div className="row h-40 rectangle pb-3 pl-1 d-inline-flex">
                    <div className="col-lg-6">
                        
                        <h2>Balance</h2>
                        <div className="list">
                           <ul> 
                               <li>RADWAG de portée 500 g et de résolution 0,01 mg</li>
                               <li>RADWAG de portée 10,2 kg et de résolution 0,1 mg</li>
                               <li>Mettler Toledo de portée 24 g et de résolution 1 µg</li>
                               <li>Mettler Toledo de portée 210 g et de resolution 0,1 mg</li>
                               <li>Précisa de portée 6 kg et de résolution 0,01 g</li>
                               <li>Précisa de portée 6 kg et de résolution 0,01 g</li>
                            </ul>
                        </div> 
                    </div>
                        <div className="col-lg-5">
                            <img src="/img/Groupe 227.png" />
                        </div>
                    </div>


                    <div className="row h-60 rectangle pb-3 pl-1 d-flex">
                        <div className="col-lg-4">
                            <img src="/img/Groupe 228.png" />
                        </div>
                        <div className="col-lg-4">
                            <h2>Masse</h2>
                            <div className="list">
                                <ul> 
                                    <li> 2 Boîtes des masses classes E1</li>
                                    <li> 2 Boîtes des masses classes E2</li>
                                    <li> 2 Boîtes des masses classes F1</li>
                                </ul>
                            </div> 
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Title
                                partOne="Expertise"
                                PartTwo="Internationale"
                                        number={1}
                                MyclassName="py-0 py-md-3 title"/>  
                        </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8">
                                <Texte texte="Pour l'étalonnage et vérification de vos Masses étalon notre laboratoire
                                    dispose des moyens suivants:"  
                                    MyclassName="paragraphe" />
                            </div>
                        </div>
                        <div className="row mb-5">
                        <div className="col-lg-4">
                            <img src="/img/7.png" />
                            <img src="/img/8.png" />
                        </div>
                            <div className="list">
                                <ul> 
                                    <li> Classe E2 de 1g à 10 Kg</li>
                                    <li> Classe F1 de 1mg à 20 Kg</li>
                                    <li> Classe F2 de 1mg à 20 Kg</li>
                                    <li> Classe M de 1mg à 20 Kg</li>
                                </ul>
                            </div>
                        </div>
                    </div>
      
        
</LaboratoireStc6>
  );
}

export default Laboratoire6;