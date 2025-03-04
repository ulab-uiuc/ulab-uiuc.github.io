import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PeopleCard from "./PeopleCard";

import {
  principal_investigator,
  phd_students,
  ms_students,
  visiting_students,
  alumni,
} from "../config/People";

const People = React.forwardRef((props, ref) => {
  return (
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "3em",
        marginBottom: "3em",
      }}
    >
      {" "}
      <Container className="text-center">
        <h2 ref={ref}>People</h2>
      </Container>
      <h3
        style={{ textAlign: "center", marginTop: "1em", marginBottom: "1em" }}
      >
        Principal Investigator
      </h3>
      <Row className="g-4">
        {principal_investigator.map((student, index) => (
          <Col key={index} md={12} sm={6} xs={12}>
            <PeopleCard
              img={student.img}
              name={student.name}
              link={student.link}
              description={student.description}
            ></PeopleCard>
          </Col>
        ))}
      </Row>
      <Container>
        <h3
          style={{ textAlign: "center", marginTop: "1em", marginBottom: "1em" }}
        >
          {" "}
          Ph.D. Students
        </h3>
        <Row className="g-4">
          {phd_students.map((student, index) => (
            <Col key={index} md={3} sm={6} xs={12}>
              <PeopleCard
                img={student.img}
                name={student.name}
                link={student.link}
                description={student.description}
              ></PeopleCard>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h3
          style={{ textAlign: "center", marginTop: "1em", marginBottom: "1em" }}
        >
          M.S. Students
        </h3>
        <Row className="g-4">
          {ms_students.map((student, index) => (
            <Col key={index} md={3} sm={6} xs={12}>
              <PeopleCard
                img={student.img}
                name={student.name}
                link={student.link}
                description={student.description}
              ></PeopleCard>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h3
          style={{ textAlign: "center", marginTop: "1em", marginBottom: "1em" }}
        >
          Visiting Students
        </h3>
        <Row className="g-4">
          {visiting_students.map((student, index) => (
            <Col key={index} md={3} sm={6} xs={12}>
              <PeopleCard
                img={student.img}
                name={student.name}
                link={student.link}
                description={student.description}
              ></PeopleCard>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h3
          style={{ textAlign: "center", marginTop: "1em", marginBottom: "1em" }}
        >
          Alumni
        </h3>
        {alumni.map((student, index) => (
          <li key={index}>
            {student.link ? (
              <a href={student.link}>{student.name}</a>
            ) : (
              student.name
            )}
            , {student.description}{" "}
            {student.placement && (
              <>
                <i>(now {student.placement})</i>
              </>
            )}{" "}
          </li>
        ))}
      </Container>
    </div>
  );
});

export default People;
