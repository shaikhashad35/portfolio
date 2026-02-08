import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiHome, FiUser, FiBriefcase, FiCode, FiAward, FiBook, FiMail, FiFileText, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useThemeToggle } from '../common/ThemeProvider';

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
  background: ${({ theme }) => theme.colors.navBg};
  backdrop-filter: blur(16px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  z-index: 1000;
  transition: transform 0.3s ease, background 0.4s ease;
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
  gap: 1.2rem;

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
  gap: 0.3rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.85rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  position: relative;
  padding-bottom: 4px;

  svg {
    font-size: 1.2rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: ${({ theme }) => theme.transitions.default};
  }

  &:hover, &.active {
    color: ${({ theme }) => theme.colors.accent};

    &::after {
      width: 100%;
    }
  }
`;

const ResumeLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 0.85rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  padding: 0.4rem 0.8rem;
  border-radius: 4px;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent}22;
  }
`;

const NavRightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggle = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  padding: 0.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  transition: ${({ theme }) => theme.transitions.default};
  width: 2.2rem;
  height: 2.2rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors.cardHoverBorder};
    box-shadow: ${({ theme }) => theme.colors.glowGreen};
    transform: rotate(20deg);
  }
`;

const navItems: NavItem[] = [
  { title: 'Home', to: 'hero', icon: <FiHome /> },
  { title: 'Experience', to: 'experience', icon: <FiBriefcase /> },
  { title: 'Skills', to: 'skills', icon: <FiAward /> },
  // { title: 'Projects', to: 'projects', icon: <FiCode /> },
  { title: 'Education', to: 'education', icon: <FiBook /> },
  { title: 'Certificates', to: 'certificates', icon: <FiAward /> },
  { title: 'Blog', to: 'blogs', icon: <FiFileText /> },
  { title: 'Contact', to: 'contact', icon: <FiMail /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useThemeToggle();

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
          <NavRightGroup>
            <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? <FiSun /> : <FiMoon />}
            </ThemeToggle>
            <ResumeLink
              href="https://drive.google.com/file/d/1Wx3bFQlSOBRPli49TADByTiBpNIfW86D/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFileText />
              Resume
            </ResumeLink>
          </NavRightGroup>
        </NavLinks>
      </NavContainer>
    </Header>
  );
};

export default Navbar;