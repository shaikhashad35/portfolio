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
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <div className="mainContent">
      <div className="headName"> BLOGS </div>
      <div className="blogs">
        <Container>
          <Row xs={1} md={2} className="g-4 bloglist">
            <Col>
              <Link
                to={{
                  pathname:
                    "https://medium.com/@shaikhashad35/memory-caching-for-better-performance-d7c1c607e2c2",
                }}
                target="_blank"
              >
                <Card className="blogsDetails">
                  <Card.Img variant="top" src={blog1img} className="blogsImg" />
                </Card>
              </Link>
            </Col>
            <Col>
              <Link
                to={{
                  pathname:
                    "https://medium.com/@shaikhashad35/logging-and-log-maintenance-4676e14ec7c0",
                }}
                target="_blank"
              >
                <Card className="blogsDetails">
                  <Card.Img variant="top" src={blog2img} className="blogsImg" />
                </Card>
              </Link>
            </Col>
            <Col>
              <Link
                to={{
                  pathname:
                    "https://medium.com/@shaikhashad35/microservices-architecture-in-a-nutshell-4d3079f06adc",
                }}
                target="_blank"
              >
                <Card className="blogsDetails">
                  <Card.Img variant="top" src={blog3img} className="blogsImg" />
                </Card>
              </Link>
            </Col>
            <Col>
              <Link
                to={{
                  pathname:
                    "https://medium.com/@shaikhashad35/continuous-deployment-of-website-using-netlify-and-github-8ab5aeced21d",
                }}
                target="_blank"
              >
                <Card className="blogsDetails">
                  <Card.Img variant="top" src={blog4img} className="blogsImg" />
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
