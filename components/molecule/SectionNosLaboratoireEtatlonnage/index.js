
import Texte from "../../shared/Texte";
import CardMin from "../CardMin";
import SectionNosLaboratoireEtatlonnageStc from "./SectionNosLaboratoireEtatlonnage.stc"
import {Row} from 'reactstrap'

const SectionNosLaboratoireEtatlonnage = () => {

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
    <SectionNosLaboratoireEtatlonnageStc className="py-2 py-md-3">
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
