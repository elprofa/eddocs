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
            lien:"https://www.cofrac.com"
        },
        {
            texte:"COFRAC",
            src:"/img/Groupe116.png",
            lien:"https://www.cofrac.com"
        },
        {
            texte:"COFRAC",
            src:"/img/Groupe116.png",
            lien:"https://www.cofrac.com"
        }
    ];
    return (
        <AccreditationSectionStc >
            <div className="container">
                <div className="row py-2 py-md-5">
                    <div className="col-lg-12">
                        <Title partOne="Nos" PartTwo="Accréditations" number={1}  MyclassName="title py-2 py-md-3" />
                    
                        <Texte texte=" Le lorem ipsum est, en imprimerie, une suite de mots sans 
                            signification utilisée à titre provisoire pour calibrer une
                            mise en page, le texte définitif venant remplacer le faux-texte 
                            dès qu'il est prêt ou que la mise en page est achevée. Généralement, 
                            on utilise un texte en faux latin, le Lorem ipsum ou Lipsum." className="paragraphe py-2 py-md-3" />
                    
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
