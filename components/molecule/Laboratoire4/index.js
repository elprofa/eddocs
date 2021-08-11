import React, { useState } from 'react';
import LaboratoireStc4 from './laboratoire.stc';
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';
import LaboratoireStc1 from '../Laboratoire2/Laboratoire.stc';

const Laboratoire4 = (props) => {
  
  return (
    <LaboratoireStc4 >
        <div className="container"> 
            <div className="row py-2 py-md-5">
                <div className="col-lg-12 pb-2">
                    <img src="/img/Rectangle -16.png" width="100%" className="my-2 my-md-3" />
                </div>
            </div>

            <div className="row pb-3 mb-5">
                <div className="col-lg-6">
                    <Title partOne="Hygrometrie" number={1}  MyclassName="py-2 py-md-3 title" />
                
                    <Texte texte="Le laboratoire dispose des meilleurs incertitudes à échelle nationale avec
                                    une équipe de 4 métrologues pour ce domaine.
                                    De plus notre laboratoire est accrédité COFRAC pour l'étalonnage des:"  
                                    MyclassName="paragraphe" />
                </div>

                <div className="col">
                    <img src="/img/8.png" />
                </div>

             </div>
                <div className="row ranger2 rectangle pb-3 pl-2 d-inline-flex">
                    <div className="col">
                        <img src="/img/Groupe 206.png" />
                        <h3>Thermolygromètre</h3>
                    </div>

                    <div className="col">
                        <img src="/img/Groupe 205.png" />
                        <h3>Hygromètre à condensation</h3>
                    </div>

                    <div className="col">
                        <img src="/img/Groupe 207.png" />
                        <h3>Afficheur et enregistreur</h3>                      
                    </div>

                    <div className="col">
                        <img src="/img/Groupe 208.png" />
                        <h3>Hygromètre à variation d'impédance</h3> 
                    </div>

                    <div className="col">
                        <img src="/img/Groupe 209.png" />
                        <h3>Thermo hygrographe</h3> 
                    </div>
                </div>

                <Button texte="Demander un devis >" className="my-2 my-md-3"/>
            </div>
        
</LaboratoireStc4>
  );
}

export default Laboratoire4;