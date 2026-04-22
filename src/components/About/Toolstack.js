import React from "react";
import { Col, Row } from "react-bootstrap";

// Icons
import { SiWindows, SiGooglechrome, SiVisualstudiocode, SiGooglecolab } from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Windows */}
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows size={40} />
        <div className="tech-icons-text">Windows 11</div>
      </Col>

      {/* Chrome */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome size={40} />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      {/* VS Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size={40} />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      {/* Google Colab */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab size={40} />
        <div className="tech-icons-text">Google Colab</div>
      </Col>

      {/* Terminal */}
      <Col xs={4} md={2} className="tech-icons">
        <FaTerminal size={40} />
        <div className="tech-icons-text">Terminal</div>
      </Col>

    </Row>
  );
}

export default Toolstack;