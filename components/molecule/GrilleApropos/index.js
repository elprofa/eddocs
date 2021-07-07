import React from 'react'
import GrilleAproposStc from './GrilleApropos.stc';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Image from '../../shared/Image';
import { theme } from '../../../theme';

const GrilleApropos = ({letGo}) => {

    return (
        <GrilleAproposStc className="row">
             <div className="col-lg-6 d-sm-none d-none d-md-block d-md-none d-lg-block">
                 <div className="row" style={{padding:"30px"}}>
                     <div className="col-sm-6">
                        <Image letGo={{
                            src:"/img/Rectangle-3.png",
                            style:{
                                width:"100%",
                                marginTop:"15px",
                            }
                        }} />
                        <Image letGo={{
                            src:"/img/Rectangle-2.png",
                            style:{
                                width:"100%",
                                marginTop:"15px",
                            }
                        }} />
                     </div>
                     <div className="col-sm-6">
                        <Image letGo={{
                            src:"/img/Rectangle-1.png",
                            style:{
                                width:"100%",
                                marginTop:"15px"
                            }
                        }} />
                        <Image letGo={{
                            src:"/img/Rectangle-60.png",
                            style:{
                                width:"100%",
                                marginTop:"15px",
                            }
                        }} />
                     </div>
                 </div>
                
                </div>
          <div className="col-lg-5 textApropos">
              <Title letGo={{
                  texte:<span><b>A propos d'</b> Air métrologie</span>,
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
                    on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans 
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
                  texte:"Contactez-nous >",
                  style:{
                        backgroundImage: "linear-gradient(to right, rgb(101 143 222) , rgb(195 65 95))",
                        fontSize:theme.font.p,
                        border:0,
                        marginTop:theme.margins.KingParagraphe
                    }
              }} />
          </div>
         
        </GrilleAproposStc>
       
    )
}


export default GrilleApropos
