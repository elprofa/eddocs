import Head from 'next/head';
import { Row, Col, Container } from 'reactstrap';
import Title from '../../shared/Title';
import Trait from '../../shared/Trait';
import BannerStc  from './Banner.stc';
 

const BannerContact = (props) => {

  const TraitStc={
       
}


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