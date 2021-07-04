import React from 'react'
import IconStc from './Icon.stc';


const Icon = ({letGo}) => {

    return (
        <IconStc MonStyle={letGo.style}>
          {letGo.icon}
        </IconStc>
       
    )
}

export default Icon
