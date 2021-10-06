import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Experience",
    path: "/experience",
    icon: <FaIcons.FaChartLine />,
    cName: "nav-text blue ",
  },
  {
    title: "Education",
    path: "/education",
    icon: <IoIcons.IoIosSchool />,
    cName: "nav-text orange",
  },
  {
    title: "Skills",
    path: "/skills",
    icon: <FaIcons.FaCode />,
    cName: "nav-text red",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FaIcons.FaGlobe />,
    cName: "nav-text darkblue",
  },
  {
    title: "Certificates",
    path: "/certificates",
    icon: <FaIcons.FaAward />,
    cName: "nav-text yellow",
  },
  {
    title: "Blogs",
    path: "/blogs",
    icon: <FaIcons.FaPen />,
    cName: "nav-text purple",
  },
  {
    title: "Resume",
    path: "https://drive.google.com/drive/folders/1tr4KTW8Qr-QfhloQxniBehWMGsGQtEy0?usp=sharing",
    icon: <FaIcons.FaFileAlt />,
    cName: "nav-text black",
  },
];
