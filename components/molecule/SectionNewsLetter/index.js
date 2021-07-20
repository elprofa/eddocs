import React from 'react';
import SectionNewsLetterStc from './SectionNewsLetter.stc';
import Texte from '../../shared/Texte';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import { theme } from '../../../theme';
import Button from '../../shared/Button';
import Input from '../../shared/Input';

const SectionNewsLetter=()=>{
    return(
        <SectionNewsLetterStc>
          <div className="container">
              <div className="row py-2 py-md-5">
                  <div className="col-lg-12">
                    <div className="div_news">
                    <Title partOne="Abonnez-vous" PartTwo="à notre newsletter" number={1} MyclassName="py-2 py-md-3" />

                    <Texte texte="Le lorem ipsum est, en imprimerie, une suite de mots sans 
                        signification utilisée à titre provisoire pour calibrer une." MyclassName="py-2 py-md-3" />
                    <div className="row">
                        <div className="col-md-8">
                        <Input letGo={{
                                    style:{
                                        
                                        marginTop:theme.margins.KingParagraphe
                                    },
                                    placeholder:"email@email.com",


                                }} />
                        </div>
                        <div className="col-md-4">
                            <Button texte="Soumettre" MyclassName="my-2 my-md-3" />
                        </div>
                    </div>
                    </div>
                  </div>
              </div>
          </div>
        </SectionNewsLetterStc>
    )
}
export default SectionNewsLetter;