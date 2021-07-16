import { Row, Col } from 'reactstrap';
import Title from '../../shared/Title';
import BannerStc  from './Banner.stc';
 

const BannerContact = (props) => {
       



  return (
      <BannerStc>
      <Row className=''>
          <Col md={12} className='text-center' >
            <div className='h-100 py-5'>
              <Title text="contactez Nous" />
              </div>
            </Col>
        </Row>
      </BannerStc>
  )
}

export default BannerContact;