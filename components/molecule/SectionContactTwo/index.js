import { Row, Col } from "reactstrap";
import SectionContactTwoStc from "./SectionContactTwo.stc";
import CardConractLM from "../CardContact_L2MI";
CardConractLM;
import CardCtzn from "../CardContact_AirMetropologie";

const SectionContactTwo = (props) => {
  return (
    <SectionContactTwoStc>
      <Row className="mb-5">
        <CardCtzn />
        <CardConractLM />
      </Row>
    </SectionContactTwoStc>
  );
};

export default SectionContactTwo;
