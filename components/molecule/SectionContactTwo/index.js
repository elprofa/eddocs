
import { Row, Col } from 'reactstrap';
import SectionContactTwoStc from './SectionContactTwo.stc';
import CardConractLM from '../CardContact_L2MI';CardConractLM
import CardCtzn from '../CardContact_AirMetropologie' 
 

const SectionContactTwo = (props) => {

  
  return (
      <SectionContactTwoStc>
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
      </SectionContactTwoStc>
  )
}

export default SectionContactTwo;
