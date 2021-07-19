import React from 'react'
import { theme } from '../../../theme';
import CardMinStc from './CardMin.stc';
import Image from 'next/image';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
const CardMin = (props) => {
     const letGo=props.letGo;
    return (
        <CardMinStc >
          <Image  src={letGo.src} width="70px" height="70px" />
          <Texte texte={letGo.texte} />
        </CardMinStc>
       
    )
}

export default CardMin
