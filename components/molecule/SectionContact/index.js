
import Head from 'next/head';
import { Row, Col, Container } from 'reactstrap';
import SectContactStc from './SectContact.stc';
import CardConractLM from '../CardContact_L2MI';CardConractLM
import CardCtzn from '../CardContact_AirMetropologie' 
 

const SectionContact = (props) => {

  const TraitStc={
       
}
  return (
      <SectContactStc>
      <Row className='section__ctn'>
          <Col lg={6} >
            <div className='ranger__Un'>
              <CardCtzn />
            </div>
          </Col>

          <Col lg={6} className='ranger__Deux'>
            <CardConractLM /> 
          </Col>    
      </Row>
      </SectContactStc>
  )
}

export default SectionContact;
