
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
        
            lt.from('.aLabo19',{ y:100,duration:.5,opacity:0,})
            .from ('.aLabo20',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo21',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo22',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
    }, []);

    const laboratoires=[
        {
            src:"/img/icon/Eclimatique.png",
            texte:<>Caracterisation des enceintes climatiques</>,
            anim:"aLabo19",
            lien:"laboratoires/17"
        },
        {
            src:"/img/icon/autoclave.png",
            texte:"Qualification des autoclaves",
            anim:"aLabo20",
            lien:""
        },
        {
            src:"/img/icon/airComprime.png",
            texte:"Qualification d'air comprimée",
            anim:"aLabo21",
            lien:"laboratoires/16"
        }
        ,
        {
            src:"/img/icon/Environnement.png",
            texte:"Environnement",
            anim:"aLabo22",
            lien:"laboratoires/14"
        }
    ]
  return (
    <SectionNosLaboratoireEssaisStc className="sectionCardLaboEssaie py-2 py-md-3">
        <Texte texte="Nos domaines de compétences en Essais" MyclassName="paragraphe px-2 px-md-3" />
        <div className="divcard">
             <Row>
                {
                    laboratoires.map((labo,index)=><CardMin key={index+"labo"} letGo={labo} anim={labo.anim} lien={labo.lien} />)
                }
            </Row>
        </div>
    </SectionNosLaboratoireEssaisStc>
  );
};

export default SectionNosLaboratoireEssais;
