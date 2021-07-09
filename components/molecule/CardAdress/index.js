import Head from 'next/head';
import { Row, Col, Container } from 'reactstrap';
import Title from '../../shared/Title';
import Trait from '../../shared/Trait';
import Texte from '../../shared/Texte';
import CardAdressStc  from './CardAdress.stc';
 

const CardAdress = (props) => {

  const TraitStc={
       
}
  return (
      <CardAdressStc>
      <Row className=''>
          <Col lg={6} >
            <div className=''>
              <Title letGo={{texte:<span> Notre <strong>adresses ? </strong></span>,
                             style:{
                                color: "#000",
                                fontSize: "23px",
                                fontWeight: 100,
                             }
                        }} />
              <Trait letGo={TraitStc}/><br></br>
              <Texte letGo={{texte:
                        <p><span>Adresse Siège: </span></p>,
              style:{
                color: "000",
                fontSize: "20px",
                fontWeight: 100,
              }
            }} />
            <Texte letGo={{texte:
                        <p><span>Bd Chefchaouni KM 8.5 Porte B, 1 er Etage Appt3</span>
                           <span>Ain Sebâa - Casablanca</span></p>,
              style:{
                color: "000",
                fontSize: "16px",
                fontWeight: 100,
              }
            }} />
            </div>
          </Col>

          <Col lg={6} className='content__two'>
          </Col>       
      </Row>
      </CardAdressStc>
  )
}

export default CardAdress;