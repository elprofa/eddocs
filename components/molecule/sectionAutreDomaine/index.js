import React from 'react'
import SectionAutreDomaineStc from './sectionAutreDomaine.stc';
import Texte from '../../shared/Texte';
import { Col, Container, Row } from 'reactstrap';

const SectionAutreDomaine = () => {

    return (
        <SectionAutreDomaineStc className="py-0 py-md-5 ">
            <Container>
                <Row className="py-2 py-md-5 my-0">
                    <Col lg={12}>
                        <div className="caption py-2 py-md-3 px-2 px-md-3">
                            <Texte texte={
                                <>
                                    En dehors de ces accréditations ISO/CEI 17 .25, le groupe intervient 
                                    dans plusieurs autres domaines (Debitmètre,Durée Bruit & Lumière, Moyens de levage,Optique et photomètrie
                                    ...) par raccordement au Système international à travers des laboratoires accredités par le COFRAC.
                                </>
                            } />
                        </div>
                    </Col>
                </Row>
            </Container>
        </SectionAutreDomaineStc>
       
    )
}


export default SectionAutreDomaine
