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
            <div className='conten col-md-3 mt-5'>
              <Title letGo={{texte:<p><strong>CONTACTEZ-NOUS</strong></p>,
                             style:{
                                color: "#fff",
                                fontSize: "32px",
                                fontWeight: 700,
                                textAlign: "justify-center",
                                with: "100%",
                                //with: ,
                             }
                        }} />
              <Trait letGo={{TraitStc,
                        style:{
                            width: "15rem",}}}/><br></br>
              </div>
            </Col>
        </Row>
      </BannerStc>
  )
}

export default BannerContact;