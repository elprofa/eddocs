import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardCtznStc from './CardCtzn.stc';
import Image from '../../shared/Image';
import Texte from '../../shared/Texte';


const CardCtzn = (props) => {
    const { bg } = props;
  return (
    <CardCtznStc bg={"#b7cac8"}>
        <Container>
            <Row>
                <Col lg={12} className="d-flex justify-content-center">
                    <Image letGo={{src:"/img/lo.png"}} />
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
                           texte:"Bd Chefchaouni KM 8.5 Porte B, 1 er Etage Appt 3",
                           style: {
                            textAlign:"center",
                            color: "#000",
                            fontWeight: 400,
                            fontSize: "18px",
                        }
                 }} />
                 <Row>
                    <label> </label>
                </Row>
                 <Texte letGo={{
                           texte: "Aîn Sebâa – Casablanca",
                           style: {
                               textAlign:"center",
                               color: "#000",
                               marginTop: "20px",
                               fontWeight: 400,
                               fontSize: "18px",
                           }
                       }} />

                       <Texte letGo={{
                           texte:"Laboratoire Casablanca: N°12 Lotissement MAURITANIA Q.I SIDI BERNOUSSI - Casablanca MAROC",
                           style: {
                               textAlign:"center",
                               color: "#000",
                               fontWeight: 400,
                               fontSize: "18px",
                           }
                    }} />
                </Col><br></br>
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
                           texte:"Tél: +212 522 356 003 / +212 522 352 744",
                           style: {
                               textAlign:"center",
                               color: "#000",
                               marginTop: "0px",
                               fontWeight: 400,
                               fontSize: "18px",
                           }
                       }} />
                       <Texte letGo={{
                           texte:"am.contact@groupe-airmetrologie-l2mi.com",
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
    </CardCtznStc>
  );
}
export default CardCtzn;