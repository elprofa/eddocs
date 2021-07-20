import React from 'react';
import SectionClientStc from './SectionClient.stc';

import SliderClient from '../SliderClient';
import Texte from '../../shared/Texte';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import { theme } from '../../../theme';

const SectionClient=()=>{
    return(
        <SectionClientStc>
            <div className="container">
                <div className="row py-2 py-md-5">
                    <div className="col-md-4 leftPart">
                        <Title partOne="Des clients" PartTwo="satisfaits" MyclassName="py-2 py-md-3 title" number={1} />
                        
                        <Texte texte=" Le lorem ipsum est, en imprimerie, une suite de mots sans 
                            signification utilisée à titre provisoire pour calibrer une
                            mise en page, le texte définitif venant remplacer le faux-texte 
                            dès qu'il est prêt ou que la mise en page est achevée. Généralement, 
                            on utilise un texte en faux latin, le Lorem ipsum ou Lipsum." MyclassName="paragraphe py-2 py-md-3" />
                    
                    </div>
                    <div className="col-md-8">
                        <SliderClient deviceType={"desktop"}/>
                    </div>
                </div>
            </div>
            
        </SectionClientStc>
    )
}
export default SectionClient;