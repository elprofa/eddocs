import {Row,Col} from 'reactstrap'
import PCard from "../PresentationCard";
import RowAccreditationSocieteStc from './RowAccreditationSociete.stc'
const RowAccreditationSociete=(props)=>{
    if(props.type==1)
    {
        return (
            <RowAccreditationSocieteStc className="my-2 my-md-3">
                <Col lg={6} md={6} className="align-self-center">
                    <h6 className="fw-bold">{props.texte}</h6>
                </Col>
                <PCard url1={props.url1} url2={props.url2} type={1}  />
            </RowAccreditationSocieteStc>
        )
    }
    else
    {
     return (
            <RowAccreditationSocieteStc className="my-2 my-md-3">
                <Col lg={12} md={12} className="align-self-center">
                    <h6 className="fw-bold">{props.texte}</h6>
                </Col>
                
            </RowAccreditationSocieteStc>
        )
    }
}
export default RowAccreditationSociete;