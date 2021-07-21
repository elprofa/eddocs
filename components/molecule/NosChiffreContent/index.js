import React from 'react'
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Trait from '../../shared/Trait';
import Texte from '../../shared/Texte';
import NoschiffreContentStc from './NosChiffreContent.stc';


const NoschiffreContent = (props) => {

    const letGo=props.letGo;

    return (
        <NoschiffreContentStc MonStyle={letGo.style} className="py-2 py-md-5">
            <Title partOne="Nos" PartTwo="chiffres" MyclassName="py-2 py-md-3" number={1} />
           
            <div className="row py-2 py-md-3">
                <div className="col-md-4">
                    <Texte MyclassName="label" texte="Nos clients" />
                    <Texte MyclassName="h2" texte="1990" />
                </div>
                <div className="col-md-4">
                    <Texte MyclassName="label" texte="Nos Clients" />
                    <Texte MyclassName="h2" texte="1990" />
                </div>
                <div className="col-md-4">
                    <Texte MyclassName="label" texte="Nos clients" />
                    <Texte MyclassName="h2" texte="1990" />
                </div>
            </div>
        </NoschiffreContentStc>
       
    )
}

export default NoschiffreContent
