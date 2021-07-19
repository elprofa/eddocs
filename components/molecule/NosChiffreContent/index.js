import React from 'react'
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Trait from '../../shared/Trait';
import Texte from '../../shared/Texte';
import NoschiffreContentStc from './NosChiffreContent.stc';


const NoschiffreContent = (props) => {

    const letGo=props.letGo;

    return (
        <NoschiffreContentStc MonStyle={letGo.style}>
            <Title partOne="Nos" PartTwo="chiffres" number={1} />
           
            <div className="row" style={{marginTop:theme.margins.KingParagraphe}}>
                <div className="col-md-4">
                    <Texte texte="Nos clients" />
                    <Title partOne="1990" PartTwo="" number={1} />
                </div>
                <div className="col-md-4">
                    <Texte texte="Nos Clients" />
                     <Title partOne="1990" PartTwo="" number={1} />
                </div>
                <div className="col-md-4">
                    <Texte texte="Nos clients" />
                    <Title partOne="1990" PartTwo="" number={1} />
                </div>
            </div>
        </NoschiffreContentStc>
       
    )
}

export default NoschiffreContent
