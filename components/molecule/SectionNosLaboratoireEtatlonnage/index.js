
import Texte from "../../shared/Texte";
import CardMin from "../CardMin";
import SectionNosLaboratoireEtatlonnageStc from "./SectionNosLaboratoireEtatlonnage.stc"
import {Row} from 'reactstrap'
import { useEffect } from "react";
import {gsap} from 'gsap';

const SectionNosLaboratoireEtatlonnage = () => {

    useEffect(() => {

        let lt=gsap.timeline({
            scrollTrigger:{
            trigger: ".sectionCardLabo",
            markers:false,
            start:"top center",
            toggleActions:'play none none none',
            },
            delay:.3});
        
            lt.from('.aLabo1',{ y:100,duration:.5,opacity:0,})
            .from ('.aLabo2',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo3',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo4',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo5',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo6',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo7',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo8',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo9',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo10',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo11',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo12',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo13',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })
            .from ('.aLabo14',{duration:.5,opacity:0,ease: "slow(0.7, 0.7, false)", y: 100 })

    }, []);

    const laboratoires=[
        {
            src:"/img/icon/1.png",
            texte:<>Dimensionnel <br/></>,
            anim:"aLabo1"
            
        },
        {
            src:"/img/icon/2.png",
            texte:"Electricité & Magnetisme",
            anim:"aLabo2"
        },
        {
            src:"/img/icon/3.png",
            texte:"Temperature",
            anim:"aLabo3"
        }
        ,
        {
            src:"/img/icon/4.png",
            texte:"Hygrometrie",
            anim:"aLabo4"
        }
        ,
        {
            src:"/img/icon/5.png",
            texte:"force-groupe",
            anim:"aLabo5"
        }
        ,
        {
            src:"/img/icon/6.png",
            texte:"Masse",
            anim:"aLabo6"
        }
        ,
        {
            src:"/img/icon/7.png",
            texte:"pression",
            anim:"aLabo7"
        }
        // ,
        // {
        //     src:"/img/icon/8.png",
        //     texte:"Pesage",
        // }
        ,
        {
            src:"/img/icon/9.png",
            texte:"Temps et frequences",
            anim:"aLabo8"
        }
        ,
        {
            src:"/img/icon/10.png",
            texte:"Physico-chimie",
            anim:"aLabo9"
        }
        ,
        {
            src:"/img/icon/11.png",
            texte:"volume et masse volumique",
            anim:"aLabo10"
        }
        ,
        {
            src:"/img/icon/12.png",
            texte:"anemometrie",
            anim:"aLabo11"
        }
        ,
        {
            src:"/img/icon/18.png",
            texte:"Optique et photométrie",
            anim:"aLabo12"
        },
        {
            src:"/img/icon/19.png",
            texte:"Radiométrie",
            anim:"aLabo13"
        }
        ,
        {
            src:"/img/icon/13.png",
            texte:"Macgine et forces",
            anim:"aLabo14"
        }
    ]
  return (
    <SectionNosLaboratoireEtatlonnageStc className="sectionCardLabo py-2 py-md-3">
        <div className="col-lg-12">
            <Texte texte="Nos domaines de competence en Etalonnage & verification" MyclassName="paragraphe px-2 px-md-3" />
            <div className="divcard divcardAnimate">
                <Row>
                    {
                        laboratoires.map((labo,index)=><CardMin key={index+"labo"} letGo={labo} anim={labo.anim} />)
                    }
                </Row>
            </div>
        </div>
    </SectionNosLaboratoireEtatlonnageStc>
  );
};

export default SectionNosLaboratoireEtatlonnage;
