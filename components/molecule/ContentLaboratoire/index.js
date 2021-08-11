import React from 'react'
import ContentLaboratoireStc from './ContentLaboratoire.stc';

import Laboratoire2 from '../Laboratoire2';
import Laboratoire3 from '../Laboratoire3';

const ContentLaboratoire = ({letGo}) => {

    return (
        <ContentLaboratoireStc >
             <div className="container">
                <Laboratoire3 letGo={{
                    
                    }} />
             </div>
        </ContentLaboratoireStc>
       
    )
}


export default ContentLaboratoire
