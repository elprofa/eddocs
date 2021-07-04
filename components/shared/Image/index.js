import React from 'react'

const Image = ({letGo}) => {

    return (
        <>
          <img src={letGo.src} style={letGo.style} />
        </>
       
    )
}


export default Image
