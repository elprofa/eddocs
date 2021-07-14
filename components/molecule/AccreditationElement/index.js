import React from 'react'
import { theme } from '../../../theme';
import AccreditationElementStc from './AccreditationElement.stc';
import Image from '../../shared/Image';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Link from '../../shared/Link';


const AccreditationElement = (props) => {

     const letGo=props.letGo;
     const src=letGo.src;
     const lien=letGo.lien;
     const texte=letGo.texte;

    return (
        <AccreditationElementStc className="row" MonStyle={letGo.style}>
            <div className="col-md-2">
              <Title letGo={{
                  texte:texte,
                  style:{
                    fontSize:theme.font.headingFontSizes.h4,
                    marginTop:theme.margins.KingSection,
                  }
              }} />
            </div>
            <div className="col-md-2">
                <Image letGo={{
                    src:src,
                    style:{
                        width:"100%",
                        display:"block",
                        margin:"auto"
                    }
                }} />
            </div>
            <div className="col-md-6">
            
                <Link letGo={
                    {
                        chemin:lien,
                        texte:<Texte letGo={{
                            texte:lien,
                              style:{
                                  fontWeight:"600",
                                  color:theme.colors.black,
                                  marginTop:theme.margins.KingSection,
                              }
                          }} />
                    }
                } />
            </div>
          
          
        </AccreditationElementStc>
       
    )
}

export default AccreditationElement
