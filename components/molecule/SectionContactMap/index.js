import React from 'react'
import { theme } from '../../../theme';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import Trait from '../../shared/Trait';
import SectionContactMapStc from './SectionContactMap.stc';


const SectionContactMap = ({letGo}) => {

    return (
        <SectionContactMapStc className="container" MonStyle={letGo.style}>
          <div className="row">
              <div className="col-md-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15958.954739424611!2d9.484089676019881!3d0.3620054531253482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sga!4v1625902635658!5m2!1sfr!2sga" style={{width:"100%",height:"400px",border:"0px"}}  allowfullscreen="" loading="lazy"></iframe>
              </div>
              <div className="col-md-6">
                <div style={{maxWidth:"400px",marginTop:"150px"}}>
                <Title letGo={{
                    texte:<span><b>Nos </b> adresses </span>,
                    style:{
                        fontWeight:"400",
                        fontSize:theme.font.headingFontSizes.h3
                    }
                }} />
                <Trait letGo={{
                    style:{
                        marginBottom:theme.margins.KingParagraphe,
                    }
                }} />
                <Texte letGo={{
                    texte:<span>
                        Le lorem ipsum est, en imprimerie, une suite de mots sans 
                        signification utilisée à titre provisoire pour calibrer une.
                    </span>,
                    style:{
                        marginTop:theme.margins.KingParagraphe,
                        marginBottom:theme.margins.KingParagraphe,
                        color:theme.colors.blackG
                    }
                }} /></div> 
                </div>
          </div>
        </SectionContactMapStc>
       
    )
}

export default SectionContactMap
