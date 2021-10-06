import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";

export default function Experience() {
  const exp = {
    atcs: [
      `Developed Outlook plugin application which collects the data related to each
              email from Business userthrough addin and maintains it by communicating
              with Rest APIs.`,
      `Designed and implemented Caching which boosted performance by 100ms,
              Logging for Log Monitoring, Emailing Services, etc. for BFSI Web Applications.
              `,
      `Developed various modules which manages 350+ bank’s branches data with its
              deployment and load testing using JMeter.`,
      `Full-Stack Developer: Worked for enhancement of various modules in Sales
        Operation Online System for one of Global 500 Automotive manufacture
        where added dealers of various types which increases the sales by million
        dollars monthly by adding new dealertypes.
        `,
    ],
    uto: [
      `Redesigned one of the core module into Console Application using self
          developed Bucket Based Algorithm which improved efficiency by 400%`,
      `Worked as .Net Full Stack Developer on SaaS product which is used by Sony,
          Viacom, etc for millions of movies and songs rights acquisition.`,
      `Designed and integrated various POCs of Redis for key-value memory caching,
          RabbitMQ for queuing, MongoDB for storing unstructured data, etc. with .NET
          applications for performance analysis.`,
    ],
  };

  return (
    <div className="mainContent">
      <div className="headName"> EXPERIENCE </div>
      <div className="experiences">
        <Card>
          <Card.Body>
            <Card.Title>
              ATCS INC &nbsp; &nbsp; | &nbsp; &nbsp; Associate Software Engineer
            </Card.Title>
            <Card.Text>
              Nov 2020 - Sept 2021 &nbsp; &nbsp; | &nbsp; &nbsp;Mumbai, IN
            </Card.Text>
            <Card.Text>
              <ul>
                {exp.atcs.map((desc) => {
                  return <li>{desc}</li>;
                })}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              UTO SOLUTIONS &nbsp; &nbsp; | &nbsp; &nbsp; Associate Software
              Engineer
            </Card.Title>
            <Card.Text>
              Nov 2019 - Oct 2020 &nbsp; &nbsp; | &nbsp; &nbsp;Mumbai, IN
            </Card.Text>
            <Card.Text>
              <ul>
                {exp.uto.map((desc) => {
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
