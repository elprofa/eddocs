import React from 'react';
import SectionClientStc from './SectionClient.stc';

import SliderClient from '../SliderClient';
import Texte from '../../shared/Texte';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import { theme } from '../../../theme';

const SectionClient=()=>{
    return(
        <SectionClientStc className="row">
            <div className="col-md-4 leftPart">
            <Title letGo={{
                  texte:<span><b>Des clients</b> satisfaits</span>,
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
            <div className="col-md-8">
                <SliderClient deviceType={"desktop"}/>
            </div>
            
        </SectionClientStc>
    )
}
export default SectionClient;