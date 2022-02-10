import React, { useEffect } from 'react'
import { theme } from '../../../theme';
import AccreditationSectionStc from './AccreditationSection.stc';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import AccreditationElement from '../AccreditationElement';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
const AccreditationSection = (props) => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".sectionAcreditCol1",
            markers:false,
            start:"top bottom",
            toggleActions:'play none none none',
            },
            delay:.3});
            lt.from('.titreAccredit',{ y:100,duration:.5,opacity:0,})
            .from ('.MyparagrapheAccredit1',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })

        let lt1=gsap.timeline({
            scrollTrigger:{
            trigger: ".sectionAcreditCol2",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
            lt1.from('.acrreditElement1',{ y:100,duration:.5,opacity:0,})
            .from ('.acrreditElement2',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.acrreditElement3',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);

    const elements=[
        {
            texte:"COFRAC",
            src:"/img/Groupe116.png",
            lien:<>https://www.cofrac.fr </>,
            link_name:"https://www.cofrac.fr",
            cls:"acrreditElement1"
        },
        {
            texte:"Tunac",
            src:"/img/tunac.png",
            lien:"https://www.tunac.tn/",
            link_name:"https://www.tunac.tn/",
            cls:"acrreditElement2"
        },
        {
            texte:"SEMAC",
            src:"/img/semac.png",
            lien:" https://www.mcinet.gov.ma/fr/content/accreditation",
            link_name:'https://www.mcinet.gov...',
            cls:"acrreditElement3"
        }
    ];
    return (
        <AccreditationSectionStc className="sectionAcredit">
            <div className="container px-0 px-md-5">
                <div className="row py-2 py-md-5 px-0 px-md-5 mx-0 mx-md-5">
                    <div className="col-lg-12 sectionAcreditCol1">
                        <Title partOne="Nos" PartTwo="Accréditations" number={1}  MyclassName="titreAccredit title py-2 py-md-3" />
                    
                        <Texte texte=" Afin d'apporter à nos clients le meilleur niveau de service dans le domaine
                        de la métrologie dans l'optique de contribuer à l'amélioration de son processus de mesure,
                        le groupe AIR METROLOGIE - L2MI s'est engagé depuis 2005 dans une demarche qualité et de 
                        conformité des prestations attendus par le client, de renforcer la fiabilité et la et la 
                        rigueur de son fonctionnement et de s'ameliorerde façon continue. Nos prestations sont accréditées par les organismes suivants:" 
                        MyclassName="MyparagrapheAccredit1 paragraphe py-2 py-md-3" />
                    
                    </div>
                    <div className="col-lg-12 sectionAcreditCol2">
                        {
                            elements.map((element,index)=><AccreditationElement key={index+"accredit"} letGo={{
                                texte:element.texte,
                                src:element.src,
                                lien:element.lien,
                                link_name:element.link_name
                            }} cls={element.cls} />)
                        }
                    </div>
                </div>
            </div>
        </AccreditationSectionStc>
       
    )
}

export default AccreditationSection
