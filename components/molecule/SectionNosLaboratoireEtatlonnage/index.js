
import Texte from "../../shared/Texte";
import CardMin from "../CardMin";
import SectionNosLaboratoireEtatlonnageStc from "./SectionNosLaboratoireEtatlonnage.stc"

const SectionNosLaboratoireEtatlonnage = () => {
    const laboratoires=[
        {
            src:"/img/anemometrie.png",
            texte:<>Dimensionnel <br/></>,
        },
        {
            src:"/img/anemometrie.png",
            texte:"Electricité & Magnetisme",
        },
        {
            src:"/img/anemometrie.png",
            texte:"Temperature",
        }
    ]
  return (
    <SectionNosLaboratoireEtatlonnageStc className="py-2 py-md-3">
        <div className="col-lg-12">
            <Texte texte="Etalonnage & verification" MyclassName="paragraphe px-2 px-md-3" />
            {
                laboratoires.map((labo,index)=><CardMin key={index+"labo"} letGo={labo} />)
            }
        </div>
    </SectionNosLaboratoireEtatlonnageStc>
  );
};

export default SectionNosLaboratoireEtatlonnage;
