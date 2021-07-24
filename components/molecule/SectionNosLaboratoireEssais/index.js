
import Texte from "../../shared/Texte";
import CardMin from "../CardMin";
import SectionNosLaboratoireEssaisStc from "./SectionNosLaboratoireEssais.stc"

const SectionNosLaboratoireEssais = () => {
    const laboratoires=[
        {
            src:"/img/enc_clim.png",
            texte:<>Enceinte climatique <br/></>,
        },
        {
            src:"/img/autoclave.png",
            texte:"Autoclaves",
        },
        {
            src:"/img/air-comp.png",
            texte:"Qualification air compagnie",
        }
        ,
        {
            src:"/img/envi-propres.png",
            texte:"Evironnement",
        }
    ]
  return (
    <SectionNosLaboratoireEssaisStc className="py-2 py-md-3">
        <div className="col-lg-12">
            <Texte texte="Essais" MyclassName="paragraphe px-2 px-md-3" />
            <div className="divCard">
                {
                    laboratoires.map((labo,index)=><CardMin key={index+"labo"} letGo={labo} />)
                }
            </div>
        </div>
    </SectionNosLaboratoireEssaisStc>
  );
};

export default SectionNosLaboratoireEssais;
