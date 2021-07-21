import React from 'react'
import GrilleBlogStc from './GrilleBlog.stc';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
// import Image from '../../shared/Image';
import { theme } from '../../../theme';
import { Col, Container, Row } from 'reactstrap';
import Image from 'next/image';

const GrilleBlog = ({letGo}) => {

    return (
        <GrilleBlogStc>
            <Container>
                <Row className="py-2 py-md-5">
                    <Col lg={6} >
                        <div className="text-center py-2 py-md-3 px-0 px-md-5"> 
                            <Title partOne="A propos d'" PartTwo="Air metrologie" MyclassName="title "  number={1} />
                        </div>
                        <Texte MyclassName="py-2 py-md-3 px-0 px-md-5 paragraphe"  texte="Le lorem ipsum est, en imprimerie, une suite de mots sans 
                        signification utilisée à titre provisoire pour calibrer une mise en page, 
                        le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que 
                        la mise en page est achevée. Généralement, on utilise un texte en faux latin, 
                        le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans 
                        signification utilisée à titre provisoire pour calibrer une mise en page, 
                        le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que 
                        la mise en page est achevée. Généralement, on utilise un texte en faux latin, 
                        le Lorem ipsum ou Lipsum." />

                    </Col>
                    <Col lg={6} className="text-center">
                        <Image src="/img/blog1.png" width="1200" height="800" />
                    </Col>
                </Row>
            </Container>
        </GrilleBlogStc>
       
    )
}


export default GrilleBlog
