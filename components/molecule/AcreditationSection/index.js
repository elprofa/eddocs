import React from 'react'
import { theme } from '../../../theme';
import AccreditationSectionStc from './AccreditationSection.stc';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import AccreditationElement from '../AccreditationElement';

const AccreditationSection = (props) => {
    const elements=[
        {
            texte:"COFRAC",
            src:"/img/Groupe116.png",
            lien:<>https://www.cofrac.fr </>
        },
        {
            texte:"Tunac",
            src:"/img/tunac.png",
            lien:"https://www.tunac.tn/"
        },
        {
            texte:"SEMAC",
            src:"/img/semac.png",
            lien:"https://www.mcinet.gov.ma/fr/content/accreditation"
        }
    ];
    return (
        <AccreditationSectionStc >
            <div className="container px-0 px-md-5">
                <div className="row py-2 py-md-5 px-0 px-md-5 mx-0 mx-md-5">
                    <div className="col-lg-12">
                        <Title partOne="Nos" PartTwo="Accréditations" number={1}  MyclassName="title py-2 py-md-3" />
                    
                        <Texte texte=" Afin d'apporter à nos clients le meilleur niveau de service dans le domaine
                        de la métrologie dans l'optique de contribuer à l'amélioration de son processus de mesure,
                        le groupe AIR METROLOGIE - L2MI s'est engagé depuis 2005 dans une demarche qualité et de 
                        conformité des prestations attendus par le client, de renforcer la fiabilité et la et la 
                        rigueur de son fonctionnement et de s'ameliorerde façon continue. Nos prestations sont accréditées par les organismes suivants:" className="paragraphe py-2 py-md-3" />
                    
                    </div>
                    <div className="col-lg-12">
                        {
                            elements.map((element,index)=><AccreditationElement key={index+"accredit"} letGo={{
                                texte:element.texte,
                                src:element.src,
                                lien:element.lien,
                            }} />)
                        }
                    </div>
                </div>
            </div>
        </AccreditationSectionStc>
       
    )
}

export default AccreditationSection
