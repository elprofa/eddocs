
import Texte from "../../shared/Texte";
import CardMin from "../CardMin";
import SectionNosLaboratoireEtatlonnageStc from "./SectionNosLaboratoireEtatlonnage.stc"
import {Row} from 'reactstrap'

const SectionNosLaboratoireEtatlonnage = () => {
    const laboratoires=[
        {
            src:"/img/icon/1.png",
            texte:<>Dimensionnel <br/></>,
        },
        {
            src:"/img/icon/2.png",
            texte:"Electricité & Magnetisme",
        },
        {
            src:"/img/icon/3.png",
            texte:"Temperature",
        }
        ,
        {
            src:"/img/icon/4.png",
            texte:"Hygrometrie",
        }
        ,
        {
            src:"/img/icon/5.png",
            texte:"force-groupe",
        }
        ,
        {
            src:"/img/icon/6.png",
            texte:"Masse",
        }
        ,
        {
            src:"/img/icon/7.png",
            texte:"pression",
        }
        ,
        {
            src:"/img/icon/8.png",
            texte:"Pesage",
        }
        ,
        {
            src:"/img/icon/9.png",
            texte:"Temps et frequences",
        }
        ,
        {
            src:"/img/icon/10.png",
            texte:"Chimie",
        }
        ,
        {
            src:"/img/icon/11.png",
            texte:"volume et masse volumique",
        }
        ,
        {
            src:"/img/icon/12.png",
            texte:"anemometrie",
        }
        ,
        {
            src:"/img/icon/13.png",
            texte:"Macgine et forces",
        }
    ]
  return (
    <SectionNosLaboratoireEtatlonnageStc className="py-2 py-md-3">
        <div className="col-lg-12">
            <Texte texte="Nos domaines de competence en Etalonnage & verification" MyclassName="paragraphe px-2 px-md-3" />
            <div className="divcard">
                <Row>
                    {
                        laboratoires.map((labo,index)=><CardMin key={index+"labo"} letGo={labo} />)
                    }
                </Row>
            </div>
        </div>
    </SectionNosLaboratoireEtatlonnageStc>
  );
};

export default SectionNosLaboratoireEtatlonnage;
