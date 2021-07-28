import React from 'react'
import SectionAutreDomaineStc from './sectionAutreDomaine.stc';
import Texte from '../../shared/Texte';
import { Col, Container, Row } from 'reactstrap';

const SectionAutreDomaine = () => {

    return (
        <SectionAutreDomaineStc className="py-0 py-md-5 ">
            <div className="container px-0 px-md-5">
                <div className="row py-2 py-md-5 px-0 px-md-5 mx-0 mx-md-5">
                    <div className="col-lg-12">
                        <div className="caption py-2 py-md-3">
                            <Texte texte={
                                <>
                                    En dehors de ces accréditations ISO/CEI 17 .25, le groupe intervient 
                                    dans plusieurs autres domaines (Debitmètre,Durée Bruit & Lumière, Moyens de levage,Optique et photomètrie
                                    ...) par raccordement au Système international à travers des laboratoires accredités par le COFRAC.
                                </>
                            } />
                            
                        </div>
                        <img src="/img/organigramme.svg" className="my-2 my-md-5" width="100%" />
                    </div>
                </div>
                
            </div>
        </SectionAutreDomaineStc>
       
    )
}


export default SectionAutreDomaine
