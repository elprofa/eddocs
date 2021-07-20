import { Row, Col, Container } from 'reactstrap';
import Title from '../../shared/Title';
import SectionAdressStc from './SectionAdress.stc';
import Texte from '../../shared/Texte';
import {theme} from '../../../theme';
import CardAdress from '../CardAdress';
import SimpleMap from '../mapGoogle';

const SectionAdress = (props) => {

    const letGo={
        style:{
            letterSpacing:'0px !important',
            
            color:theme.colors.white,
            fontWeight:theme.Poid.paragraphe,
            fontFamily:theme.font.headingFont,
        }
    }

   
  return (
      <SectionAdressStc>
          <Container fluid>
      <Row>
          <Col lg={6} className="lettre">
            <div className='content__map'>
              <SimpleMap />
            </div>
          </Col> 

          <Col lg={6} className='content'>
            <div className='content__adress'>
              <CardAdress />
            </div>
          </Col>     
      </Row>
      </Container>
      </SectionAdressStc>
  )
}

export default SectionAdress;