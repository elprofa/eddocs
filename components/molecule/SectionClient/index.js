import React, { useEffect } from 'react';
import SectionClientStc from './SectionClient.stc';

import SliderClient from '../SliderClient';
import Texte from '../../shared/Texte';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import { theme } from '../../../theme';
import { gsap } from 'gsap';

const SectionClient=()=>{
    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".sectionClientApropos",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from('.sectionClientApropos',{ x:100,duration:.5,opacity:0,})
            .from ('.titreClientApropos',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.paragrapheClientApropos',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);

    return(
        <SectionClientStc className="sectionClientApropos">
            <div className="container">
                <div className="row py-2 py-md-5">
                    <div className="col-md-4 leftPart">
                        <Title partOne="Des clients" PartTwo="satisfaits" MyclassName="titreClientApropos titrepy-2 py-md-3 title" number={1} />
                        
                        <Texte texte=" Le lorem ipsum est, en imprimerie, une suite de mots sans 
                            signification utilisée à titre provisoire pour calibrer une
                            mise en page, le texte définitif venant remplacer le faux-texte 
                            dès qu'il est prêt ou que la mise en page est achevée. Généralement, 
                            on utilise un texte en faux latin, le Lorem ipsum ou Lipsum." MyclassName="paragrapheClientApropos paragraphe py-2 py-md-3" />
                    
                    </div>
                    <div className="col-md-8">
                        <SliderClient deviceType={"desktop"}/>
                    </div>
                </div>
            </div>
            
        </SectionClientStc>
    )
}
export default SectionClient;