import React from 'react'
import CardClientStc from './CardClient.stc';
import Image from 'next/image';
import Texte from '../../shared/Texte';
const CardClient = (props) => {
     const letGo=props.letGo;
    return (
        <CardClientStc MonStyle={letGo.style}>
          <img src={letGo.image} width="70" height="70" />
          <Texte texte={letGo.note} />
          <Texte texte={letGo.texte} />
           
           <Texte texte={letGo.site}/>
          
        </CardClientStc>
       
    )
}

export default CardClient
