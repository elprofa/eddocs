import React from 'react'
import CardClientStc from './CardClient.stc';
import Image from 'next/image';
import Texte from '../../shared/Texte';
const CardClient = (props) => {
     const letGo=props.letGo;
    return (
        <CardClientStc MonStyle={letGo.style}>
          <img src={letGo.image} width="100%" alt="slide" />
        </CardClientStc>
       
    )
}

export default CardClient
