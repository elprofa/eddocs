import React from 'react'
import ContentLaboratoireStc from './ContentLaboratoire.stc';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Image from '../../shared/Image';
import { theme } from '../../../theme';
import Laboratoire1 from '../Laboratoire1';

const ContentLaboratoire = ({letGo}) => {

    return (
        <ContentLaboratoireStc MonStyle={letGo.style}>
             <div className="container">
                <Laboratoire1 letGo={{
                    
                    }} />
             </div>
        </ContentLaboratoireStc>
       
    )
}


export default ContentLaboratoire
