import React, { useEffect } from 'react'
import { theme } from '../../../theme';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import Trait from '../../shared/Trait';
import SectionContactMapStc from './SectionContactMap.stc';
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const SectionContactMap = ({letGo}) => {

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {

      let lt=gsap.timeline({
          scrollTrigger:{
          trigger: ".sectionContactMap",
          markers:false,
          start:"top center",
          toggleActions:'play none none none',
          },
          delay:.3});
      
          lt.from('.sectionContactMap_left',{ x:-100,duration:.5,opacity:0})
          .from ('.sectionContactMap_right',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", x: 100 })
         
  }, []);

    return (
        <SectionContactMapStc >
          <div className=" sectionContactMap container py-0 py-md-5">
            <div className="row py-2 py-md-5">
                <div className="sectionContactMap_left col-md-6">
                    <iframe className="py-2 py-md-3" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15958.954739424611!2d9.484089676019881!3d0.3620054531253482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sga!4v1625902635658!5m2!1sfr!2sga" style={{width:"100%",height:"400px",border:"0px"}} ></iframe>
                </div>
                <div className="sectionContactMap_right col-md-6 align-self-center">
                    <div >
                      <Title partOne="Nos" PartTwo="adresses" number={1} MyclassName="title py-2 py-md-3" />
                   </div> 
              </div>
            </div>
          </div>
        </SectionContactMapStc>
       
    )
}

export default SectionContactMap
