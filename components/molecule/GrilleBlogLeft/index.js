import React from 'react'
import GrilleBlogLeftStc from './GrilleBlogLeft.stc';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import Image from 'next/image';
import { theme } from '../../../theme';

const GrilleBlogLeft = (props) => {

    return (
        <GrilleBlogLeftStc className="container">
         <div className="container">
             <div className="row py-2 py-md-5">
                <div className="col-lg-6 d-sm-none d-none d-md-block d-md-none d-lg-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Image src="/img/ilac_logo.png" className="py-2 py-md-3" width="120" height="150" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <Image src="/img/groupe117.png" className="py-2 py-md-3" width="120" height="150" />
                        </div>
                        <div className="col-sm-6">
                            <Image src="/img/cofrac.png" className="py-2 py-md-3" width="120" height="150" />
                        </div>
                    </div>
                    
                </div>
            <div className="col-lg-5">
                <Title partOne="A propos d'" PartTwo="Air métrologie" MyclassName="py-2 py-md-3" number={1} />
                <Texte texte=" Le lorem ipsum est, en imprimerie, une suite de mots sans 
                        signification utilisée à titre provisoire pour calibrer une
                        mise en page, le texte définitif venant remplacer le faux-texte 
                        dès qu'il est prêt ou que la mise en page est achevée. Généralement, 
                        on utilise un texte en faux latin, le Lorem ipsum ou Lipsum." MyclassName="py-2 py-md-3" />
                <Button texte="Voir plus >" className="py-2 py-md-3" />
            </div>
             </div>
         </div>
        </GrilleBlogLeftStc>
       
    )
}


export default GrilleBlogLeft
