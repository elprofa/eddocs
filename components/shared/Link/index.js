import React from 'react'
import {LinkStcStyle1} from './Link.stc'
import Link from 'next/link'

const KingLink = ({letGo}) => {

    return (
        <Link href={letGo.chemin}>
          <LinkStcStyle1 MonStyle={letGo.style}>{letGo.texte}</LinkStcStyle1>
        </Link>
       
    )
}


export default KingLink
