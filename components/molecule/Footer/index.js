import React from 'react';
import Trait from '../../shared/Trait';
import FooterStc from './Footer.stc'
import {Container} from 'reactstrap'
import Image from '../../shared/Image';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import {theme} from '../../../theme'
import Link from '../../shared/Link';
import {AiFillFacebook,AiFillLinkedin,AiFillTwitterSquare} from "react-icons/ai";

const Footer = (props) => {

   
 

    const MenuFooter=[
        {
            style:{
                color:theme.colors.white,
            },
            texte:"Qui sommes-nous ?",
            chemin:"/qui-sommes-nous",
        },
        {
            style:{
                color:theme.colors.white,
            },
            texte:"Nos laboratoires",
            chemin:"/nos-laboratoire",
        },
        {
            style:{
                color:theme.colors.white,
            },
            texte:"Nos Accréditations",
            chemin:"/nos-accreditations",
        },
        {
            style:{
                color:theme.colors.white,
            },
            texte:"Contact",
            chemin:"/contact",
        }
    ]

    const lientSociaux=[
        {
            style:{

            },
            texte:<span><AiFillFacebook /> Facebook</span>,
            chemin:"/",
        },
        {
            style:{

            },
            texte:<span><AiFillTwitterSquare /> Twitter</span>,
            chemin:"/",
        }
        ,
        {
            style:{

            },
            texte:<span><AiFillLinkedin /> Linkedin</span>,
            chemin:"/",
        }
    ];

    const TraitStc={
       
        style:{
            marginTop:theme.margins.KingParagraphe,
            marginBottom:theme.margins.KingParagraphe,
        }
    }
  return (
    <FooterStc className="py-2 py-md-5">
        <Container>
            
                <div className="rowLogo py-1 py-md-3">
                <Trait letGo={TraitStc}/>
                </div>
                <div className="row">
                   <div className="col-lg-6 text-left">
                        <img src="/img/lo.png" height="60" />
                   </div>
                   <div className="col-lg-6 text-right" style={{textAlign:"right"}}>
                        <img src="/img/go.png" height="60" />
                   </div>
                </div>
                
               <div className="row rowLastFooter py-2 py-md-3">
                   <div className="col-md-4">
                    <Texte texte="Entant que spécialiste des services de la métrologie, 
                    notre raison d'être est de contribuer à l'optimisation de la performance 
                    industrielle de nos différents clients par le biais de l'amelioration de 
                    leurs processus de mesures." MyclassName="py-1 py-md-3" />
                    <div className="row py-1 py-md-3">
                        <div className="col-lg-12">
                            <ul className="ulSocialNet">
                                {
                                    lientSociaux.map((social,index)=><li key={index}><Link letGo={social}  /></li>)
                                }
                                
                            </ul>
                        </div>
                    </div>
                   </div>
                   <div className="col-md-4">
                        <ul className="ulMenuFooter py-1 py-md-3">

                            {
                                MenuFooter.map((menu,index)=><li key={1+index+"menuFooter"}><Link letGo={menu} /></li>)
                            }
                                    
                        </ul>
                   </div>
                   <div className="col-md-4 d-sm-none d-none d-md-block d-md-none d-lg-block">
                        <Title partOne="Abonnez vous à " MyclassName="py-1 py-md-3 title" PartTwo="notre newsletter" number={2} />
                        <Input letGo={{
                            style:{
                                
                                margin:"0px",
                            },
                            placeholder:"email@email.com",
                        }} />
                        <Button  texte="Soumettre" MyclassName="py-1 py-md-3" />
                   </div>
                   <div className="col-lg-12">
                   <Trait letGo={TraitStc}/>
                   </div>
                   <div className="col-lg-12">
                       <Texte texte={<>
                            Air Metrologie 2021,Copyright designed & 
                       developped by <a href="https://dubaniagency.com/" target="_blank">Dubani Agency </a>!
                       </>} MyclassName="py-1 py-md-3"/>
                   </div>
               </div>
           
        </Container>
    </FooterStc>
  );
}

export default Footer;