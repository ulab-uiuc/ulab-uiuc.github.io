import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const publications = [
  {
    key: "Graphrouter",
    title: "Research Town",
    authors:
      "Haofei Yu*, Zhaochen Hong*, Zirui Cheng*, Kunlun Zhu*, Keyang Xuan, Jinwei Yao, Tao Feng, Jiaxuan You",
    venue: "arXiv",
  },
  // Add more publications here
];

const Projects = React.forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <Container className="py-5">
      <h2 ref={ref} className="text-center mb-4">
        Projects
      </h2>
      <Row className="g-4">
        {publications.map((pub, index) => (
          <Col key={index} md={12}>
            <Card
              className="p-3 shadow-sm border-0"
              style={{ transition: "transform 0.3s", cursor: "pointer" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
              onClick={(e) => navigate("/projects/ResearchTown")}
            >
              <Card.Body>
                <Card.Title>{pub.title}</Card.Title>
                <Card.Text className="text-muted">{pub.authors}</Card.Text>
                <Card.Text className="fw-medium">{pub.venue}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
});

export default Projects;
