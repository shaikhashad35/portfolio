import { FaChartLine, FaCode, FaGlobe, FaAward, FaPen, FaFileAlt } from 'react-icons/fa';
import { IoIosSchool } from 'react-icons/io';

interface NavItem {
  title: string;
  to: string;
  icon: JSX.Element;
  isExternal?: boolean;
}

export const navItems: NavItem[] = [
  {
    title: 'Experience',
    to: 'experience',
    icon: <FaChartLine />
  },
  {
    title: 'Education',
    to: 'education',
    icon: <IoIosSchool />
  },
  {
    title: 'Skills',
    to: 'skills',
    icon: <FaCode />
  },
  {
    title: 'Projects',
    to: 'projects',
    icon: <FaGlobe />
  },
  {
    title: 'Certificates',
    to: 'certificates',
    icon: <FaAward />
  },
  {
    title: 'Blogs',
    to: 'blogs',
    icon: <FaPen />
  },
  {
    title: 'Resume',
    to: 'https://drive.google.com/drive/folders/1tr4KTW8Qr-QfhloQxniBehWMGsGQtEy0?usp=sharing',
    icon: <FaFileAlt />,
    isExternal: true
  }
];