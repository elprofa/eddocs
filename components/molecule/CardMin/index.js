import React from 'react'
import CardMinStc from './CardMin.stc';
import Texte from '../../shared/Texte';
const CardMin = (props) => {
     const letGo=props.letGo;
    return (
        <CardMinStc className="col-sm-2 col-md-2 my-2 my-md-3 mx-2 mx-md-3">
          <img  src={letGo.src} />
          {/* <Texte texte={letGo.texte} /> */}
        </CardMinStc>
       
    )
}

export default CardMin
