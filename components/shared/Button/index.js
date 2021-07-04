import React from 'react'
import ButtonStc from './Button.stc'

const Button = ({letGo}) => {

    return (
        <ButtonStc className="btn" MonStyle={letGo.style}>
            {letGo.texte}
        </ButtonStc>
       
    )
}


export default Button
