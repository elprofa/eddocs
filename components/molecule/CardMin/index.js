import React from 'react'
import CardMinStc from './CardMin.stc';
import Texte from '../../shared/Texte';
const CardMin = (props) => {
     const letGo=props.letGo;
    return (
        <CardMinStc className="my-2 my-md-3 mx-2 mx-md-3">
          <img  src={letGo.src} width="100%" />
          {/* <Texte texte={letGo.texte} /> */}
        </CardMinStc>
       
    )
}

export default CardMin
