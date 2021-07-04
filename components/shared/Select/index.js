import React from 'react'
import SelectStc from './Select.stc'
const Select = ({letGo}) => {
    const options=letGo.content.option;
    return (
        <>
            <SelectStc className="input-group mb-3" MonStyle={letGo.style}>
                <span className="btn btn-outline-secondary" id="basic-addon1">
                    {letGo.icon}
                </span>
                <select className="form-select form-control" id="inputGroupSelect03" aria-label="Example select with button addon">
                    {
                       options.map((option1,index)=>(<option key={index} value={option1.value}>{option1.texte}</option>)) 
                    }
                    
                </select>
            </SelectStc>
           
        </>
       
    )
}


export default Select
