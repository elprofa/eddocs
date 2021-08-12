import React from 'react'
import ContentLaboratoireStc from './ContentLaboratoire.stc';
import Laboratoire1 from '../Laboratoire1';
import Laboratoire2 from '../Laboratoire2';
import Laboratoire3 from '../Laboratoire3';
import Laboratoire4 from '../Laboratoire4';
import Laboratoire5 from '../Laboratoire5';
import Laboratoire6 from '../Laboratoire6';


const ContentLaboratoire = (props) => {

    const id=props.id_page;
    let laboratoire=<Laboratoire6 />
    if(id==1)
    {
        laboratoire=<Laboratoire6 />
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
