import React from "react";
import { Col } from "reactstrap";

const index = ({ url, title }) => {
  return (
    <Col lg={2} className="text-center">
      <img src={url} className="mw-100 rounded-3" />
      <h6 className="text-center fw-bold">{title}</h6>
    </Col>
  );
};

export default index;
