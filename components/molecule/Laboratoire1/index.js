import React, { useState } from 'react';
import LaboratoireStc1 from './Laboratoire.stc'

import Image from '../../shared/Image'
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Trait from '../../shared/Trait';
import Texte from '../../shared/Texte';
import Button from '../../shared/Button';

const Laboratoire1 = (props) => {
  
  return (
    <LaboratoireStc1 className="container">
        <div className="row">
            <div className="col-lg-12">
                <Image letGo={{
                    src:"/img/Rectangle69.png",
                    style:{
                        width:"100%",
                        margin:theme.margins.KingSection,
                        marginLeft:0,
                        marginRight:0
                    }
                }} />
            </div> 
            <div className="col-md-6">
                <Title letGo={{
                    texte:<span><b>Laboratoire</b> Electricité <b>{"&"}</b> magnetisme</span>,
                    style:{
                        fontWeight:"400",
                        fontSize:theme.font.headingFontSizes.h3,
                        marginTop:theme.margins.KingSection
                    }
                }} />
                <Trait letGo={{
                    style:{
                        marginBottom:theme.margins.KingParagraphe,
                    }
                }} />
                <Texte letGo={{
                    texte:<span>
                        Le lorem ipsum est, en imprimerie, une suite de mots sans 
                        signification utilisée à titre provisoire pour calibrer une
                        mise en page, le texte définitif venant remplacer le faux-texte 
                        dès qu'il est prêt ou que la mise en page est achevée. Généralement, 
                        on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                    </span>,
                    style:{
                        marginTop:theme.margins.KingParagraphe,
                        marginBottom:theme.margins.KingParagraphe,
                        color:theme.colors.blackG
                    }
                }} />
                <Button letGo={{
                    texte:"Contacter nous >",
                    style:{
                            backgroundImage: "linear-gradient(to right, rgb(101 143 222) , rgb(195 65 95))",
                            fontSize:theme.font.p,
                            border:0,
                            marginTop:theme.margins.KingParagraphe
                        }
                }} />
            </div>
        </div>

        <div className="row">
            <div className="col-lg-4">
                <Title letGo={{
                        texte:<span><b>Nos</b> Installations</span>,
                        style:{
                            fontWeight:"400",
                            fontSize:theme.font.headingFontSizes.h3,
                            marginTop:theme.margins.KingSection
                        }
                    }} />
                        <Trait letGo={{
                        style:{
                            marginBottom:theme.margins.KingSection,
                        }
                    }} />
            </div>
        </div>
        
        <div className="row">
           
            <div className="col-lg-6">
                <Image letGo={{
                    src:"/img/Rectangle69.png",
                    style:{
                        width:"100%",
                        marginLeft:0,
                        marginRight:0
                    }
                }} />

                <Texte letGo={{
                    texte:<span>
                        Le lorem ipsum est, 
                    </span>,
                    style:{
                        marginTop:theme.margins.KingParagraphe,
                        marginBottom:theme.margins.KingParagraphe,
                        color:theme.colors.blackG
                    }
                }} />
            </div> 
            <div className="col-lg-6">
                <Image letGo={{
                    src:"/img/Rectangle69.png",
                    style:{
                        width:"100%",
                        marginLeft:0,
                        marginRight:0
                    }
                }} />

                <Texte letGo={{
                    texte:<span>
                        Le lorem ipsum est, 
                    </span>,
                    style:{
                        marginTop:theme.margins.KingParagraphe,
                        marginBottom:theme.margins.KingParagraphe,
                        color:theme.colors.blackG
                    }
                }} />
            </div> 
        </div>
    </LaboratoireStc1>
  );
}

export default Laboratoire1;