import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Media.jpg";
import emotion from "../../Assets/Projects/edu.png";
import editor from "../../Assets/Projects/AI_data_analysis.png";
import chatify from "../../Assets/Projects/Smart-Job-Resume.png";
import suicide from "../../Assets/Projects/weather.png";
import bitsOfCode from "../../Assets/Projects/pdf_extraction.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Smart-Job-Resume"
              description="CareerAscend AI is an AI-powered career platform that analyzes resumes, provides ATS scores with improvement tips, and matches users with relevant jobs.Built using React.js, Tailwind CSS, and Gemini AI, it helps professionals optimize profiles and find personalized opportunities from top companies.
"
              ghLink="https://github.com/sukadha/ResumeRise---Smart-Job-Resume-Optimization"
              demoLink="https://resume-rise-smart-job-resume-optimi.vercel.app/upload"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Smart_Document_Reader"
              description="Built a full-stack app that extracts text from PDFs, DOCX, images (OCR), and TXT files — then auto-generates summaries and quiz questions. Stack: React + Tailwind CSS + pdf.js + Tesseract.js + Mammoth.js. All processing runs client-side with zero API dependency."
              ghLink="https://github.com/sukadha/Note-Explorer-Smart-Document-Reader"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI-Data-Analyst-Assistant"
              description="A powerful web application that converts CSV data into meaningful insights using AI-driven analysis, offering automated summaries, trend detection, and smart recommendations. It features dynamic visualizations, advanced filtering, and an intuitive interface, enabling users to explore data efficiently and make faster, data-driven decisions without requiring deep technical expertise."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Heart Disease Risk Prediction System"
              description="Developed an AI-powered Heart Disease Risk Prediction web app using React.js and a custom-built KNN algorithm to analyze 12 clinical parameters and predict risk with real-time confidence scoring. Features include CSV data upload, interactive medical input form, and a responsive UI with visual indicators and clinical recommendations."
              ghLink="https://github.com/sukadha/Heart_Disease_Prediction"
              demoLink="https://heart-disease-prediction-os8f.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Weather Data Analysis Dashboard"
              description="A comprehensive React-based web application designed to analyze weather data from major cities worldwide, showcasing a complete data pipeline from preprocessing and analysis to visualization. It enables users to explore climate patterns, compare city-wise weather trends, and gain actionable insights through interactive charts and intuitive data representations."
              ghLink="https://github.com/sukadha/weather_report_reactjs"
              demoLink="https://weather-report-reactjs-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="EduFin_Path"
              description="Our platform empowers students with financial literacy and education loan guidance to help them achieve their academic aspirations. We provide online courses, e-books, webinars, and certification programs designed to deliver practical knowledge. With strategic financial support tools, learners can plan better and reduce the stress of educational expenses. The hub also connects students with resources, expert insights, and personalized assistance for their journey"
              ghLink="https://github.com/sukadha/EduFinPath"
              demoLink="https://drive.google.com/file/d/1oD2kI9BNrUAYALvQDhZ_UuCjxvqLOitF/view"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
