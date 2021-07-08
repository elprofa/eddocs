import Head from 'next/head';
import { Row, Col, Container } from 'reactstrap';
import Example from '../FormContact';
import CardCtzn from '../CardContactezNous';
import Title from '../../shared/Title';
import SectContactStc from './SectContact.stc';
import Trait from '../../shared/Trait';
import Texte from '../../shared/Texte';
import { MdCheck } from 'react-icons/md';
 

const SectionContact = (props) => {

  const TraitStc={
       
}
  return (
      <SectContactStc>
      <Row>
          <Col lg={6} >
            <div className='content__one'>
              <Title letGo={{texte:<span><strong>Comment </strong> Nous Contacter ?</span>,
                             style:{
                                color: "#000",
                                fontSize: "23px",
                                fontWeight: 100,
                             }
                        }} />
              <Trait letGo={TraitStc}/><br></br>
              <Texte letGo={{texte:<p><span>Remplissez le formulaire ou contacter nous directement</span><br></br> <span>par Mail  ou sur notre</span><span className="txt__blue">  numéro client <MdCheck size={15} className="icnTxt__ctnt" color={"#f8f8f8"} /></span> </p>,
              style:{
                color: "000",
                fontSize: "16px",
                fontWeight: 100,
              }
            }} />
              
              <CardCtzn />
            </div>
          </Col>

          <Col lg={6} className='content__two'>
            <Example /> 
          </Col>       
      </Row>
      </SectContactStc>
  )
}

export default SectionContact;