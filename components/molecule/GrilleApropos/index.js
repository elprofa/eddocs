import React, { useEffect } from 'react'
import GrilleAproposStc from './GrilleApropos.stc';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Image from 'next/image';
import { theme } from '../../../theme';
import { AiOutlineRight } from "react-icons/ai";
import {gsap} from 'gsap';

const GrilleApropos = ({letGo}) => {
    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".sectionAproposHead",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from('.textApropos',{ y:100,duration:.5,opacity:0,})
            .from ('.aproposParagraphe',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aproposButton',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aproposImage1k',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aproposImage2',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aproposImage3',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aproposImage4',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
    }, []);


    return (
        <GrilleAproposStc className="sectionAproposHead">
             <div className="container">
                 <div className="row py-2 py-md-5">
                    <div className="col-lg-6 d-sm-none d-none d-md-none d-lg-block">
                        <div className="row" style={{padding:"30px"}}>
                            <div className="col-sm-6">
                                <Image src="/img/Rectangle-3.png" className="aproposImage1k" width="250" height="350" />
                                <Image src="/img/Rectangle-2.png" className="aproposImage2" width="250" height="200"/>
                                
                            </div>
                            <div className="col-sm-6">
                                <Image src="/img/Rectangle-1.png" className="aproposImage3" width="250" height="200" />
                                <Image src="/img/Rectangle-60.png" className="aproposImage4" width="250" height="350"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 textApropos py-0 py-md-3 align-self-center">
                        <Title partOne="A propos d'" PartTwo="Air métrologie" number={1} MyclassName="py-2 py-md-3 title" />
                        
                        <Texte texte={ <> Entant que spécialiste des 
                        services de métrologie, notre raison d'être est de contribuer à l'optimisation de la 
                        performance industrielle de nos differents clients par le biais de l'amelioration 
                        industrielle de nos differents clients par le biais de l'amelioration de 
                        de leurs processus de mesures.<br/>
                        Nous sommes parmi les leaders à garantir une offres multiservice d'etalonnage et verification des
                        instruments de mesures en toute independance, avec nos 19 accreditations notre groupe
                        se positionne au sommet des laboratoires à l'echelle nationale en matiere de diversifications des domaines 
                        avec une superficie de 1600 m2 couverte, employant aujourd'hui plus de 60 personnes
                        dans 16 laboratoires principaux qui assurent une couverture homogène de l'ensemble du
                         besoin national. <br/>
                         Au delà des prestations techniques, nous apportons à nos clients notre expertise dans le 
                         deploiement de solutions personnalisées de gestion de parc métrologique.<br/>
                         AIR METROLOGIE -L2MI propose également des formations et des prestations de support 
                         technique dans le domaine de la métrologie.Anée après année, nous sommes fiers d'être devenu 
                         le partenaire de confiance des leaders dans le secteurs de l'aeronautique, l'automobile,Pharmaceutique,
                         Agroalimentaire, Industrie lourden Pétrolier,... </>} MyclassName="py-2 py-md-3 paragraphe aproposParagraphe" />
                        <Button texte={<>Contactez-nous <AiOutlineRight /></>} MyclassName="my-0 my-md-1 aproposButton" />
                    </div>
            
                 </div>

             </div>
        </GrilleAproposStc>
       
    )
}


export default GrilleApropos
