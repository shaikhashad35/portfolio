import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiHome, FiUser, FiBriefcase, FiCode, FiAward, FiBook, FiMail, FiFileText, FiMenu, FiX } from 'react-icons/fi';

interface NavItem {
  title: string;
  to: string;
  icon: JSX.Element;
}

const Header = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.primary}ee;
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: transform 0.3s ease;
`;

const NavContainer = styled.nav`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  text-decoration: none;

  h3 {
    font-size: 1.5rem;
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    margin: 0;
    opacity: 0.8;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const NavLinks = styled(motion.div)<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.primary}ee;
    backdrop-filter: blur(10px);
  }
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  svg {
    font-size: 1.2rem;
  }

  &:hover, &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ResumeLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.9rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  text-decoration: none;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const navItems: NavItem[] = [
  { title: 'Home', to: 'hero', icon: <FiHome /> },
  { title: 'Experience', to: 'experience', icon: <FiBriefcase /> },
  { title: 'Projects', to: 'projects', icon: <FiCode /> },
  { title: 'Skills', to: 'skills', icon: <FiAward /> },
  { title: 'Blog', to: 'blogs', icon: <FiBook /> },
  { title: 'Contact', to: 'contact', icon: <FiMail /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        boxShadow: scrolled ? '0 0 10px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <NavContainer>
        <Logo to="hero" smooth duration={500} onClick={() => setIsOpen(false)}>
          <h3>Ashad Shaikh</h3>
          <p>Software Engineer</p>
        </Logo>

        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </MenuButton>

        <NavLinks isOpen={isOpen}>
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              spy
              activeClass="active"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              {item.title}
            </NavItem>
          ))}
          <ResumeLink
            href="https://drive.google.com/drive/folders/1tr4KTW8Qr-QfhloQxniBehWMGsGQtEy0?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFileText />
            Resume
          </ResumeLink>
        </NavLinks>
      </NavContainer>
    </Header>
  );
};

export default Navbar;