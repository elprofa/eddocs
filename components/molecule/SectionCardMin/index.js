import {gsap} from 'gsap'
import React, { useEffect } from 'react'
import { BsLock } from 'react-icons/bs'
import Title from '../../shared/Title'
import CardMin from '../CardMin'
import IconGrille from '../IconGrille'
import SectionNosLaboratoireEssais from '../SectionNosLaboratoireEssais'
import SectionNosLaboratoireEtatlonnage from '../SectionNosLaboratoireEtatlonnage'
import CardMinSectionStc from './SectionCardMin.stc'

const CardMinSection = ({letGo}) => {
    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".sCardMinLabo",
            markers:false,
            start:"top bottom",
            toggleActions:'restart none none none',
            },
            delay:.4});
        
            lt.from(
                
                '.sCardMTitle',{
                    y:500,
                    duration:.8,
                    opacity:0,
                }
            )
            .from ('.divcardAnimate .row div',{
                duration:.8,
                opacity:0,
                ease: "slow(0.7, 0.7, false)", 
                y: 500 
            })

    }, []);
    return (
        <CardMinSectionStc className="py-2 py-md-5 sCardMinLabo">
            <div className="container">
                <div className="row py-2 py-md-5">
                    <IconGrille position={1} position={2} />
                    <div className="col-lg-12 title">
                        <Title partOne="Nos" PartTwo="laboratoires" number={1} className="sCardMTitle"/>
                    </div>
                </div>
                <SectionNosLaboratoireEtatlonnage />
                <SectionNosLaboratoireEssais />
            </div>
        </CardMinSectionStc>
       
    )
}


export default CardMinSection
