import React from 'react'
import { useEffect } from "react";
import { theme } from '../../../theme';
import Title from '../../shared/Title';
import Trait from '../../shared/Trait';
import Texte from '../../shared/Texte';
import NoschiffreContentStc from './NosChiffreContent.stc';
import {gsap} from 'gsap'
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";

const NoschiffreContent = (props) => {
    const letGo=props.letGo;
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        
        gsap.to(".ch_experience",{
                scrollTrigger:{
                   trigger: ".ch_experience",
                   markers:false,
                   start:"top bottom",
                   toggleActions:'play none none none'
                },
                innerText:20,
                snap: {
                    innerText:1
                  } ,
                duration:3
            }
        );
        gsap.to(".ch_laboratoire",{
            scrollTrigger:{
               trigger: ".ch_laboratoire",
               markers:false,
               start:"top bottom",
               toggleActions:'play none none none'
            },
            innerText:16,
            snap: {
                innerText:1
              } ,
            duration:3,
        }
        );
        gsap.to(".ch_accredi",{
            scrollTrigger:{
            trigger: ".ch_accredi",
            markers:false,
            start:"top bottom",
            toggleActions:'play none none none'
            },
            innerText:19,
            snap: {
                innerText:1
                } ,
                duration:3,
                delay:"1s"
            }
        );
        gsap.to(".ch_collab",{
            scrollTrigger:{
            trigger: ".ch_collab",
            markers:false,
            start:"top bottom",
            toggleActions:'play none none none'
            },
            innerText:60,
            snap: {
                innerText:1
                } ,
                duration:3,
            }
        );
        gsap.to(".ch_client",{
            scrollTrigger:{
            trigger: ".ch_client",
            markers:false,
            start:"top bottom",
            toggleActions:'play none none none'
            },
            innerText:500,
            snap: {
                innerText:10
                } ,
                duration:3,
            }
        );
      }, []); 
   

    return (
        <NoschiffreContentStc MonStyle={letGo.style} className="py-2 py-md-5">
            <Title partOne="Nos" PartTwo=" chiffres" MyclassName="py-2 py-md-3 chiffre title" number={2} type={1} />
           
            <div className="row py-2 py-md-3">
                <div className="col-md-12">
                    <ul className="ulchiffres px-0 px-md-0 py-3 my-0 px-md-0">
                        <li className="">
                            
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<><span className="plus">+</span> <span className="ch_experience">0</span>
                            <span className="ans">ans</span>
                            <Texte MyclassName="label mb-0 mb-md-3" texte="Experiences" />
                            </>} />
                        </li>
                        <li>
                           
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<><span className="plus">+</span> <span className="ch_laboratoire">0</span>
                                
                                <Texte MyclassName="label mb-0 mb-md-3" texte="Nos laboratoires" />
                            </>} />
                        </li>
                        <li>
                            
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<> <span className="plus">+</span> <span className="ch_accredi">0</span>
                                
                                <Texte MyclassName="label mb-0 mb-md-3" texte="Nos accreditations" />
                            </>} />
                        </li>
                        <li>
                            
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<><span className="plus">+</span> <span className="ch_collab">0</span>
                                
                                <Texte MyclassName="label mb-0 mb-md-3" texte="Nos collaborations" />
                            </>} />
                        </li>
                        <li>
                           
                            <Texte MyclassName="h2 py-2 py-md-0" texte={<><span className="plus">+</span> <span className="ch_client">0</span>
                                
                            <Texte MyclassName="label mb-0 mb-md-3" texte="Nos clients" />
                            </>} />
                        </li>
                        
                    </ul>
                </div>
                
            </div>
        </NoschiffreContentStc>
       
    )
}

export default NoschiffreContent
