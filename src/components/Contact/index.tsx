import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.5rem;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const ContactButton = styled(motion.a)`
  display: inline-block;
  padding: 1.2rem 2.5rem;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  text-decoration: none;
  border-radius: 4px;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent}22;
  }
`;

const socialLinks = [
  {
    icon: FiGithub,
    url: 'https://github.com/shaikhashad35/',
    label: 'GitHub'
  },
  {
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/ashad-shaikh/',
    label: 'LinkedIn'
  },
  {
    icon: FiMail,
    url: 'mailto:shaikhashad35@gmail.com',
    label: 'Email'
  }
];

const Contact = () => {
  return (
    <Section id="contact">
      <ContactContainer>
        <Title>Get In Touch</Title>
        <Subtitle>Let's Build Something Together</Subtitle>
        <Description>
          I'm currently open to new opportunities and collaborations. Whether you have a project in mind
          or just want to chat about backend development, feel free to reach out!
        </Description>
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <link.icon />
            </SocialLink>
          ))}
        </SocialLinks>
        <ContactButton
          href="mailto:shaikhashad35@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiMail style={{ marginRight: '10px' }} />
          Say Hello
        </ContactButton>
      </ContactContainer>
    </Section>
  );
};

export default Contact;