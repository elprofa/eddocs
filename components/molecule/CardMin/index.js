import React from 'react'
import { theme } from '../../../theme';
import CardMinStc from './CardMin.stc';
import Image from '../../shared/Image';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
const CardMin = (props) => {
     const letGo=props.letGo;
    return (
        <CardMinStc MonStyle={letGo.style}>
          <Image letGo={{
              src:letGo.src,
              style:{
                  width:"70px",
                  display:"block",
                  margin:"auto"
              }
          }} />
          <Texte letGo={{
              texte:letGo.texte,
              style:{
                  fontWeight:"600",
                  color:theme.colors.black,
                  marginTop:theme.margins.KingParagraphe,
              }
          }} />
        </CardMinStc>
       
    )
}

export default CardMin
