import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";

function Navbar() {
  //   const [sidebar, setSidebar] = useState(false);

  //   const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className={true ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="about" className="menu-bars">
              <h3> Ashad Shaikh </h3>
              <p> Full Stack Developer</p>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                {item.title == "Resume" ? (
                  <Link
                    to={{
                      pathname:
                        "https://drive.google.com/drive/folders/1tr4KTW8Qr-QfhloQxniBehWMGsGQtEy0?usp=sharing",
                    }}
                    target="_blank"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
