import React from "react";
import { Col, Row } from "react-bootstrap";

// React Icons
import { DiPython, DiJava, DiJavascript1, DiReact } from "react-icons/di";
import { SiCplusplus, SiHtml5, SiCss3, SiNodedotjs } from "react-icons/si";
import { SiTensorflow, SiPytorch, SiOpencv } from "react-icons/si";
import { SiMysql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "50px" }}>

      {/* Programming */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython size={40} />
        <div>Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava size={40} />
        <div>Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus size={40} />
        <div>C/C++</div>
      </Col>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 size={40} />
        <div>HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 size={40} />
        <div>CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 size={40} />
        <div>JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact size={40} />
        <div>React.js</div>
      </Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs size={40} />
        <div>Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql size={40} />
        <div>MySQL</div>
      </Col>

      {/* AI / ML */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow size={40} />
        <div>TensorFlow</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch size={40} />
        <div>PyTorch</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv size={40} />
        <div>OpenCV</div>
      </Col>

    </Row>
  );
}

export default Techstack;