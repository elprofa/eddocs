import React from 'react'
import ContentLaboratoireStc from './ContentLaboratoire.stc';

import Laboratoire1 from '../Laboratoire1';

const ContentLaboratoire = ({letGo}) => {

    return (
        <ContentLaboratoireStc >
             <div className="container">
                <Laboratoire1 letGo={{
                    
                    }} />
             </div>
        </ContentLaboratoireStc>
       
    )
}


export default ContentLaboratoire
