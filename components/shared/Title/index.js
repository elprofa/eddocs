import React from 'react'
import TitleStc from './Title.stc'

const Title = ({text}) => {

    return (
        <TitleStc className="text-uppercase text-light my-2 my-md-5" >
          <span>{text}</span>
        </TitleStc>
       
    )
}


export default Title
