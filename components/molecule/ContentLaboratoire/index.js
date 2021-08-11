import React from 'react'
import ContentLaboratoireStc from './ContentLaboratoire.stc';

import Laboratoire2 from '../Laboratoire2';

const ContentLaboratoire = ({letGo}) => {

    return (
        <ContentLaboratoireStc >
             <div className="container">
                <Laboratoire2 letGo={{
                    
                    }} />
             </div>
        </ContentLaboratoireStc>
       
    )
}


export default ContentLaboratoire
