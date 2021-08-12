import {Row,Col} from 'reactstrap'

const RowAccreditationSociete=(props)=>{
    return (
        <Row className="my-2 my-md-3">
            <Col lg={6} md={6} className="align-self-center">
                <h6 className="fw-bold">{props.texte}</h6>
            </Col>
            <Col lg={6} md={6} className="">
                <img src={props.url1} height="100" className="mx-2" />
                <img src={props.url2} className="mx-2"  />
            </Col>
        </Row>
    )
}
export default RowAccreditationSociete;