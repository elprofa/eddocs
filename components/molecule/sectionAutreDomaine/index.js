import React, { useEffect } from 'react'
import SectionAutreDomaineStc from './sectionAutreDomaine.stc';
import Texte from '../../shared/Texte';
import { Col, Container, Row } from 'reactstrap';
import { gsap } from 'gsap';

const SectionAutreDomaine = () => {
    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".sectionAutreDomaine",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from('.sectionAutreDomaineCaption',{ y:100,duration:.5,opacity:0,})
            .from ('.sectionAutreDomaineImage',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 });
    }, []);

    return (
        <SectionAutreDomaineStc className="sectionAutreDomaine py-0 py-md-5 ">
            <div className="container px-0 px-md-5">
                <div className="row py-2 py-md-5 px-0 px-md-5 mx-0 mx-md-5">
                    <div className="col-lg-12">
                        <div className="sectionAutreDomaineCaption caption py-2 py-md-3">
                            <Texte texte={
                                <>
                                    En dehors de ces accréditations ISO/CEI 17 .25, le groupe intervient 
                                    dans plusieurs autres domaines (Debitmètre,Durée Bruit & Lumière, Moyens de levage,Optique et photomètrie
                                    ...) par raccordement au Système international à travers des laboratoires accredités par le COFRAC.
                                </>
                            } />
                            
                        </div>
                       
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src="/img/accreditation/metro.png" className="sectionAutreDomaineImage my-2 my-md-5" width="100%" />
                        
                        {/* <img src="/img/g1.png" className="sectionAutreDomaineImage2 my-2 my-md-5" width="100%" /> */}
                    </div>
                    <div className='col-md-6'>
                        <img src="/img/accreditation/l2mi.png" className="sectionAutreDomaineImage1 my-2 my-md-5" width="100%" />
                    </div>
                </div>
                
            </div>
        </SectionAutreDomaineStc>
       
    )
}


export default SectionAutreDomaine
