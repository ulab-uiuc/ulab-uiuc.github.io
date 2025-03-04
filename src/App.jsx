import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import MainBody from "./components/MainBody.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import GetInTouch from "./components/GetInTouch.jsx";
import People from "./components/People.jsx";
import Publications from "./components/Publications.jsx";
import Courses from "./components/Courses.jsx";
import Gallery from "./components/Gallery.jsx";
import About from "./components/About.jsx";
import PublicationDetails from "./components/PublicationDetails.jsx";

const Home = React.forwardRef((props, ref) => {
  const location = useLocation();

  const getDynamicContent = () => {
    const routeMapping = {
      "/about": <About />,
      "/people": <People />,
      "/publications": <Publications />,
      "/courses": <Courses />,
      "/gallery": <Gallery />,
    };

    return routeMapping[location.pathname] || <About />;
  };

  return (
    <>
      <MainBody ref={ref} />
      {getDynamicContent()}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
      <Navbar ref={titleRef} />
      <Routes>
        <Route path="/" element={<Home ref={titleRef} />} />
        <Route path="/about" element={<Home ref={titleRef} />} />
        <Route path="/people" element={<Home ref={titleRef} />} />
        <Route path="/publications" element={<Home ref={titleRef} />} />
        <Route
          path="/publications/:publicationName"
          element={<PublicationDetails ref={titleRef} />}
        />
        <Route path="/courses" element={<Home ref={titleRef} />} />
        <Route path="/gallery" element={<Home ref={titleRef} />} />
      </Routes>
      <Footer>
        <GetInTouch />
      </Footer>
    </BrowserRouter>
  );
};

export default App;
