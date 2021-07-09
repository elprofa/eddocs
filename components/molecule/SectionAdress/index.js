import { Row, Col, Container } from 'reactstrap';
import Title from '../../shared/Title';
import SectionAdressStc from './SectionAdress.stc';
import Texte from '../../shared/Texte';
import {theme} from '../../../theme';
import Trait from '../../shared/Trait';
import CardAdress from '../CardAdress';

const SectionAdress = (props) => {

    const letGo={
        style:{
            letterSpacing:'0px !important',
            
            color:theme.colors.white,
            fontWeight:theme.Poid.paragraphe,
            fontFamily:theme.font.headingFont,
        }
    }

    const TraitStc={
       
        style:{
            marginTop:theme.margins.KingParagraphe,
            marginBottom:theme.margins.KingParagraphe,
        }
    }    
  return (
      <SectionAdressStc>
          <Container fluid>
      <Row>
          <Col lg={6} className="lettre">
            <div className='content__map'>
              <Title letGo={{texte:<span><strong>Map ici </strong> Notre Newsletter</span>,
                             style:{
                                color: "#fff",
                                fontSize: "46px",
                                fontWeight: 100,
                             }
                        }} />
              <br></br>
              <Texte letGo={{texte:<p><span>Recevez tous les jours des informations sur nos nouvelles </span><br></br> <span>offres et opportunités </span> </p>,
              style:{
                color: "#fff",
                fontSize: "16px",
                fontWeight: 400,
                textAlign: "center",
              }
            }} />
            </div>
          </Col> 
          <Col lg={6}>
            <CardAdress />
          </Col>     
      </Row>
      </Container>
      </SectionAdressStc>
  )
}

export default SectionAdress;