import {Row,Col} from 'reactstrap'
import PCard from "../PresentationCard";

const RowAccreditationSociete=(props)=>{
    if(props.type==1)
    {
        return (
            <Row className="my-2 my-md-3">
                <Col lg={6} md={6} className="align-self-center">
                    <h6 className="fw-bold">{props.texte}</h6>
                </Col>
                <PCard url1={props.url1} url2={props.url2} type={1}  />
            </Row>
        )
    }
    else
    {
     return (
            <Row className="my-2 my-md-3">
                <Col lg={12} md={12} className="align-self-center">
                    <h6 className="fw-bold">{props.texte}</h6>
                </Col>
                
            </Row>
        )
    }
}
export default RowAccreditationSociete;