import React from 'react'
import ButtonStc from './Button.stc'

const Button = (props) => {

    return (
        <ButtonStc className={"btn "+props.MyclassName} >
            {props.texte}
        </ButtonStc>
       
    )
}


export default Button
