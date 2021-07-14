import React from 'react'
import { theme } from '../../../theme';
import AccreditationSectionStc from './AccreditationSection.stc';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import AccreditationElement from '../AccreditationElement';

const AccreditationSection = (props) => {
    const elements=[
        {
            texte:"COFRAC",
            src:"/img/Groupe116.png",
            lien:"https://www.cofrac.com"
        },
        {
            texte:"COFRAC",
            src:"/img/Groupe116.png",
            lien:"https://www.cofrac.com"
        },
        {
            texte:"COFRAC",
            src:"/img/Groupe116.png",
            lien:"https://www.cofrac.com"
        }
    ];
    return (
        <AccreditationSectionStc className="row" MonStyle={props.letGo.style}>
            <div className="col-lg-12">
            <Title letGo={{
                  texte:<span><b>Nos</b> Accréditations</span>,
                  style:{
                      fontWeight:"400",
                      fontSize:theme.font.headingFontSizes.h3
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
              
            </div>
            <div className="col-lg-12">
                {
                    elements.map((element,index)=><AccreditationElement key={index+"accredit"} letGo={{
                        texte:element.texte,
                        src:element.src,
                        lien:element.lien,
                    }} />)
                }
            </div>
        </AccreditationSectionStc>
       
    )
}

export default AccreditationSection
