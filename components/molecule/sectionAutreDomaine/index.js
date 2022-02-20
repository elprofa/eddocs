import React, { useEffect } from 'react'
import SectionAutreDomaineStc from './sectionAutreDomaine.stc';
import Texte from '../../shared/Texte';
import { Col, Container, Row } from 'reactstrap';
import { gsap } from 'gsap';
import {FaCircle} from 'react-icons/fa'

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
                        <img src="/img/news/g1.png" className="sectionAutreDomaineImage my-2 my-md-5" width="100%" />
                        
                        {/* <img src="/img/g1.png" className="sectionAutreDomaineImage2 my-2 my-md-5" width="100%" /> */}
                    </div>
                    <div className='col-md-6 align-self-center'>
                        <ul>
                            <li className='cas1'>
                                <a href='https://tools.cofrac.fr/annexes/sect2/2-1920.pdf' target="_blank">
                                    <span> <FaCircle /> </span>  2-1920 (cofrac.fr)
                                </a>
                            </li>
                            <li className='cas2'>
                                <a href='https://tools.cofrac.fr/annexes/sect2/2-1921.pdf' target="_blank">
                                    <span> <FaCircle /> </span>  2-1921 (cofrac.fr)
                                </a>
                            </li>
                            <li className='cas3'>
                                <a href='https://tools.cofrac.fr/annexes/sect2/2-6018.pdf' target="_blank">
                                    <span> <FaCircle /> </span>  2-6018 (cofrac.fr)
                                </a>
                            </li>
                            <li className='cas4'>
                                <a href='https://tools.cofrac.fr/annexes/sect2/2-6019.pdf' target="_blank">
                                    <span> <FaCircle /> </span>  2-6019 (cofrac.fr)
                                </a>
                            </li>
                            <li className='cas5'>
                                <a href='https://tools.cofrac.fr/annexes/sect2/2-6020.pdf' target="_blank">
                                    <span> <FaCircle /> </span>  2-6020 (cofrac.fr)
                                </a>
                            </li>
                            <li className='cas6'>
                                <a href='https://tools.cofrac.fr/annexes/sect2/2-6547.pdf' target="_blank">
                                    <span> <FaCircle /> </span>  2-6547 (cofrac.fr)
                                </a>
                            </li>
                            <li className='cas7'>
                                <a href='https://tools.cofrac.fr/annexes/sect1/1-6282.pdf' target="_blank">
                                    <span> <FaCircle /> </span>  2-6282 (cofrac.fr)
                                </a>
                            </li>
                            <li className='cas1'>
                                <a href='http://www.tunac.tn/replicate/auditTunac.nsf/0/820018E168A31B03412587E90062647D/$file/FL%20Et%2048%20_2-0124_%20Ed.02.pdf' target="_blank">
                                    <span> <FaCircle /> </span>  FL Et 48 _2-0124_ Ed.02.pdf (tunac.tn)
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-6'>
                        <img src="/img/news/g2.png" className="sectionAutreDomaineImage1 my-2 my-md-5" width="100%" />
                    </div>
                    <div className='col-md-6 align-self-center'>
                        <ul>
                            <li className='cas9'>
                                <a href='https://tools.cofrac.fr/annexes/sect2/2-6427.pdf' target="_blank">
                                    2-6427 (cofrac.fr)
                                </a>
                            </li>
                            <li className='cas10'>
                                <a href='https://tools.cofrac.fr/annexes/sect1/1-6426.pdf' target="_blank">
                                  1-6426 (cofrac.fr)
                                </a>
                            </li>
                            <br />
                            <br />
                            <li className='cas11'>
                                <a href='#' target="_blank">
                                    Nom du laboratoire : (tunac.tn)
                                </a>
                            </li>
                            <br />
                            <br /><br />
                            <br />
                            <li className='cas12'>
                                <a href='https://www.mcinet.gov.ma/fr/content/accreditation' target="_blank">
                                Accreditation | Ministère de l’Industrie et du Commerce (mcinet.gov.ma)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </SectionAutreDomaineStc>
       
    )
}


export default SectionAutreDomaine
