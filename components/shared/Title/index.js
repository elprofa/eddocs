import React from 'react'
import TitleStc from './Title.stc'

const Title = ({letGo}) => {

    return (
        <TitleStc MonStyle={letGo.style}>
          {letGo.texte}
        </TitleStc>
       
    )
}


export default Title
