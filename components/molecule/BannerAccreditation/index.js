import { Row, Col } from 'reactstrap';
import Title from '../../shared/Title';
import Trait from '../../shared/Trait';
import BannerAccStc  from './BannerAcc.stc';
 

const BannerAcc = (props) => {

  const TraitStc={
       
}


  return (
      <BannerAccStc>
      <Row className=''>
          <Col lg={12} className='banner' >
            <div className='conten col-md-3 mt-5 ml-0 mr-0 '>
              <Title letGo={{texte:<span><strong>Nos Accréditations</strong></span>,
                             style:{
                                color: "#fff",
                                fontSize: "32px",
                                fontWeight: 700,
                                textAlign: "center",
                                //with: ,
                             }
                        }} />
              <Trait letGo={TraitStc}/><br></br>
              </div>
            </Col>
        </Row>
      </BannerAccStc>
  )
}

export default BannerAcc;