import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver.jsx";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "./migration.jsx";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand
        className={`${!isTop ? "brand" : "brand-white"}`}
        href={process.env.PUBLIC_URL + "/"}
      >
        U Lab@UIUC
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          <NavLink
            href={process.env.PUBLIC_URL + "/about"}
            className={`${!isTop ? "brand" : "brand-white"}`}
          >
            About
          </NavLink>
          <NavLink
            href={process.env.PUBLIC_URL + "/people"}
            className={`${!isTop ? "brand" : "brand-white"}`}
          >
            People
          </NavLink>
          <NavLink
            href={process.env.PUBLIC_URL + "/publications"}
            className={`${!isTop ? "brand" : "brand-white"}`}
          >
            Publications
          </NavLink>
          <NavLink
            href={process.env.PUBLIC_URL + "/courses"}
            className={`${!isTop ? "brand" : "brand-white"}`}
          >
            Courses
          </NavLink>
          <NavLink
            href={process.env.PUBLIC_URL + "/gallery"}
            className={`${!isTop ? "brand" : "brand-white"}`}
          >
            Gallery
          </NavLink>
          <NavLink
            target="_blank"
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSeuTiUwprmkT9skyq6RFAqu981KcNBoa2UPsquYnR27lGvUzA/viewform?usp=sf_link"
            }
            className={`${!isTop ? "brand" : "brand-white"}`}
          >
            Apply
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
