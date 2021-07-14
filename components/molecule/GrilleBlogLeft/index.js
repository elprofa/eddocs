import React from 'react'
import GrilleBlogLeftStc from './GrilleBlogLeft.stc';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Image from '../../shared/Image';
import { theme } from '../../../theme';

const GrilleBlogLeft = ({letGo}) => {

    return (
        <GrilleBlogLeftStc className="row">
             <div className="col-lg-6 d-sm-none d-none d-md-block d-md-none d-lg-block">
                 <div className="row">
                     <div className="col-sm-12">
                        <Image letGo={{
                                src:"/img/ilac_logo.png",
                                style:{
                                    width:"20%",
                                    marginTop:theme.margins.KingParagraphe,
                                    marginLeft:theme.margins.KingParagraphe,
                                }
                            }} />
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-sm-6">
                        <Image letGo={{
                            src:"/img/groupe117.png",
                            style:{
                                width:"50%",
                                marginTop:"150px",
                            }
                        }} />
                     </div>
                     <div className="col-sm-6">
                        <Image letGo={{
                            src:"/img/cofrac.png",
                            style:{
                                width:"50%",
                                marginTop:theme.margins.KingParagraphe
                            }
                        }} />
                     </div>
                 </div>
                
                </div>
          <div className="col-lg-5">
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
                    on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                  </span>,
                  style:{
                      marginTop:theme.margins.KingParagraphe,
                      marginBottom:theme.margins.KingParagraphe,
                      color:theme.colors.blackG
                  }
              }} />
              <Button letGo={{
                  texte:"Voir plus >",
                  style:{
                        backgroundImage: "linear-gradient(to right, rgb(101 143 222) , rgb(195 65 95))",
                        fontSize:theme.font.p,
                        border:0,
                        marginTop:theme.margins.KingParagraphe
                    }
              }} />
          </div>
         
        </GrilleBlogLeftStc>
       
    )
}


export default GrilleBlogLeft
