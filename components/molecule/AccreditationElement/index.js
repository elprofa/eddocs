import React from 'react'
import { theme } from '../../../theme';
import AccreditationElementStc from './AccreditationElement.stc';
import Image from '../../shared/Image';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Link from '../../shared/Link';


const AccreditationElement = (props) => {

     const letGo=props.letGo;
     const src=letGo.src;
     const lien=letGo.lien;
     const texte=letGo.texte;

    return (
        <AccreditationElementStc className="row">
            <div className="col-md-2 align-self-center">
                <Title partOne={texte} PartTwo="" number={1}  MyclassName="py-2 py-md-3 title" />
            </div>
            <div className="col-md-2">
                <img src={src} width="100%" className="my-2 my-md-3" />
            </div>
            <div className="col-md-6 align-self-center">
                <a href={lien}>
                    <Texte texte={lien} MyclassName="paragraphe py-2 py-md-3" />
                </a>
            </div>
        </AccreditationElementStc>
       
    )
}

export default AccreditationElement
