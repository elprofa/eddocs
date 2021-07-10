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
            <Title letGo={{
                texte:<>
                    <span><b>Abonnez-vous  </b>à notre newsletter</span>
                    <Trait letGo={{
                        style:{
                            marginTop:theme.margins.KingParagraphe,
                            marginBottom:theme.margins.KingParagraphe,
                        }
                    }} />
                </>,
                style:{
                    fontWeight:"400",
                    maxWidth:"500px",
                    display:"block",
                    textAlign:"center",
                    margin:"auto",
                    fontSize:theme.font.headingFontSizes.h3,
                    color:theme.colors.white
                }
            }} />

            <Texte letGo={{
                texte:<span>
                Le lorem ipsum est, en imprimerie, une suite de mots sans 
                signification utilisée à titre provisoire pour calibrer une.
                </span>,
                style:{
                    marginTop:theme.margins.KingParagraphe,
                    marginBottom:theme.margins.KingParagraphe,
                    maxWidth:"400px",
                    display:"block",
                    textAlign:"center",
                    margin:"auto",
                    color:theme.colors.white
                }
            }} />
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
                    <Button letGo={{
                        texte:"Soumettre",
                        style:{
                            backgroundImage: "linear-gradient(to right, rgb(101 143 222) , rgb(195 65 95))",
                            fontSize:theme.font.p,
                            border:0,
                            height:"50px",
                            margin:'18px 0px'
                        }
                    }} />
                </div>
            </div>
        </SectionNewsLetterStc>
    )
}
export default SectionNewsLetter;