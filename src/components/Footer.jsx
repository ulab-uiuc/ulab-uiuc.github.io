import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        Copyright © U Lab@UIUC
        <p>
          <small className="text-muted">
            Developed by <a href="https://chengzr01.github.io/">Zirui Cheng</a>
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
