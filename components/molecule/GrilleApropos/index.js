import React from 'react'
import GrilleAproposStc from './GrilleApropos.stc';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Image from 'next/image';
import { theme } from '../../../theme';

const GrilleApropos = ({letGo}) => {

    return (
        <GrilleAproposStc>
             <div className="container">
                 <div className="row py-2 py-md-5">
                    <div className="col-lg-6 d-sm-none d-none d-md-none d-lg-block">
                        <div className="row" style={{padding:"30px"}}>
                            <div className="col-sm-6">
                                <Image src="/img/Rectangle-3.png" width="250" height="350" />
                                <Image src="/img/Rectangle-2.png" width="250" height="200"/>
                                
                            </div>
                            <div className="col-sm-6">
                                <Image src="/img/Rectangle-1.png" width="250" height="200" />
                                <Image src="/img/Rectangle-60.png" width="250" height="350"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 textApropos py-0 py-md-3">
                        <Title partOne="A propos d'" PartTwo="Air métrologie" number={1} MyclassName="py-2 py-md-3 title" />
                        
                        <Texte texte="Le lorem ipsum est, en imprimerie, une suite de mots sans 
                                signification utilisée à titre provisoire pour calibrer une
                                mise en page, le texte définitif venant remplacer le faux-texte 
                                dès qu'il est prêt ou que la mise en page est achevée. Généralement, 
                                on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans 
                                signification utilisée à titre provisoire pour calibrer une
                                mise en page, le texte définitif venant remplacer le faux-texte 
                                dès qu'il est prêt ou que la mise en page est achevée. Généralement, 
                                on utilise un texte en faux latin, le Lorem ipsum ou Lipsum." MyclassName="py-2 py-md-3 paragraphe" />
                        <Button texte="Contactez-nous >" MyclassName="my-0 my-md-5" />
                    </div>
            
                 </div>
             </div>
        </GrilleAproposStc>
       
    )
}


export default GrilleApropos
