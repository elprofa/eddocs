import React from 'react'
import IconGrilleStc from './IconGrille.stc';

const IconGrille = ({position,topHeader}) => {

    !topHeader?topHeader="":topHeader
    return (
        <>
        {
            position===1 ?
                <IconGrilleStc className={topHeader+" iconGrille"}><img src="/img/groupe101.svg"/></IconGrilleStc>:
                <IconGrilleStc className={topHeader+" left iconGrille"}><img src="/img/groupe101.svg"/></IconGrilleStc>
        }
       </>
    )
}


export default IconGrille
