import React from 'react'
import ButtonStc from './Button.stc'
import {BsChevronRight} from "react-icons/bs"
const Button = (props) => {

    return (
        <ButtonStc className={"btn "+props.MyclassName} >
            {props.texte} <BsChevronRight />
        </ButtonStc>
       
    )
}


export default Button
