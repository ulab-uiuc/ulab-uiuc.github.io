import React from "react";
import { Container, Carousel } from "react-bootstrap";

import { gallery } from "../config/Gallery";

const Gallery = React.forwardRef((props, ref) => {
  return (
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "3em",
        marginBottom: "3em",
      }}
    >
      <Container className="py-5">
        <h2 ref={ref} className="text-center mb-4">
          Gallery
        </h2>
      </Container>
      <Carousel>
        {gallery.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.alt}
              style={{ maxHeight: "600px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h5>{image.caption}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
});

export default Gallery;
