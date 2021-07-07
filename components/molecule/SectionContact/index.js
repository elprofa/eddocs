import Head from 'next/head';
import { Row, Col, Container } from 'reactstrap';
import Example from '../FormContact';
import CardCtzn from '../CardContactezNous';
import Title from '../../shared/Title';
import SectContactStc from './SectContact.stc';
import Trait from '../../shared/Trait';
 

const SectionContact = (props) => {

  const TraitStc={
       
}
  return (
      <SectContactStc>
      <Row>
          <Col lg={6} >
            <div className='content__one'>
              <Title letGo={{texte:<span><strong>Comment </strong> Nous Contacter ?</span>,
                             style:{
                                color: "#000",
                                fontSize: "23px",
                                fontWeight: 100,
                             }
                        }} />
              <Trait letGo={TraitStc}/><br></br>
              
              <CardCtzn />
            </div>
          </Col>

          <Col lg={6} className='content__two'>
            <Example /> 
          </Col>       
      </Row>
      </SectContactStc>
  )
}

export default SectionContact;