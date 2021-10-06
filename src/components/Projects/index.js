import React from "react";
import Card from "react-bootstrap/Card";
import * as FaIcons from "react-icons/fa";
import "../Experience/style.css";
import { Link } from "react-router-dom";
export default function Projects() {
  const projects = {
    covr: [
      `Developed Website for Covid Resouces which can be used in Pandemics.`,
      `NodeJS server fetches the latest tweet using Twitter API.`,
      `Technologies Used : NodeJS, HTML, Javascipt, CSS`,
    ],
    twitter: [
      `Developed Twitter Backedn APi using NodeJS with JWT authentication`,
      `Functionalities - Follow/Unfollow, Like/Unlike, Login/Signup, etc`,
      `Technologies Used : NodeJS, ExpressJS, MongoDB`,
    ],
    aahar: [
      `Developed Food Donation Website for Needy & NGO`,
      `Technologies Used : HTML, CSS, PHP, MySQL`,
    ],
    portfolio: [
      `Developed portfolio having navbar with all details required`,
      `Technologies Used : ReactJS, JSX, HTML, Bootstrap`,
    ],
  };
  return (
    <div className="mainContent">
      <div className="headName"> PROJECTS </div>
      <div className="projectsdet">
        <Card>
          <Card.Body>
            <Card.Title>
              CovR - Web Application for Covid Resources{" "}
              <Link
                to={{ pathname: "https://github.com/shaikhashad35/CovR" }}
                target="_blank"
              >
                <span className="github smallicon">
                  <FaIcons.FaGithub />
                </span>
              </Link>
              <Link
                to={{
                  pathname: "https://gentle-headland-89379.herokuapp.com/",
                }}
                target="_blank"
              >
                <span className="link ">
                  <FaIcons.FaLink />
                </span>
              </Link>
            </Card.Title>
            <Card.Text>
              <ul>
                {projects.covr.map((desc) => {
                  return <li>{desc}</li>;
                })}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              Twitter Backend API{" "}
              <Link
                to={{
                  pathname: "https://github.com/shaikhashad35/TwitterBackend",
                }}
                target="_blank"
              >
                <span className="github smallicon">
                  <FaIcons.FaGithub />
                </span>
              </Link>
              <Link
                to={{
                  pathname: "https://aqueous-tundra-14265.herokuapp.com/",
                }}
                target="_blank"
              >
                <span className="link ">
                  <FaIcons.FaLink />
                </span>
              </Link>
            </Card.Title>

            <Card.Text>
              <ul>
                {projects.twitter.map((desc) => {
                  return <li>{desc}</li>;
                })}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              AAHAAR - Food Donation Website
              <Link
                to={{
                  pathname: "https://github.com/shaikhashad35/Aahar",
                }}
                target="_blank"
              >
                <span className="github smallicon">
                  <FaIcons.FaGithub />
                </span>
              </Link>
              <Link
                to={{
                  pathname:
                    "https://drive.google.com/drive/folders/1lDQRTAhWdbBI1k8zMknwEIEMXxw1Pen9",
                }}
                target="_blank"
              >
                <span className="link ">
                  <FaIcons.FaLink />
                </span>
              </Link>
            </Card.Title>

            <Card.Text>
              <ul>
                {projects.aahar.map((desc) => {
                  return <li>{desc}</li>;
                })}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              Portfolio - Ashad Shaikh
              <Link
                to={{
                  pathname: "https://github.com/shaikhashad35/portfolio",
                }}
                target="_blank"
              >
                <span className="github smallicon">
                  <FaIcons.FaGithub />
                </span>
              </Link>
              <Link
                to={{
                  pathname: "https://github.com/shaikhashad35/portfolio",
                }}
                target="_blank"
              >
                <span className="link ">
                  <FaIcons.FaLink />
                </span>
              </Link>
            </Card.Title>

            <Card.Text>
              <ul>
                {projects.portfolio.map((desc) => {
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
