import React from 'react'
import InputStc from './Input.stc'
const Input = ({letGo}) => {

    return (
        <>
           <InputStc className="input-group mb-3" MonStyle={letGo.style}>
            <span className="input-group-text" id="basic-addon1" style={{color:"#000 !important"}}>
                {letGo.icon}
            </span>
            <input type={letGo.type} 
            className="form-control" 
            placeholder={letGo.placeholder} 
            aria-label="Username" 
            aria-describedby="basic-addon1" />
            </InputStc>
        </>
       
    )
}


export default Input
