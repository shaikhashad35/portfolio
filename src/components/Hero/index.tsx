import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaPhone } from 'react-icons/fa';
import { fadeInUp, staggerContainer, slideIn } from '../../utils/animations';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-20px) rotate(5deg); opacity: 0.6; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.1); }
`;

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const FloatingOrb = styled.div<{ $size: number; $top: string; $left: string; $delay: number; $color: string }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  filter: blur(40px);
  animation: ${pulse} ${({ $delay }) => 8 + $delay}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  pointer-events: none;
  z-index: 0;
  opacity: ${({ theme }) => theme.mode === 'dark' ? 1 : 0.7};
`;

const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const Greeting = styled(motion.span)`
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  text-shadow: 0 0 30px rgba(100, 255, 218, 0.3);
  letter-spacing: 2px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  line-height: 1.1;
  background: ${({ theme }) => theme.colors.accentGradientText};
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
  max-width: 600px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const HighlightsBar = styled(motion.div)`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const Highlight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    border-color: ${({ theme }) => theme.colors.cardHoverBorder};
    box-shadow: ${({ theme }) => theme.colors.glowGreen};
    transform: translateY(-2px);
  }

  span:first-child {
    font-size: 1.6rem;
    font-weight: 700;
    background: ${({ theme }) => theme.colors.accentGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
  font-size: 1.5rem;
  transition: ${({ theme }) => theme.transitions.default};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: ${({ theme }) => theme.glass.background};
  backdrop-filter: ${({ theme }) => theme.glass.backdropFilter};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.cardHoverBorder};
    box-shadow: ${({ theme }) => theme.colors.glowGreen};
    transform: translateY(-3px);
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
      <HeroWrapper>
        <FloatingOrb $size={300} $top="10%" $left="70%" $delay={0} $color="rgba(100, 255, 218, 0.05)" />
        <FloatingOrb $size={200} $top="60%" $left="10%" $delay={3} $color="rgba(87, 203, 255, 0.05)" />
        <FloatingOrb $size={150} $top="30%" $left="40%" $delay={6} $color="rgba(167, 139, 250, 0.04)" />
        
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
      </HeroWrapper>
    </Section>
  );
};

export default Hero;