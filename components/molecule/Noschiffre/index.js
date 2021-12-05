import React from 'react'
import NosChiffreStc from './Noschiffre.stc';
import { BsChevronLeft,BsChevronRight } from "react-icons/bs";
import NoschiffreContent from '../NosChiffreContent';
import { theme } from '../../../theme';

const Noschiffre = (props) => {

    const letGo=props.letGo;

    return (
        <NosChiffreStc >
         <div className="row">
             <div className="col-sm-2">
            
             </div>
             <div className="col-sm-12 col-md-8">
               
                 <NoschiffreContent letGo={{
                     style:{

                         
                         borderRadius:"25px",
                         textAlign: "center",
                     }
                 }} />
             </div>
             <div className="col-sm-2">
             
             </div>
         </div>
        </NosChiffreStc>
       
    )
}

export default Noschiffre
