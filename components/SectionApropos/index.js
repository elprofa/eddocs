import React from "react";
import { Container, Row, Col } from "reactstrap";
import NewTitle from "../shared/NewTitle";

const SectionApropos = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} className="text-center">
            <NewTitle
              partOne="A propos d'"
              partTwo="Air métrologie"
              number={1}
            />
          </Col>
          <Col md={6} className="text-center">
            photo
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionApropos;
