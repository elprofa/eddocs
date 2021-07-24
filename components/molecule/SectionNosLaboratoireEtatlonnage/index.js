
import Texte from "../../shared/Texte";
import CardMin from "../CardMin";
import SectionNosLaboratoireEtatlonnageStc from "./SectionNosLaboratoireEtatlonnage.stc"

const SectionNosLaboratoireEtatlonnage = () => {
    const laboratoires=[
        {
            src:"/img/dimenssionnel.png",
            texte:<>Dimensionnel <br/></>,
        },
        {
            src:"/img/electoMagn.png",
            texte:"Electricité & Magnetisme",
        },
        {
            src:"/img/temperature.png",
            texte:"Temperature",
        }
        ,
        {
            src:"/img/hygrometrie.png",
            texte:"Hygrometrie",
        }
        ,
        {
            src:"/img/force-groupe.png",
            texte:"force-groupe",
        }
        ,
        {
            src:"/img/masse.png",
            texte:"Masse",
        }
        ,
        {
            src:"/img/pression.png",
            texte:"pression",
        }
        ,
        {
            src:"/img/pesage.png",
            texte:"Pesage",
        }
        ,
        {
            src:"/img/temps.png",
            texte:"Temps et frequences",
        }
        ,
        {
            src:"/img/chimie.png",
            texte:"Chimie",
        }
        ,
        {
            src:"/img/volume.png",
            texte:"volume et masse volumique",
        }
        ,
        {
            src:"/img/anemometrie.png",
            texte:"anemometrie",
        }
        ,
        {
            src:"/img/mach-force.png",
            texte:"Macgine et forces",
        }
    ]
  return (
    <SectionNosLaboratoireEtatlonnageStc className="py-2 py-md-3">
        <div className="col-lg-12">
            <Texte texte="Etalonnage & verification" MyclassName="paragraphe px-2 px-md-3" />
            <div className="divCard">
                {
                    laboratoires.map((labo,index)=><CardMin key={index+"labo"} letGo={labo} />)
                }
            </div>
        </div>
    </SectionNosLaboratoireEtatlonnageStc>
  );
};

export default SectionNosLaboratoireEtatlonnage;
