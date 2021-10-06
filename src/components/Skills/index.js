import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import javaimg from "../../image/java.png";
import csharpimg from "../../image/csharp.svg";
import nodeimg from "../../image/node.png";
import sqlimg from "../../image/sql.png";

import jsimg from "../../image/javascript.png";
import reactimg from "../../image/react.png";
import htmlimg from "../../image/html.png";
import cssimg from "../../image/css.png";

import gitimg from "../../image/git.png";
import vscodeimg from "../../image/vscode.png";
import postimg from "../../image/postman.png";
import dsaimg from "../../image/dsa.JPG";

export default function Skills() {
  return (
    <div className="mainContent">
      <div className="headName">SKILLS</div>
      <div className="skills">
        <Container>
          <Card.Title>Back-End Development</Card.Title>
          <Row xs={1} md={4} className="g-4">
            <Col>
              {" "}
              <Card.Img variant="top" src={csharpimg} />
            </Col>
            <Col>
              {" "}
              <Card.Img variant="top" src={javaimg} />
            </Col>
            <Col>
              {" "}
              <Card.Img variant="top" src={nodeimg} />
            </Col>
            <Col>
              {" "}
              <Card.Img variant="top" src={sqlimg} />
            </Col>
          </Row>
          <br />
          <Card.Title>Front-End Development</Card.Title>
          <Row>
            <Col>
              {" "}
              <Card.Img variant="top" src={jsimg} />
            </Col>
            <Col>
              {" "}
              <Card.Img variant="top" src={reactimg} />
            </Col>
            <Col>
              {" "}
              <Card.Img variant="top" src={htmlimg} />
            </Col>
            <Col>
              {" "}
              <Card.Img variant="top" src={cssimg} />
            </Col>
          </Row>
          <br />
          <Card.Title>Other</Card.Title>
          <Row>
            <Col>
              {" "}
              <Card.Img variant="top" src={gitimg} />
            </Col>
            <Col>
              {" "}
              <Card.Img variant="top" src={vscodeimg} />
            </Col>
            <Col>
              {" "}
              <Card.Img variant="top" src={postimg} />
            </Col>
            <Col>
              {" "}
              <Card.Img variant="top" src={dsaimg} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
