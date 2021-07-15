
import { Row, Col } from 'reactstrap';
import Title from '../../shared/Title';
import SectionCmtNsContactezSt from './CmtNsCntctr.stc';
import Trait from '../../shared/Trait';
import Texte from '../../shared/Texte';
import { MdCheck } from 'react-icons/md';
import CardConractLM from '../CardContact_L2MI';CardConractLM
 

const SectionCmtNsContactez = (props) => {

  const TraitStc={
       
}
  return (
      <SectionCmtNsContactezSt>
      <Row className='section__ctn'>
          <Col lg={12} className="ranger" >
            <div className='content__one col-md-4 text-center'>
              <Title letGo={{texte:<span><strong>Comment </strong> Nous Contacter ?</span>,
                             style:{
                                color: "#000",
                                fontSize: "23px",
                                fontWeight: 100,
                             }
                        }} />
              <Trait letGo={{TraitStc,
                        style:{
                            width: "100%",}}}/>
              <Texte letGo={{texte:<p><span>Remplissez le formulaire ou contacter nous directement</span><br></br> <span>par Mail  ou sur notre</span><span className="txt__blue">  numéro client <MdCheck size={15} className="icnTxt__ctnt" color={"#f8f8f8"} /></span> </p>,
              style:{
                color: "#000",
                fontSize: "12px",
                fontWeight: 100,
                marginTop: ".9rem",
              }
            }} />
            </div>
          </Col>     
      </Row>
      </SectionCmtNsContactezSt>
  )
}

export default SectionCmtNsContactez;