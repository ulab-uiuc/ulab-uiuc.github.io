// ./components/home/ProjectDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import {
  Container,
  Row,
  Col,
  Table,
  Figure,
  Ratio,
  Card,
} from "react-bootstrap";
import { Jumbotron } from "./migration";
import { FileText, Github, Twitter, Mail, ClipboardCopy } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkBreaks from "remark-breaks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy as codeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

import { publications } from "../config/Publications";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PublicationDetails = React.forwardRef((props, ref) => {
  const { publicationName } = useParams();
  const publication = publications.find((pub) => pub.key === publicationName);

  const [markdownContent, setMarkdownContent] = useState("");
  const [bibContent, setBibContent] = useState("");

  useEffect(() => {
    const importMarkdownFile = () => {
      const markdownFile = publication.files.markdown;

      fetch(markdownFile)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then((text) => {
          setMarkdownContent(text);
        })
        .catch((err) => {
          console.error("Error loading markdown:", err);
        });
    };

    const importBibFile = () => {
      try {
        const bibFile = publication.files.bib;

        fetch(bibFile)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.text();
          })
          .then((text) => {
            setBibContent(text);
          })
          .catch((err) => {
            console.error("Error loading markdown:", err);
          });
      } catch (err) {
        console.error("Error importing markdown:", err);
      }
    };

    importMarkdownFile();
    importBibFile();
  }, []);

  const imageContext = require.context(
    "../assets/publications/yu2024researchtown/",
    false,
    /\.(png|jpe?g|gif|svg|pdf)$/
  );

  const ImageRendererWithContext = ({ src, alt, title }) => {
    try {
      const localImageSrc = imageContext(`${src}`);
      return (
        <Figure className="text-center">
          <img
            src={localImageSrc}
            alt={alt}
            className="markdown-image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          {title && (
            <Figure.Caption>
              <i>{title}</i>
            </Figure.Caption>
          )}
        </Figure>
      );
    } catch (err) {
      console.error(`Error loading image with context: ${src}`, err);
      return <span>Image not found: {src}</span>;
    }
  };

  const TableRenderer = ({ children }) => (
    <div className="table-responsive">
      <Table striped bordered hover responsive>
        {children}
      </Table>
    </div>
  );

  const CodeRenderer = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : "text";

    if (inline) {
      return (
        <code
          className="bg-light text-dark px-1 rounded"
          style={{
            fontFamily: "monospace",
            fontSize: "0.9em",
            padding: "2px 4px",
            borderRadius: "4px",
            backgroundColor: "#f8f9fa",
          }}
          {...props}
        >
          {children}
        </code>
      );
    }

    return (
      <SyntaxHighlighter
        language={language}
        style={codeStyle}
        customStyle={{
          margin: 0,
          padding: "1em",
          borderRadius: "0.5em",
          fontSize: "0.95em",
        }}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  };

  return (
    <div>
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
        <Container
          className="text-center"
          style={{ marginTop: "1.5em", marginBottom: "1.5em" }}
        >
          <h2 ref={ref} style={{ color: "white" }}>
            <b>{publication.title}</b>
          </h2>
          <div className="lead typist" style={{ color: "white" }}>
            {publication.authors}
          </div>
          <div className="lead typist" style={{ color: "white" }}>
            {publication.venue}
          </div>
        </Container>
      </Jumbotron>
      <div
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "3em",
          marginBottom: "3em",
        }}
      >
        <Container>
          <Row
            className="g-4"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            {publication.links.paper ? (
              <Col
                md={2}
                sm={6}
                xs={12}
                style={{
                  textAlign: "center",
                  marginTop: "1em",
                  marginBottom: "1em",
                }}
              >
                <a
                  href={publication.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lead typist"
                >
                  <FileText
                    style={{
                      color: "primary",
                      marginLeft: "0.5em",
                      marginRight: "0.5em",
                    }}
                  />
                  Paper
                </a>
              </Col>
            ) : null}
            {publication.links.code ? (
              <Col
                md={2}
                sm={6}
                xs={12}
                style={{
                  textAlign: "center",
                  marginTop: "1em",
                  marginBottom: "1em",
                }}
              >
                <a
                  href={publication.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lead typist"
                >
                  <Github
                    style={{
                      color: "primary",
                      marginLeft: "0.5em",
                      marginRight: "0.5em",
                    }}
                  />
                  Code
                </a>
              </Col>
            ) : null}
            {publication.links.thread ? (
              <Col
                md={2}
                sm={6}
                xs={12}
                style={{
                  textAlign: "center",
                  marginTop: "1em",
                  marginBottom: "1em",
                }}
              >
                <a
                  href={publication.links.thread}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lead typist"
                >
                  <Twitter
                    style={{
                      color: "primary",
                      marginLeft: "0.5em",
                      marginRight: "0.5em",
                    }}
                  />
                  Thread
                </a>
              </Col>
            ) : null}
            {publication.links.contact ? (
              <Col
                md={2}
                sm={6}
                xs={12}
                style={{
                  textAlign: "center",
                  marginTop: "1em",
                  marginBottom: "1em",
                }}
              >
                <a
                  href={publication.links.contact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lead typist"
                >
                  <Mail
                    style={{
                      color: "primary",
                      marginLeft: "0.5em",
                      marginRight: "0.5em",
                    }}
                  />
                  Contact
                </a>
              </Col>
            ) : null}
          </Row>
        </Container>
      </div>
      <div
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          marginTop: "3em",
          marginBottom: "3em",
        }}
      >
        <Container style={{ marginTop: "3em" }}>
          <ReactMarkdown
            remarkPlugins={[
              remarkGfm, // GitHub Flavored Markdown support
              remarkBreaks, // Support for line breaks
            ]}
            rehypePlugins={[
              rehypeRaw, // Allows HTML in markdown
              rehypeSanitize, // Sanitizes HTML to prevent XSS
            ]}
            components={{
              img: ImageRendererWithContext,
              table: TableRenderer,
              code: CodeRenderer,
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </Container>

        {publication.links.video ? (
          <Container style={{ marginTop: "1em", marginBottom: "1em" }}>
            <Row className="g-4 align-items-center">
              <Col md="auto" sm={12}>
                <h2>Video</h2>
              </Col>
              <Card>
                <Ratio aspectRatio="16x9">
                  <iframe
                    src={publication.links.video}
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </Ratio>
              </Card>
            </Row>
          </Container>
        ) : null}

        {publication.files.pdf ? (
          <Container style={{ marginTop: "1em", marginBottom: "1em" }}>
            <Row className="g-4 align-items-center">
              <Col md="auto" sm={12}>
                <h2>Paper</h2>
              </Col>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <div style={{ height: "30em", overflow: "auto" }}>
                  <Viewer fileUrl={publication.files.pdf} />
                </div>
              </Worker>
            </Row>
          </Container>
        ) : null}

        {publication.files.bib ? (
          <Container style={{ marginTop: "1em", marginBottom: "1em" }}>
            <Row className="g-4 align-items-center">
              <Col md="auto" sm={12}>
                <h2>Citation</h2>
              </Col>
              <Col md="auto" sm={12}>
                <button
                  style={{
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(bibContent);
                  }}
                >
                  <ClipboardCopy
                    style={{
                      color: "primary",
                    }}
                  />
                </button>
              </Col>
            </Row>
            <div
              className="citation-block"
              style={{
                backgroundColor: "#f5f5f5",
                fontFamily: "monospace",
                borderRadius: "1em",
                padding: "1em",
                color: "#333",
              }}
            >
              <pre>{bibContent}</pre>
            </div>
          </Container>
        ) : null}
      </div>
    </div>
  );
});

export default PublicationDetails;
