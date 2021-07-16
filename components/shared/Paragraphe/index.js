import React from 'react'
import ParagrapheStc from './paragraphe.stc'

const Paragraphe =  (props) => {
  const {text, coulor, text__transform, weight, font__family} = props;
    return (
        <ParagrapheStc className="my-2 my-md-5"  
        coulor={coulor} 
        text__transform={text__transform} 
        weight={weight}
        font__family={font__family}>
          <span>{text}</span>
        </ParagrapheStc>
       
    )
}


export default Paragraphe