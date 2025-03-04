import React from "react";
import { Image } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const PeopleCard = React.forwardRef(({ img, name, link, description }, ref) => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src={img ? img : require("../assets/general/logo.png")}
        alt="profilepicture"
        roundedCircle
        style={{
          width: "10em",
          height: "10em",
          objectFit: "cover",
        }}
        className="border border-secondary mt-2 mb-2"
      />
      <div className="lead mt-2 mb-2">
        {link ? <a href={link}>{name}</a> : name}
      </div>
      {description && (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
      )}
    </div>
  );
});

export default PeopleCard;
