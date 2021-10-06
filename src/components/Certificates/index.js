import React from "react";
import "../Experience/style.css";
import Card from "react-bootstrap/Card";

export default function Certificates() {
  const certificate = {
    ns: [
      `Learned Data Structures & Algorithm with Full Stack Web Development.`,
      `Technical Stack learned: Java, NodeJS, ExpressJS, ReactJS, HTML, CSS, JavaScript. `,
      `Top Rank holders in various coding contest organized by the platform and participated in various Hackathons with 300+ assignments/.`,
    ],
    hc: [`Javascript (Intermediate)`, `SQL (Intermediate)`, `Problem Solving`],
    linkedin: [
      `C# & .NET: Programming`,
      `Learning SQL Programming`,
      ` HTML Essential Training`,
      `Programming Foundation : Databases`,
    ],
    coursera: [
      `Building Web Application in PHP`,
      `Introduction to Structured Query Language(SQL)`,
      `Programming for Everybody & Data Structures in Python.`,
    ],
  };

  return (
    <div className="mainContent">
      <div className="headName"> INTERNSHIP &amp; CERTIFICATES </div>
      <div className="certificates">
        <Card>
          <Card.Body>
            <Card.Title>Newton School</Card.Title>
            <Card.Text>May 2021 - Present</Card.Text>
            <Card.Text>
              <ul>
                {certificate.ns.map((desc) => {
                  return <li>{desc}</li>;
                })}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Hackerrank</Card.Title>

            <Card.Text>
              <ul>
                {certificate.hc.map((desc) => {
                  return <li>{desc}</li>;
                })}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title> Linkedin</Card.Title>

            <Card.Text>
              <ul>
                {certificate.linkedin.map((desc) => {
                  return <li>{desc}</li>;
                })}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Coursera</Card.Title>

            <Card.Text>
              <ul>
                {certificate.coursera.map((desc) => {
                  return <li>{desc}</li>;
                })}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
