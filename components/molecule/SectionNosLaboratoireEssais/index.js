
import Texte from "../../shared/Texte";
import CardMin from "../CardMin";
import SectionNosLaboratoireEssaisStc from "./SectionNosLaboratoireEssais.stc"
import {Row} from 'reactstrap'
import {gsap} from "gsap";
import { useEffect } from "react";
const SectionNosLaboratoireEssais = () => {

    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".sectionCardLaboEssaie",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from('.aLabo17',{ y:100,duration:.5,opacity:0,})
            .from ('.aLabo18',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo19',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo20',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
    }, []);

    const laboratoires=[
        {
            src:"/img/icon/14.png",
            texte:<>Enceinte climatique <br/></>,
            anim:"aLabo17"
        },
        {
            src:"/img/icon/15.png",
            texte:"Autoclaves",
            anim:"aLabo18"
        },
        {
            src:"/img/icon/16.png",
            texte:"Qualification air compagnie",
            anim:"aLabo19"
        }
        ,
        {
            src:"/img/icon/17.png",
            texte:"Evironnement",
            anim:"aLabo20"
        }
    ]
  return (
    <SectionNosLaboratoireEssaisStc className="sectionCardLaboEssaie py-2 py-md-3">
        <Texte texte="Nos domaine de Essais" MyclassName="paragraphe px-2 px-md-3" />
        <div className="divcard">
             <Row>
                {
                    laboratoires.map((labo,index)=><CardMin key={index+"labo"} letGo={labo} anim={labo.anim} />)
                }
            </Row>
        </div>
    </SectionNosLaboratoireEssaisStc>
  );
};

export default SectionNosLaboratoireEssais;
