import {gsap} from 'gsap'
import React, { useEffect } from 'react'
import CardMinStc from './CardMin.stc';
import Texte from '../../shared/Texte';
import Link from 'next/link'
const CardMin = (props) => {
     const letGo=props.letGo;
     console.log(props)
    return (
        <CardMinStc className={" col-sm-2 col-md-2 my-2 my-md-3 mx-2 mx-md-3 "+props.anim} >
         <Link href={props.lien}>
           <a><img  src={letGo.src} /></a>
         </Link>
          <Texte texte={letGo.texte} />
        </CardMinStc>
       
    )
}

export default CardMin
