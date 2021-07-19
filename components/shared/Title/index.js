import React from 'react'
import TitleStc from './Title.stc'

const Title = ({partOne,PartTwo,number,MyclassName}) => {

    return (
        <TitleStc className={MyclassName}>
         <h2>
           {
             (number===1)?(<><span>{partOne}</span> {PartTwo}</>):(<>{partOne}<span>{PartTwo}</span> </>)
           }
         </h2>
        </TitleStc>
       
    )
}


export default Title
