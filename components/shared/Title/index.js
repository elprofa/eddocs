import React from 'react'
import TitleStc from './Title.stc'

const Title =  (props) => {
  const {text, coulor, text__transform, weight} = props;
    return (
        <TitleStc className="my-2 my-md-5"  
        coulor={coulor} 
        text__transform={text__transform} 
        weight={weight}>
          <span>{text}</span>
        </TitleStc>
       
    )
}


export default Title
