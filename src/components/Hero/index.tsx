import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaPhone } from 'react-icons/fa';
import { fadeInUp, staggerContainer, slideIn } from '../../utils/animations';

const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  min-height: 100vh;
  justify-content: center;
  margin-top: 0;
`;

const Greeting = styled(motion.span)`
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  line-height: 1.1;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.textLight},
    ${({ theme }) => theme.colors.accent}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 5vw, 2rem);
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
`;

const Description = styled(motion.p)`
  max-width: 540px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
`;

const HighlightsBar = styled(motion.div)`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    gap: 1rem;
    justify-content: center;
  }
`;

const Highlight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  span:first-child {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  span:last-child {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 0.3rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.8rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const CodeLine = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.accent};
  opacity: 0.5;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Hero = () => {
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
    <Section id="hero">
      <HeroContent
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <Greeting variants={slideIn('left')}>Hi, I'm</Greeting>
        
        <Title variants={fadeInUp}>Ashad Shaikh</Title>
        
        <Subtitle variants={fadeInUp}>Software Engineer II @ Microsoft</Subtitle>
        
        <Description variants={fadeInUp}>
          Software Engineer at Microsoft, building security-critical backend systems at scale. 
          6 years of experience designing scalable microservices, APIs, and cloud-native architectures. 
          Passionate about leveraging AI to accelerate development and solve complex engineering problems.
        </Description>

        <HighlightsBar variants={fadeInUp}>
          <Highlight>
            <span>6+</span>
            <span>Years Experience</span>
          </Highlight>
          <Highlight>
            <span>4+</span>
            <span>Companies</span>
          </Highlight>
          <Highlight>
            <span>AI</span>
            <span>Driven Development</span>
          </Highlight>
          <Highlight>
            <span>10+</span>
            <span>Services Built</span>
          </Highlight>
        </HighlightsBar>
        
        <SocialLinks variants={fadeInUp}>
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon />
            </SocialLink>
          ))}
        </SocialLinks>
      </HeroContent>
    </Section>
  );
};

export default Hero;