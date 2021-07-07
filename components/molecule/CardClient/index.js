import React from 'react'
import { theme } from '../../../theme';
import CardClientStc from './CardClient.stc';
import Image from '../../shared/Image';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
const CardClient = (props) => {
     const letGo=props.letGo;
    return (
        <CardClientStc MonStyle={letGo.style}>
          <Image letGo={{
              src:letGo.image,
              style:{
                  width:"70px",
              }
          }} />
          <Texte letGo={{
              texte:letGo.note,
              style:{
                  color:theme.colors.black,
                  marginTop:theme.margins.KingParagraphe,
              }
          }} />
          <Texte letGo={{
              texte:letGo.texte,
              style:{
                  fontWeight:"100",
                  color:theme.colors.black,
                  marginTop:theme.margins.KingParagraphe,
              }
          }} />
           
           <Texte letGo={{
              texte:letGo.site,
              style:{
                  color:theme.colors.black,
                  marginTop:theme.margins.KingParagraphe,
              }
          }} />
          
        </CardClientStc>
       
    )
}

export default CardClient
