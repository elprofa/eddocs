import React from "react";
import { Col } from "reactstrap";

const index = ({ url, title }) => {
  return (
    <Col className="text-center">
      <img src={url} />
      <h6 className="text-center fw-bold">{title}</h6>
    </Col>
  );
};

export default index;
