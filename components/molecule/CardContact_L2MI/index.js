import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardConractLMStc from './ContactL2mi.stc';
import Title from '../../shared/Title';
import Image from '../../shared/Image';
import Texte from '../../shared/Texte';


const CardConractLM = (props) => {
    const { bg } = props;
  return (
    <CardConractLMStc bg={"#b7cac8"}>
        <Container>
            <Row>
                <Col lg={12} className="d-flex justify-content-center">
                    <Image letGo={{src:"/img/go.png"}} />
                </Col>
            </Row>
            <Row>
                <label> </label>
            </Row>
            
            <Row>
                <Col lg={12}>
                    <Texte letGo={{
                           texte:"Siège:",
                           style: {
                               textAlign:"center",
                               color: "#000",
                               marginTop: "20px",
                               fontWeight: 400,
                               fontSize: "18px",
                           }
                       }} />
                       <Texte letGo={{
                           texte:"Lot Asta Immeuble A 4eme Etage N° 15 & 16    Bd-Chefchaouni,",
                           style: {
                               textAlign:"center",
                               color: "#000",
                               fontWeight: 400,
                               fontSize: "19px",
                           }
                    }} />
                    <Texte letGo={{
                           texte:"Aîn Sebâa - Casablanca",
                           style: {
                               textAlign:"center",
                               color: "#000",
                               fontWeight: 400,
                               fontSize: "19px",
                           }
                    }} />

                    <Texte letGo={{
                           texte:"Laboratoire Casablanca: N°12 & 14 Lotissement MAURITANIA Q.I SIDI BERNOUSSI - Casablanca MAROC",
                           style: {
                               textAlign:"center",
                               color: "#000",
                               fontWeight: 400,
                               fontSize: "18px",
                           }
                    }} />
                </Col>
            </Row>
            <Row>
                <Col lg={3}></Col>
                <Col lg={6}>           
                    <Texte letGo={{
                           texte:"Laboratoire Tanger: TFZ LT 38C, ET1, BU20 90000 - Tanger",
                           style: {
                               textAlign:"center",
                               color: "#000",
                               marginTop: "0px",
                               fontWeight: 400,
                               fontSize: "18px",
                           }
                       }} />
                </Col>  
                <Col lg={3}></Col>
            </Row>
            <Row>
            <Col lg={12}>
                       <Texte letGo={{
                           texte:"Tél: +212 522 357 756 / +212 522 344 541",
                           style: {
                               textAlign:"center",
                               color: "#000",
                               marginTop: "0px",
                               fontWeight: 400,
                               fontSize: "18px",
                           }
                       }} />
                       <Texte letGo={{
                           texte:"l2mi.contact@groupe-airmetrologie-l2mi.com",
                           style: {
                               textAlign:"center",
                               color: "#000",
                               fontWeight: 400,
                               fontSize: "18px",
                           }
                       }} />
                </Col>
            </Row>
        </Container>    
    </CardConractLMStc>
  );
}
export default CardConractLM;