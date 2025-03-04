import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { publications } from "../config/Publications";

const Publications = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  const allTags = [...new Set(publications.flatMap((pub) => pub.tags))];

  const [selectedTags, setSelectedTags] = useState([]);

  const filteredPublications =
    selectedTags.length > 0
      ? publications.filter((pub) =>
          // Check if ALL selected tags are present in the publication
          selectedTags.every((selectedTag) => pub.tags.includes(selectedTag))
        )
      : publications;

  const handleTagToggle = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  return (
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "3em",
        marginBottom: "3em",
      }}
    >
      <h2 ref={ref} className="text-center mb-4">
        Publications
      </h2>
      <Row>
        <Col md={2} className="border-end pe-4">
          <p className="lead">Topics</p>
          <div className="d-flex flex-column">
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={"outline-secondary"}
                className="mb-2 text-start"
                onClick={() => handleTagToggle(tag)}
              >
                {tag}
                {selectedTags.includes(tag) && " ✓"}
              </Button>
            ))}
          </div>
        </Col>

        <Col md={10}>
          <Row className="g-4">
            {filteredPublications.map((pub) => (
              <Col key={pub.key} md={12}>
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
                  onClick={() => navigate(`/publications/${pub.key}`)}
                >
                  <Card.Body>
                    <Card.Title>{pub.title}</Card.Title>
                    <Card.Text className="text-muted">{pub.authors}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <Card.Text className="fw-medium mb-0">
                        {pub.venue}
                      </Card.Text>
                      <Card.Text className="text-muted mb-0">
                        {pub.year}
                      </Card.Text>
                    </div>
                    {pub.tags && (
                      <div className="mt-2">
                        {pub.tags.map((tag) => (
                          <span key={tag} className="badge bg-primary me-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {filteredPublications.length === 0 && (
              <Col>
                <div className="text-center text-muted py-4">
                  No publications match the selected tags.
                </div>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
});

Publications.displayName = "Publications";
export default Publications;
