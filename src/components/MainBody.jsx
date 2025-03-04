import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef((props, ref) => {
  return (
    <Jumbotron
      fluid
      id="home"
      style={{
        background: `url(${require("../assets/general/siebel.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "15em",
      }}
    >
      {/* <div id="stars"></div> */}
      <Container className="text-center">
        <h2 ref={ref} className="display-2" style={{ color: "white" }}>
          <b>U Lab</b>
        </h2>
        <div className="lead typist" style={{ color: "white" }}>
          University of Illinois Urbana-Champaign
        </div>
      </Container>
    </Jumbotron>
  );
});

export default MainBody;
