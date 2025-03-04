import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { about, highlights, news, impacts } from "../config/About";
import { useNavigate } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const LocationMap = () => {
  return (
    <Card className="w-full max-w-4xl">
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.4890985135537!2d-88.22755822359845!3d40.10510637933033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd756e540a58d%3A0x10ecb5bb108fd52a!2sUniversity%20of%20Illinois%20Computer%20Science%20Department!5e0!3m2!1sen!2sus!4v1709574789123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md"
        />
      </div>
    </Card>
  );
};

const About = React.forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "3em",
        marginBottom: "3em",
      }}
      ref={ref}
    >
      <Container
        style={{
          marginTop: "1.5em",
          marginBottom: "1.5em",
        }}
      >
        <h3>About</h3>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{about}</ReactMarkdown>
      </Container>
      <Container
        style={{
          marginTop: "1.5em",
          marginBottom: "1.5em",
        }}
      >
        <h3>Highlights</h3>
        <Row>
          {highlights.map((highlight, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="mb-3">{highlight.title}</Card.Title>
                  <Card.Text>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {highlight.description}
                    </ReactMarkdown>
                  </Card.Text>
                  {highlight.projects.length > 0 ? (
                    <div className="mt-3">
                      <strong>Key Projects:</strong>
                      <div className="d-flex flex-wrap mt-2">
                        {highlight.projects.map((project, techIndex) => (
                          <span className="badge bg-primary me-2 mb-2">
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container
        style={{
          marginTop: "1.5em",
          marginBottom: "1.5em",
        }}
      >
        <h3>News</h3>
        <ul>
          {news.map((item, index) => (
            <li key={index} style={{ listStyleType: "disc" }}>
              <div
                style={{
                  display: "inline-flex",
                  gap: "2em",
                }}
              >
                <span style={{ fontWeight: "bold" }}>({item.time})</span>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {item.event}
                </ReactMarkdown>
              </div>
            </li>
          ))}
        </ul>
      </Container>
      <Container
        style={{
          marginTop: "1.5em",
          marginBottom: "1.5em",
        }}
      >
        <h3>Impacts</h3>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{impacts}</ReactMarkdown>
      </Container>
      <Container
        style={{
          marginTop: "1.5em",
          marginBottom: "1.5em",
        }}
      >
        <h3>Contact</h3>
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <div>
              <p>
                <strong>
                  Thomas M. Siebel School of Computing and Data Science
                </strong>
                <br />
                University of Illinois at Urbana-Champaign
                <br />
                201 N Goodwin Ave
                <br />
                Urbana, IL 61801
              </p>
              <p>
                <strong>Email:</strong> jiaxuan@illinois.edu
              </p>
            </div>
          </Col>
          <Col md={6}>
            <LocationMap />
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default About;
