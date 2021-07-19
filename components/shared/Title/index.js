import React from 'react'
import TitleStc from './Title.stc'
import "bootstrap/dist/css/bootstrap.min.css";

const Title =  (props) => {
  const {text, coulor, text__transform, weight, font__size} = props;
    return (
        <TitleStc className="my-2 my-md-5"  
        coulor={coulor} 
        text__transform={text__transform} 
        weight={weight}
        font__size={font__size}>
          <span>{text}</span>
        </TitleStc>
       
    )
}


export default Title
