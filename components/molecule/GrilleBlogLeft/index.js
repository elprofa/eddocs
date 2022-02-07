import React, { useEffect } from 'react'
import GrilleBlogLeftStc from './GrilleBlogLeft.stc';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Image from 'next/image';
import { theme } from '../../../theme';

import { AiOutlineRight } from "react-icons/ai";
import IconGrille from '../IconGrille';
import {gsap,Power3} from 'gsap'
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"
import { useRef } from 'react';

const GrilleBlogLeft = (props) => {
    
      useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".sectionGridLeft",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.1});
        
            lt.from(
                
                '.gBolgLTitle',{
                    y:100,
                    duration:.5,
                    opacity:0,
                }
            )
            .from ('.p1',{
                duration:.5,
                opacity:0,
                ease: "slow(0.7, 0.7, false)", 
                y: 100 
            })
            .from ('.bGlButton',{
                duration:.5,
                opacity:0,
                ease: "slow(0.7, 0.7, false)", 
                y: 100 
            })
            .from('.imgGl1',{
                duration:.5,
                opacity:0,
                ease: "back.out(1.7)", 
                y: 100 
            
            })
            .from('.imgGl2',{
                duration:.5,
                opacity:0,
                ease: "back.out(1.7)", 
                y: 100 
            
            })
            .from('.imgGl3',{
                duration:.5,
                opacity:0,
                ease: "back.out(1.7)", 
                y: 100 
            
            })
            .from('.imgGl4',{
                duration:.5,
                opacity:0,
                ease: "back.out(1.7)", 
                y: 100 
            
            })
           

    }, []);

    return (
        <GrilleBlogLeftStc className="py-0 py-md-5 sectionGridLeft">
         <div className="container">
             <div className="row py-2 py-md-5 my-0 my-5">
                
                <div className="col-lg-6 d-sm-none d-none d-md-block d-md-none d-lg-block text-center">
                    <img src="/img/g16.png" className="imgGl1 py-2 py-md-3"  />
                </div>
            <div className="col-lg-6 align-self-center">
                <Title partOne="Nos " PartTwo="Accréditations ISO/CEI 17 025" MyclassName="gBolgLTitle px-0 px-md-5 py-2 py-md-3 title" number={2} />
                <Texte texte={
                    <>
                    Afin d'apporter à nos clients le meilleur niveau de service dans le domaine de la metrologie 
                    dans l'optique de contribuer à l'amelioration de son processus de mesure, le groupe AIR metrologie-L2MI s'est
                        engagé depuis 2005 dans une démarche qualité qui s'appuie sur la norme ISO/CEI 17 025 version
                        2017,dans le but de satisfaire le niveau de qualité et conformité des prestations attendus par 
                        le client, de renforcer la fiabilité et la rigueur de son fonctionnement et de s'ameliorer de facon
                         continue.
                    
                    </>
                } MyclassName="anim1 px-0 px-md-5 py-2 py-md-3 paragraphe p1" />
                <Button texte={<>En savoir plus </>} MyclassName="mx-0 mx-md-5 py-2 py-md-3 bGlButton" />
            </div>
             </div>
         </div>
        </GrilleBlogLeftStc>
       
    )
}


export default GrilleBlogLeft
