import React from 'react'
import TexteStc from './Texte.stc'

const Texte = (props) => {
    return (
        <TexteStc className={props.MyclassName} id="text" style={props.style}>
          {props.texte}
        </TexteStc>
       
    )
}


export default Texte
