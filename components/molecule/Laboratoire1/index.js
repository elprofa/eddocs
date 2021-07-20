import React, { useState } from 'react';
import LaboratoireStc1 from './Laboratoire.stc'
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Trait from '../../shared/Trait';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';

const Laboratoire1 = (props) => {
  
  return (
    <LaboratoireStc1 >
        <div className="row py-2 py-md-5">
            <div className="col-lg-12"></div> 
            <div className="col-md-12">
            <img src="/img/Rectangle69.png" width="100%" className="my-2 my-md-3" />
                <div className="col-lg-6">
                    <Title partOne="Laboratoire" PartTwo="Electricité & magnetisme" number={1}  MyclassName="py-2 py-md-3 title" />
                
                    <Texte texte="Le lorem ipsum est, en imprimerie, une suite de mots sans 
                        signification utilisée à titre provisoire pour calibrer une
                        mise en page, le texte définitif venant remplacer le faux-texte 
                        dès qu'il est prêt ou que la mise en page est achevée. Généralement, 
                        on utilise un texte en faux latin, le Lorem ipsum ou Lipsum."  MyclassName="paragraphe" />

                <Button texte="Contacter nous >" className="my-2 my-md-3"/>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-4">
                <Title partOne="Nos" PartTwo="Installation" number={1}  MyclassName="py-2 py-md-3 title" />
            </div>
        </div>
        
        <div className="row py-2 py-md-0">
           
            <div className="col-lg-6">
                <img src="/img/Rectangle69.png" width="100%" />
                <Texte texte="Le lorem ipsum est" MyclassName="paragraphe" />
            </div> 
            <div className="col-lg-6">
                <img src="/img/Rectangle69.png" width="100%" />

                <Texte texte="Le lorem ipsum est"  MyclassName="paragraphe" />
            </div> 
        </div>
    </LaboratoireStc1>
  );
}

export default Laboratoire1;