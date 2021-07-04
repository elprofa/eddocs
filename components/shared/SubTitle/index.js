import React from 'react'
import SubTitleStc from './SubTitle.stc'

const SubTitle = ({letGo}) => {

    return (
        <SubTitleStc MonStyle={letGo.style}>
          {letGo.texte}
        </SubTitleStc>
       
    )
}


export default SubTitle
