import React from 'react'
import ContentLaboratoireStc from './ContentLaboratoire.stc';
import Laboratoire1 from '../Laboratoire1';
import Laboratoire2 from '../Laboratoire2';
import Laboratoire3 from '../Laboratoire3';
import Laboratoire4 from '../Laboratoire4';


const ContentLaboratoire = (props) => {

    const id=props.id_page;
    let laboratoire=<Laboratoire4 />
    if(id==1)
    {
        laboratoire=<Laboratoire4 />
    }
    if(id==2)
    {
        laboratoire=<Laboratoire2 />
    }
    return (
        <ContentLaboratoireStc >
             <div className="container">

                {
                    laboratoire
                }
             </div>
        </ContentLaboratoireStc>
       
    )
}


export default ContentLaboratoire
