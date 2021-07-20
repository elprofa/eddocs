import React from 'react'
import { theme } from '../../../theme';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import Trait from '../../shared/Trait';
import SectionContactMapStc from './SectionContactMap.stc';


const SectionContactMap = ({letGo}) => {

    return (
        <SectionContactMapStc >
          <div className="container">
            <div className="row py-2 py-md-5">
                <div className="col-md-6">
                    <iframe className="py-2 py-md-3" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15958.954739424611!2d9.484089676019881!3d0.3620054531253482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sga!4v1625902635658!5m2!1sfr!2sga" style={{width:"100%",height:"400px",border:"0px"}} ></iframe>
                </div>
                <div className="col-md-6">
                    <div >
                    <Title partOne="Nos" PartTwo="adresses" number={1} MyclassName="py-2 py-md-3" />
                   
                    <Texte texte="Le lorem ipsum est, en imprimerie, une suite de mots sans 
                            signification utilisée à titre provisoire pour calibrer une." MyclassName="py-2 py-md-3" /></div> 
                    </div>
            </div>
          </div>
        </SectionContactMapStc>
       
    )
}

export default SectionContactMap
