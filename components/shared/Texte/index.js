import React from 'react'
import TexteStc from './Texte.stc'

const Texte = (props) => {
    return (
        <TexteStc className={props.MyclassName} id="text" >
          {props.texte}
        </TexteStc>
       
    )
}


export default Texte
