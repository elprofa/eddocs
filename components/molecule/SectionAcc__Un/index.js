import { Row, Col, Container } from 'reactstrap';
import Title from '../../shared/Title';
import SectionAccUnStc from './sectionAccUn.stc';
import Trait from '../../shared/Trait';
import Texte from '../../shared/Texte';
import { MdCheck } from 'react-icons/md';
import CardConractLM from '../CardContact_L2MI';CardConractLM
 

const SectionAccOne = (props) => {

  const TraitStc={
       
}
  return (
      <SectionAccUnStc>
        <Container className="mr-3 ml-3">
      <Row className='sectionOnes'>
            <div className='content__one col-md-12 text-center'>
            <Col lg={3} className="ranger" >
              <Title letGo={{texte:<span><strong>Nos </strong> Accréditations</span>,
                             style:{
                                color: "#000",
                                fontSize: "23px",
                                fontWeight: 100,
                             }
                        }} />
              <Trait letGo={TraitStc}/>
              </Col>
              <Col lg={12} className="ranger__text">
              <Texte letGo={{texte:<p>Lola Bouvier, 25 years old, fallen figure skating star with an oversized ego, decides to become "the greatest roller derby champion of all times" by integrating, in spite of herself, one of the worst teams in France: the Cannibal Licornes.<br></br> par Mail  ou sur notre numéro client.</p>,
              style:{
                color: "000",
                fontSize: "12px",
                fontWeight: 100,
                marginTop: ".9rem",
              }
            }} />
            </Col> 
            </div>    
      </Row>
      </Container>
      </SectionAccUnStc>
  )
}

export default SectionAccOne;