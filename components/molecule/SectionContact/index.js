
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
           <div className="row py-2 py-md-5">
               <div className="col-lg-12">
               <Title partOne="Comment" PartTwo="nous contacter" number={1}  MyclassName="py-2 py-md-3 text-center" />
            
            <Texte texte="Le lorem ipsum est, en imprimerie, une suite de mots sans 
                signification utilisée à titre provisoire pour calibrer une." MyclassName="text-center py-2 py-md-3 paragraphe"  />
               </div>
           </div>
           <div className="row py-2 py-md-3">
               <div className="col-lg-6">
                   <div className="metrologie py-2 py-md-5 px-0 px-md-5" >
                   <img src="/img/lo.png" width="120" />
                   <Title partOne="Contactez" PartTwo="nous" number={1}  MyclassName="py-2 py-md-3 title"/>
                     <Texte texte="Par mail" MyclassName="paragraphe py-2 py-md-3" />
                     <Texte texte={<><BsEnvelopeFill/> airmetrologie@gmail.com</>} MyclassName="py-2 py-md-3 paragraphe" />
                     <Texte texte="Appel direct" MyclassName="paragraphe py-2 py-md-3" />
                     <Texte texte={<><AiFillPhone/> (716) 6003-1478</>} MyclassName="py-2 py-md-3 paragraphe" />
                     <Texte texte="Réseaux sociaux" MyclassName="paragraphe py-2 py-md-3" />
                     <Texte texte={<><AiFillFacebook/> <AiFillTwitterSquare/> <AiFillLinkedin/> </>} MyclassName="py-2 py-md-3 paragraphe" />
                   </div>

               </div>
               <div className="col-lg-6">

                   <div className="metrologie py-2 py-md-5 px-0 px-md-5" >
                   <img src="/img/go.png" width="120" />
                   <Title partOne="Adresse siège" PartTwo="" number={1}  MyclassName="py-2 py-md-3 title"/>

                   <Texte texte="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée" MyclassName="paragraphe py-2 py-md-3" />
                   <Title partOne="Contacts" PartTwo="" number={1}  MyclassName="py-2 py-md-3 title"/>

                   <Texte texte="Réseaux sociaux" MyclassName="paragraphe py-2 py-md-3" />
                     <Texte texte={<><AiFillPhone/>  (716) 6003-1478 </>} MyclassName="py-2 py-md-3 paragraphe" />
                     <Texte texte={<><BsEnvelopeFill/>(716) 6003-1478</> } MyclassName="py-2 py-md-3 paragraphe" />
                     
                     <Texte texte="Réseaux sociaux" MyclassName="paragraphe py-2 py-md-3" />
                     <Texte texte={<><AiFillFacebook/> <AiFillTwitterSquare/> <AiFillLinkedin/> </>} MyclassName="py-2 py-md-3 paragraphe" />
                    
                   </div>

               </div>
           </div>
        </SectionContactStc>
       
    )
}


export default SectionContact
