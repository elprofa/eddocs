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
          <Col lg={12} className='banner' >
            <div className='conten col-md-3 mt-5 ml-5 mr-5 '>
              <Title letGo={{texte:<span><strong> CONTACTEZ-NOUS  </strong></span>,
                             style:{
                                color: "#fff",
                                fontSize: "32px",
                                fontWeight: 700,
                                textAlign: "center",
                             }
                        }} />
              <Trait letGo={TraitStc}/><br></br>
              </div>
            </Col>
        </Row>
      </BannerStc>
  )
}

export default BannerContact;