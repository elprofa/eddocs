import React from 'react'
import TexteStc from './Texte.stc'

const Texte = ({letGo}) => {

    return (
        <TexteStc MonStyle={letGo.style}>
          {letGo.texte}
        </TexteStc>
       
    )
}


export default Texte
