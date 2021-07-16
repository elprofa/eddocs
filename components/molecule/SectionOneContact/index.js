import { Row, Col } from 'reactstrap';
import Title from '../../shared/Title';
import "bootstrap/dist/css/bootstrap.min.css";
import SectOneContactStc  from './SectOneContact.stc';
 

const SectOneContact = (props) => {


  return (
      <SectOneContactStc>
      <Row className=''>
          <Col md={12} className='text-center' >
            <div className='h-100 py-5'>
              <Title coulor="#000" 
              text__transform="text-capitalize"
              weight="300px" text={<span><strong>Comment</strong> Nous contactez ?</span>}/> 
                           
              </div>
            </Col>
        </Row>
      </SectOneContactStc>
  )
}

export default SectOneContact;