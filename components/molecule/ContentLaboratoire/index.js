import React from 'react'
import ContentLaboratoireStc from './ContentLaboratoire.stc';
import Laboratoire1 from '../Laboratoire1';
import Laboratoire2 from '../Laboratoire2';
import Laboratoire3 from '../Laboratoire3';
import Laboratoire4 from '../Laboratoire4';
import Laboratoire5 from '../Laboratoire5';
import Laboratoire6 from '../Laboratoire6';
import Laboratoire7 from '../Laboratoire7';
import Laboratoire8 from '../Laboratoire8';


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
    if(id==3)
    {
        laboratoire=<Laboratoire3 />
    }
    if(id==4)
    {
        laboratoire=<Laboratoire4 />
    }
    if(id==5)
    {
        laboratoire=<Laboratoire5 />
    }
    // if(id==6)
    // {
    //     laboratoire=<Laboratoire6 />
    // }
    if(id==7)
    {
        laboratoire=<Laboratoire7 />
    }
    if(id==8)
    {
        laboratoire=<Laboratoire8 />
    }
    // if(id==9)
    // {
    //     laboratoire=<Laboratoire9 />
    // }
    // if(id==10)
    // {
    //     laboratoire=<Laboratoire10 />
    // }
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
