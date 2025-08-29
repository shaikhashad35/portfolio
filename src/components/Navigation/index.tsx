import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.primary}dd;
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.5rem;
  cursor: pointer;
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

const NavLinks = styled(motion.div)<{ isMobile: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: ${({ isMobile }) => (isMobile ? 'flex' : 'none')};
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

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.heading};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
  { name: 'Blog', to: 'blogs' },
  { name: 'Contact', to: 'contact' },
];

const Navigation = () => {
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
      transition={{ duration: 0.5 }}
      style={{
        boxShadow: scrolled ? '0 0 10px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <Nav>
        <Logo
          to="hero"
          smooth
          duration={500}
          spy
          onClick={() => setIsOpen(false)}
        >
          AS
        </Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </MenuButton>
        <AnimatePresence>
          {(isOpen || window.innerWidth > 768) && (
            <NavLinks
              isMobile={window.innerWidth <= 768}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={500}
                  spy
                  activeClass="active"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </NavLinks>
          )}
        </AnimatePresence>
      </Nav>
    </Header>
  );
};

export default Navigation;