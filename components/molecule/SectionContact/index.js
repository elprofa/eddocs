import Head from 'next/head'
import { Row, Col, Container } from 'reactstrap'
import Example from '../FormContact'
import CardCtzn from '../CardContactezNous'


const SectionContact = (props) => {
  return (
      <Container>
      <Row>
          <Col lg={6}>
            <CardCtzn />
          </Col>

          <Col lg={6}>
            <Example /> 
          </Col>       
      </Row>
      </Container>
  )
}

export default SectionContact;