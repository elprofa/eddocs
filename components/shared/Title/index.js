import React from 'react'
import TitleStc from './Title.stc'

const Title = ({partOne,PartTwo,number,MyclassName,type}) => {

    return (
        <TitleStc className={MyclassName}>

          {
            (type===1)?(
              <h1>
              {
                (number===1)?(<><span>{partOne}</span> {PartTwo}</>):(<>{partOne}<span>{PartTwo}</span> </>)
              }
            </h1>
          
            ):(
              <h2>
                {
                  (number===1)?(<><span>{partOne}</span> {PartTwo}</>):(<>{partOne}<span>{PartTwo}</span> </>)
                }
              </h2>
            )
          }
         
        </TitleStc>
       
    )
}


export default Title
