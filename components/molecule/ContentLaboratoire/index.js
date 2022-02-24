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
import Laboratoire9 from '../Laboratoire9';
import Laboratoire10 from '../Laboratoire10';
import Laboratoire11 from '../Laboratoire11';
import Laboratoire13 from '../Laboratoire13';
import Laboratoire14 from '../Laboratoire14';
import Laboratoire15 from '../Laboratoire15';
import Laboratoire16 from '../Laboratoire16';
import Laboratoire17 from '../Laboratoire17';
import Laboratoire18 from '../Laboratoire18';
import Laboratoire19 from '../Laboratoire19';
import Laboratoire20 from '../Laboratoire20';


const ContentLaboratoire = (props) => {

    const id=props.id_page;
    let laboratoire=<Laboratoire1 />
    if(id==1)
    {
        laboratoire=<Laboratoire1 />
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
    if(id==6)
    {
        laboratoire=<Laboratoire6 />
    }
    if(id==7)
    {
        laboratoire=<Laboratoire7 />
    }
    if(id==8)
    {
        laboratoire=<Laboratoire8 />
    }
    if(id==9)
    {
        laboratoire=<Laboratoire9 />
    }
    if(id==10)
    {
        laboratoire=<Laboratoire10 />
    }
    if(id==11)
    {
        laboratoire=<Laboratoire11 />
    }
    if(id==13)
    {
        laboratoire=<Laboratoire13 />
    }
    if(id==14)
    {
        laboratoire=<Laboratoire14 />
    }
    if(id==15)
    {
        laboratoire=<Laboratoire15 />
    }
    if(id==16)
    {
        laboratoire=<Laboratoire16 />
    }
    if(id==17)
    {
        laboratoire=<Laboratoire17 />
    }
    if(id==18)
    {
        laboratoire=<Laboratoire18 />
    }
    if(id==19)
    {
        laboratoire=<Laboratoire19 />
    }
    if(id==20)
    {
        laboratoire=<Laboratoire20 />
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
