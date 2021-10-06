import React from "react";
import "../Experience/style.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import blog1img from "../../image/blog1.JPG";
import blog2img from "../../image/blog2.JPG";
import blog3img from "../../image/blog3.JPG";
import blog4img from "../../image/blog4.JPG";

export default function Blogs() {
  return (
    <div className="mainContent">
      <div className="headName"> BLOGS </div>
      <div className="blogs">
        <Container>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card className="blogsDetails">
                <Card.Img variant="top" src={blog1img} className="blogsImg" />
              </Card>
            </Col>
            <Col>
              <Card className="blogsDetails">
                <Card.Img variant="top" src={blog2img} className="blogsImg" />
              </Card>
            </Col>
            <Col>
              <Card className="blogsDetails">
                <Card.Img variant="top" src={blog3img} className="blogsImg" />
              </Card>
            </Col>
            <Col>
              <Card className="blogsDetails">
                <Card.Img variant="top" src={blog4img} className="blogsImg" />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
