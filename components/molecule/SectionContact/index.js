
import React from 'react'
import SectionContactStc from './SectionContact.stc';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Image from '../../shared/Image';
import { theme } from '../../../theme';

import { BsEnvelopeFill} from "react-icons/bs";
import { AiFillPhone,AiFillFacebook,AiFillTwitterSquare,AiFillLinkedin } from "react-icons/ai";


const SectionContact = (props) => {
    const letGo=props.letGo;
    const menus=props.letGo.menus;

    return (
        <SectionContactStc className="container" MonStyle={letGo.style}>
           <div className="row">
               <div className="col-lg-12">
               <Title letGo={{
                texte:<>
                    <span><b>Comment </b> nous contacter</span>
                    <Trait letGo={{
                        style:{
                            marginTop:theme.margins.KingParagraphe,
                            marginBottom:theme.margins.KingParagraphe,
                        }
                    }} />
                </>,
                style:{
                    fontWeight:"400",
                    maxWidth:"400px",
                    display:"block",
                    textAlign:"center",
                    margin:"auto",
                    fontSize:theme.font.headingFontSizes.h3
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
                    color:theme.colors.blackG,
                    maxWidth:"400px",
                    display:"block",
                    textAlign:"center",
                    margin:"auto",
                }
            }} />
               </div>
           </div>
           <div className="row" style={{marginTop:theme.margins.KingSection}}>
               <div className="col-lg-6">
                   <div className="metrologie" style={{
                       background: theme.colors.kingGreen
                   }}>
                   
                   <Image letGo={{
                       src:"/img/lo.png",
                       style:{
                            margin: "auto",
                           marginBottom:theme.margins.KingSection,
                           height: "40px",
                           
                           display: "block",
                       }
                   }} />
                   <Title letGo={{
                       texte:<><b>Contactez </b> nous</>,
                       style:{
                        fontSize:theme.font.headingFontSizes.h3,
                        fontWeight:"400",
                       }
                   }} />
                    
                    
                     <Texte letGo={{
                        texte:<>
                        Par mail
                        </>,
                        style:{
                            fontWeight:'500',
                            marginTop:theme.margins.KingSection,
                            marginBottom:"0px",
                        }
                    }} />
                     <Texte letGo={{
                        texte:<>
                        <BsEnvelopeFill/> airmetrologie@gmail.com
                        </>,
                        style:{
                            fontSize:"28px",
                        }
                    }} />
                    <Texte letGo={{
                        texte:<>
                        Appel direct
                        </>,
                        style:{
                            fontWeight:'500',
                            marginTop:theme.margins.KingSection,
                            marginBottom:"0px",
                        }
                    }} />
                     <Texte letGo={{
                        texte:<>
                        <AiFillPhone/> (716) 6003-1478
                        </>,
                        style:{
                            fontSize:"28px",
                        }
                    }} />

                    <Texte letGo={{
                        texte:<>
                        Réseaux sociaux
                        </>,
                        style:{
                            fontWeight:'500',
                            marginTop:theme.margins.KingSection,
                            marginBottom:"0px",
                        }
                    }} />
                    <Texte letGo={{
                        texte:<>
                        <AiFillFacebook/> 
                        <AiFillTwitterSquare/> 
                        <AiFillLinkedin/> 
                        </>,
                        style:{
                            fontSize:"28px",
                        }
                    }} />
                    
                   </div>

               </div>
               <div className="col-lg-6">
                   <div className="metrologie" style={{
                       background: theme.colors.kingGreen
                   }}>
                   
                   <Image letGo={{
                       src:"/img/go.png",
                       style:{
                            margin: "auto",
                           marginBottom:theme.margins.KingSection,
                           height: "40px",
                           
                           display: "block",
                       }
                   }} />
                   <Title letGo={{
                       texte:<><b>Adresse siège </b></>,
                       style:{
                        fontSize:theme.font.headingFontSizes.h3,
                        fontWeight:"400",
                       }
                   }} />
                    
                    
                     <Texte letGo={{
                        texte:<>
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée
                        </>,
                        style:{
                            fontWeight:'500',
                            marginTop:theme.margins.KingSection,
                            marginBottom:"0px",
                        }
                    }} />
                    <Title letGo={{
                       texte:<><b>Contacts </b></>,
                       style:{
                        fontSize:theme.font.headingFontSizes.h3,
                        fontWeight:"400",
                       }
                   }} />
                    
                     <Texte letGo={{
                        texte:<>
                        <AiFillPhone/> (716) 6003-1478
                        </>,
                        style:{
                            fontSize:"28px",
                        }
                    }} />

                    <Texte letGo={{
                        texte:<>
                        <BsEnvelopeFill/> (716) 6003-1478
                        </>,
                        style:{
                            fontSize:"28px",
                        }
                    }} />
                    
                    
                    <Texte letGo={{
                        texte:<>
                        Réseaux sociaux
                        </>,
                        style:{
                            fontWeight:'500',
                            marginTop:theme.margins.KingSection,
                            marginBottom:"0px",
                        }
                    }} />
                    <Texte letGo={{
                        texte:<>
                        <AiFillFacebook/> 
                        <AiFillTwitterSquare/> 
                        <AiFillLinkedin/> 
                        </>,
                        style:{
                            fontSize:"28px",
                        }
                    }} />
                    
                   </div>

               </div>
           </div>
        </SectionContactStc>
       
    )
}


export default SectionContact
