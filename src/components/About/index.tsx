import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMedium, FaPhone } from 'react-icons/fa';
import Section from '../common/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const AboutContainer = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  margin-bottom: 2rem;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.textLight},
    ${({ theme }) => theme.colors.accent}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SocialIcons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.8rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const About = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/ashad-shaikh/',
      label: 'LinkedIn'
    },
    {
      icon: FaGithub,
      url: 'https://github.com/shaikhashad35',
      label: 'GitHub'
    },
    {
      icon: FaEnvelope,
      url: 'mailto:shaikhashad35@gmail.com',
      label: 'Email'
    },
    {
      icon: FaMedium,
      url: 'https://medium.com/@shaikhashad35',
      label: 'Medium'
    },
    {
      icon: FaPhone,
      url: 'tel:+919768710696',
      label: 'Phone'
    }
  ];

  return (
    <Section id="about">
      <AboutContainer
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <SocialIcons variants={staggerContainer}>
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon />
            </SocialLink>
          ))}
        </SocialIcons>
      </AboutContainer>
    </Section>
  );
};

export default About;