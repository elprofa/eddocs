import {gsap} from 'gsap'
import React, { useEffect } from 'react'
import CardMinStc from './CardMin.stc';
import Texte from '../../shared/Texte';
const CardMin = (props) => {
     const letGo=props.letGo;
     useEffect(() => {

      // gsap.from( "."+props.anim,{
      //     scrollTrigger:{
      //     trigger: "."+props.anim,
      //     markers:false,
      //     start:"top bottoms",
      //     toggleActions:'play none none none',
      //   },
      //   y:500,
      //   duration:.8,
      //   opacity:0,
      // })

  }, []);
    return (
        <CardMinStc className={" col-sm-2 col-md-2 my-2 my-md-3 mx-2 mx-md-3 "+props.anim} >
          <img  src={letGo.src} />
          {/* <Texte texte={letGo.texte} /> */}
        </CardMinStc>
       
    )
}

export default CardMin
