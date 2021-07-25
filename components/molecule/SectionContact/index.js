import React from 'react'
import SectionContactStc from './SectionContact.stc';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Image from '../../shared/Image';
import { theme } from '../../../theme';

import { BsEnvelopeFill} from "react-icons/bs";
import { AiFillPhone,AiFillFacebook,AiFillTwitterSquare,AiFillLinkedin,AiTwotoneDownCircle } from "react-icons/ai";


const SectionContact = (props) => {
    const letGo=props.letGo;
    const menus=props.letGo.menus;

    return (
        <SectionContactStc className="container py-0 py-md-5" MonStyle={letGo.style}>
           <div className="row py-2 py-md-5">
               <div className="col-lg-12">
               <Title partOne="Comment" PartTwo="nous contacter ?" number={1}  MyclassName="py-2 py-md-3 text-center" />
            
            <Texte texte={<>
                Remplissez le formulaire ou contacter nous directement par Mail ou sur notre <span>numéro client <AiTwotoneDownCircle /></span>
            </>} MyclassName="paragraphe one text-center py-2 py-md-0 my-md-0 "  />
               </div>
           </div>
           <div className="row py-2 py-md-5">
               <div className="col-lg-6">
                   <div className="mx-0 mx-md-3  metrologie mx-0 mx-md-3 py-2 py-md-5 px-0 px-md-5" >
                        <img src="/img/lo.png" width="150"/>
                    
                        <Texte texte="Adresse du siège" MyclassName="paragraphe title py-2  pb-md-0 mb-md-0" />
                        <Texte texte={<>Bd Chefchaouni KM 8.5 Porte B,1 er Etage Appt 3 <br/>Aîn Sebâa -Casablanca</>} MyclassName="py-2 pt-md-0 paragraphe" />
                        <Texte texte="Laboratoire casablanca" MyclassName="paragraphe title py-2 pb-md-0 mb-md-0" />
                        <Texte texte={<>N°12 Lotissement MAURITANIA <br/> Q.I SIDI BERNOUSSI - Casablanca MAROC</>} MyclassName="py-2 pb-mt-0 paragraphe" />
                        <Texte texte="Laboratoire Tanger" MyclassName="paragraphe title py-2 pb-md-0 mb-md-0" />
                        <Texte texte={<>TFZ LT 38C,ET1,BU20 <br/> 90000 - Tanger</>} MyclassName="py-2 pb-mt-0 paragraphe" />
                        <Texte texte="Contacts" MyclassName="paragraphe title py-2 pb-md-0 mb-md-0" />
                        <Texte texte={<>
                        <span className="phone"><AiFillPhone /> +212 522 356 003 / +212 522 352 744</span><br/>
                         <span className="email">Am.contact@groupe-airmetrologie-l2mi.com</span><br/>
                         <span className="reseaux"><AiFillFacebook/> <AiFillTwitterSquare/> <AiFillLinkedin/></span>
                        </>} MyclassName="py-2 pb-mt-0 paragraphe" />
                        
                        <div className="py-2 pt-md-5" style={{    width: "100%",minHeight: "60px"}}>
                            <img src="/img/logm.png" className="logo_messenger" style={{height:"100%"}} />
                        </div>
                    </div>

               </div>
               <div className="col-lg-6">

                    <div className="metrologie mx-0 mx-md-3 py-2 py-md-5 px-0 px-md-5" >
                        <img src="/img/go.png" width="150" />
                        <Texte texte="Adresse du siège" MyclassName="paragraphe title py-2 pb-md-0 mb-md-0" />
                        <Texte texte={<>Lot Asta Immeuble A 4eme Etage N° 15 & 16 <br/>Bd Chefchaouni,<br/>Aîn Sebâa -Casablanca</>} MyclassName="py-2 pt-md-0 paragraphe" />
                        <Texte texte="Laboratoire casablanca" MyclassName="paragraphe title py-2 pb-md-0 mb-md-0" />
                        <Texte texte={<>N°12 Lotissement MAURITANIA <br/> Q.I SIDI BERNOUSSI - Casablanca MAROC</>} MyclassName="py-2 pb-mt-0 paragraphe" />
                        <Texte texte="Laboratoire Tanger" MyclassName="paragraphe title py-2 pb-md-0 mb-md-0" />
                        <Texte texte={<>TFZ LT 38C,ET1,BU20 <br/> 90000 - Tanger</>} MyclassName="py-2 pb-mt-0 paragraphe" />
                        <Texte texte="Contacts" MyclassName="paragraphe title py-2 pb-md-0 mb-md-0" />
                        <Texte texte={<>
                        <span className="phone"><AiFillPhone /> +212 522 357 756 / +212 522 344 541</span><br/>
                         <span className="email">L2mi.contact@groupe-airmetrologie-l2mi.com</span><br/>
                         <span className="reseaux"><AiFillFacebook/> <AiFillTwitterSquare/> <AiFillLinkedin/></span>
                        </>} MyclassName="py-2 pb-mt-0 paragraphe" />
                        <div className="py-2 pt-md-5" style={{    width: "100%",minHeight: "60px"}}>
                            <img src="/img/logm1.png" className="logo_messenger" style={{height:"100%"}} />
                        </div>
                    </div>

               </div>
           </div>
        </SectionContactStc>
       
    )
}


export default SectionContact