import Title from "../../shared/Title";
import Trait from "../../shared/Trait";
import Texte from "../../shared/Texte";
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const TitreParagrapheLabo=(props)=>{
  const anim=props.anim;
  console.log(anim)
  gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: "."+anim,
            markers:false,
            start:"top bottom",
            toggleActions:'play none none none',
            },
            delay:.3});
            lt.from("."+anim+' .titreLaboComponent',{ y:100,duration:.5,opacity:0})
            .from ("."+anim+' .laboParagrapheComp',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            
    }, []);
    return(
        <>
            <Title
              partOne={props.title.partOne}
              PartTwo={props.title.partTwo}
              number={1}
              MyclassName={"titreLaboComponent "+props.title.className}
            />

            <Texte
              texte={props.paragraphe.texte}
              MyclassName="laboParagrapheComp my-2 my-md-3"
            />
        </>
    )
}

export default TitreParagrapheLabo;