import React from 'react'
import SoustitreStc from './Title.stc'

const Soustitre = ({text}) => {

    return (
        <SoustitreStc className="text-uppercase text-light my-2 my-md-5" >
          <span>{text}</span>
        </SoustitreStc>
       
    )
}


export default Soustitre