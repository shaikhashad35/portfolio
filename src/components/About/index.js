import React from "react";
import "./style.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="mainContent">
      <div className="center">
        <h1>Hi, I'm Ashad Shaikh</h1>
        <div className="iconsProfile">
          <Link
            to={{ pathname: "https://www.linkedin.com/in/ashad-shaikh/" }}
            target="_blank"
          >
            <span className="linkedin iconProfile">
              <FaIcons.FaLinkedin />
            </span>
          </Link>
          <Link
            to={{ pathname: "https://github.com/shaikhashad35" }}
            target="_blank"
          >
            <span className="github iconProfile">
              <FaIcons.FaGithub />
            </span>
          </Link>
          <Link
            to={{ pathname: "mailto:shaikhashad35@gmail.com" }}
            target="_blank"
          >
            <span className="email iconProfile">
              <FaIcons.FaEnvelope />
            </span>
          </Link>
          <Link
            to={{ pathname: " https://medium.com/@shaikhashad35" }}
            target="_blank"
          >
            <span className="medium iconProfile">
              <FaIcons.FaMedium />
            </span>
          </Link>
          <Link to={{ pathname: "tel:+919768710696" }} target="_blank">
            <span className="phone iconProfile">
              <FaIcons.FaPhone />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
