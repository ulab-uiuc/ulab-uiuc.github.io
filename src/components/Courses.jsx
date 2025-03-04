import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { courses } from "../config/Courses";

const Courses = React.forwardRef((props, ref) => {
  return (
    <Container className="py-5">
      <h2 ref={ref} className="text-center mb-4">
        Courses
      </h2>
      <Col md={10} className="mx-auto">
        <Row className="g-4">
          {courses.map((course) => (
            <Col key={course.key} md={12}>
              <Card
                className="p-3 shadow-none"
                style={{
                  transition: "transform 0.3s",
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={() => window.open(course.website, "_blank")}
              >
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {course.description}
                  </Card.Text>
                  <a
                    href={course.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {courses.length === 0 && (
            <Col>
              <div className="text-center text-muted py-4">
                No courses available.
              </div>
            </Col>
          )}
        </Row>
      </Col>
    </Container>
  );
});

export default Courses;
