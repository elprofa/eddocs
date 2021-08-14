
import Texte from "../../shared/Texte";
import CardMin from "../CardMin";
import SectionNosLaboratoireEssaisStc from "./SectionNosLaboratoireEssais.stc"
import {Row} from 'reactstrap'
const SectionNosLaboratoireEssais = () => {
    const laboratoires=[
        {
            src:"/img/icon/14.png",
            texte:<>Enceinte climatique <br/></>,
        },
        {
            src:"/img/icon/15.png",
            texte:"Autoclaves",
        },
        {
            src:"/img/icon/16.png",
            texte:"Qualification air compagnie",
        }
        ,
        {
            src:"/img/icon/17.png",
            texte:"Evironnement",
        }
    ]
  return (
    <SectionNosLaboratoireEssaisStc className="py-2 py-md-3">
        <Texte texte="Nos domaine de Essais" MyclassName="paragraphe px-2 px-md-3" />
        <div className="divcard">
             <Row>
                {
                    laboratoires.map((labo,index)=><CardMin key={index+"labo"} letGo={labo} />)
                }
            </Row>
        </div>
    </SectionNosLaboratoireEssaisStc>
  );
};

export default SectionNosLaboratoireEssais;
