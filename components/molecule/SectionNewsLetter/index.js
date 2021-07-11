import { Row, Col, Container } from 'reactstrap';
import Title from '../../shared/Title';
import SectionNwsLtrtStc from './SectNwsltr.stc';
import Texte from '../../shared/Texte';
import Input from '../../shared/Input';
import {theme} from '../../../theme';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
 

const SectionNwsLtr = (props) => {

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
      <SectionNwsLtrtStc>
          <Container fluid>
      <Row>
          <Col lg={3}>
          
          </Col>
          <Col lg={6} className="lettre">
            <div className='content__newsletter'>
              <Title letGo={{texte:<p>Abonnez Vous a  <strong>Notre Newsletter</strong></p>,
                             style:{
                                color: "#fff",
                                fontSize: "26px",
                                fontWeight: 100,
                             }
                        }} />
              <Trait letGo={TraitStc}/>
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
          <Col lg={3}>
              
          </Col>     
      </Row>

      <Row>
          <Col lg={3}>

          </Col>
          <Col lg={6} className="lettre">
            <div className='col-md-10 content__btnnewsletter'>
            <Input className='inpt mr-4' letGo={{
                            style:{
                                
                                marginTop:theme.margins.KingParagraphe
                            },
                            placeholder:"email@email.com",


                        }} />{' '}
                        <Button letGo={{
                            texte:"Soumettre",
                            style:{
                                backgroundImage: "linear-gradient(to right, rgb(101 143 222) , rgb(195 65 95))",
                                fontSize:theme.font.p,
                                border:0
                            }
                        }} />
            </div>
          </Col> 
          <Col lg={3}>
              
          </Col>     
      </Row>
      </Container>
      </SectionNwsLtrtStc>
  )
}

export default SectionNwsLtr;