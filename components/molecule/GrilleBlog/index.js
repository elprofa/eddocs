import React from 'react'
import GrilleBlogStc from './GrilleBlog.stc';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Image from '../../shared/Image';
import { theme } from '../../../theme';

const GrilleBlog = ({letGo}) => {

    return (
        <GrilleBlogStc className="row">
          <div className="col-lg-5 leftPart">
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
          <div className="col-lg-7">
          <Image letGo={{
              src:"/img/blog1.png",
              style:{
                  width:"100%",
                  marginTop:theme.margins.KingParagraphe
              }
          }} />
          </div>
        </GrilleBlogStc>
       
    )
}


export default GrilleBlog
