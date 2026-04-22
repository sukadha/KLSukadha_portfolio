import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">
                  {" "}
                  Data Science and Frontend Developer{" "}
                </b>passionate about building data-driven solutions 
              and intuitive user interfaces. Over time, I’ve explored various technologies and developed a 
              strong passion for building high-performance models and scalable AI applications.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Machine Learning, Deep Learning, NLP, React js and Generative AI{" "}
                </b>
              </i>
              — and I enjoy working across the full AI development lifecycle, from data preprocessing to model deployment.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  predictive systems, AI agents, and deep learning models,{" "}
                </b>
              </i>
              as well as exploring advanced techniques like LLMs and Retrieval-Augmented Generation (RAG).
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> modern AI frameworks </b> tools such as TensorFlow, PyTorch, and real-world datasets{" "}
              <i>
                <b className="purple">to create impactful, data-driven solutions.</b> 
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
